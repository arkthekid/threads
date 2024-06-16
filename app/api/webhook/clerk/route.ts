import { Webhook, WebhookRequiredHeaders } from "svix";
import { headers } from "next/headers";
import { IncomingHttpHeaders } from "http";
import { NextResponse } from "next/server";
import {
  addMemberToCommunity,
  createCommunity,
  deleteCommunity,
  removeUserFromCommunity,
  updateCommunityInfo,
} from "@/lib/actions/community.actions";

type EventType =
  | "organization.created"
  | "organizationInvitation.created"
  | "organizationMembership.created"
  | "organizationMembership.deleted"
  | "organization.updated"
  | "organization.deleted";

type Event = {
  data: Record<string, any>;
  object: "event";
  type: EventType;
};

export const maxDuration = 5;
export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  return new Response('Vercel', {
    status: 200,
  });
}

export const POST = async (request: Request) => {
  const payload = await request.json();
  const header = headers();

  const heads = {
    "svix-id": header.get("svix-id"),
    "svix-timestamp": header.get("svix-timestamp"),
    "svix-signature": header.get("svix-signature"),
  };

  const wh = new Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");

  let evnt: Event | null = null;

  try {
    evnt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (err : any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }

  const eventType: EventType = evnt?.type!;

  try {
    switch (eventType) {
      case "organization.created":
        const { id, name, slug, logo_url, image_url, created_by } = evnt?.data ?? {};
        await createCommunity(id, name, slug, logo_url || image_url, "org bio", created_by);
        break;
      case "organizationInvitation.created":
        console.log("Invitation created", evnt?.data);
        break;
      case "organizationMembership.created":
        const { organization, public_user_data } = evnt?.data;
        await addMemberToCommunity(organization.id, public_user_data.user_id);
        break;
      case "organizationMembership.deleted":
        await removeUserFromCommunity(evnt?.data.public_user_data.user_id, evnt?.data.organization.id);
        break;
      case "organization.updated":
        await updateCommunityInfo(evnt?.data.id, evnt?.data.name, evnt?.data.slug, evnt?.data.logo_url);
        break;
      case "organization.deleted":
        await deleteCommunity(evnt?.data.id);
        break;
      default:
        return NextResponse.json({ message: "Unhandled event type" }, { status: 400 });
    }
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
