# Full Stack Threads Clone

This is the official repository for my Full Stack Threads Clone.

## Tech Stack
- ***Next.js***: A React framework for building fast web applications.
- ***MongoDB***: A NoSQL database for storing application data.
- ***Shadcn UI***: A UI framework for building visually appealing interfaces.
- ***TailwindCSS***: A utility-first CSS framework for styling.
- ***Clerk***: Authentication service for managing user login and social logins.
- ***Webhooks***: For real-time events listening and notifications.
- ***Serverless APIs***: For building scalable backend services.
- ***React Hook Form***: For efficient form management.
- ***Zod***: For data validation and integrity.
- ***TypeScript***: For type safety and improved developer experience.

## Features

***Authentication***: 

Using Clerk for email, password, and social logins (Google and GitHub) with a comprehensive profile management system.

***Visually Appealing Home Page***: 

A home page showcasing the latest threads for an engaging user experience.

***Create Thread Page***:

A dedicated page for users to create threads, fostering community engagement.

***Commenting Feature***: 

A commenting feature to facilitate discussions within threads.

***Nested Commenting***: 

A commenting system with nested threads, providing a structured conversation flow.

***User Search with Pagination***: 

A user search feature with pagination for easy exploration and discovery of other users.

***Activity Page***: 

Display notifications on the activity page when someone comments on a user's thread, enhancing user engagement.

***Profile Page***: 

User profile pages for showcasing information and enabling modification of profile settings.

***Create and Invite to Communities***: 

Allow users to create new communities and invite others using customizable template emails.

***Community Member Management***: 

A user-friendly interface to manage community members, allowing role changes and removals.

***Admin-Specific Community Threads***: 

Enable admins to create threads specifically for their community.

***Community Search with Pagination***: 

A community search feature with pagination for exploring different communities.

***Community Profiles***: 

Display community profiles showcasing threads and members for a comprehensive overview.

***Figma Design Implementation***: 

Transform Figma designs into a fully functional application with pixel-perfect and responsive design.

***Blazing-Fast Performance***: 

Optimal performance and instantaneous page switching for a seamless user experience.

***Server Side Rendering***: 

Utilize Next.js with Server Side Rendering for enhanced performance and SEO benefits.

***MongoDB with Complex Schemas***: 

Handle complex schemas and multiple data populations using MongoDB.

***File Uploads with UploadThing***: 

File uploads using UploadThing for a seamless media-sharing experience.

***Real-Time Events Listening***: 

Real-time events listening with webhooks to keep users updated.

***Middleware, API Actions, and Authorization***: 

Utilize middleware, API actions, and authorization for robust application security.

***Next.js Layout Route Groups***: 

Next.js layout route groups for efficient routing.

***Data Validation with Zod***: 

Data integrity with data validation using Zod.

***Form Management with React Hook Form***: 

Efficient management of forms with React Hook Form for a streamlined user input experience.

***Code Architecture and Reusability***: 

Implementing best practices for code architecture and reusability.

## Quick Start

Follow these steps to set up the project locally on your machine.

1. **Prerequisites**

Make sure you have the following installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

2. **Cloning the Repository**

Clone the repository and navigate to the project directory:

    git clone https://github.com/arkthekid/threads.git
    cd threads

3. **Installation**

Install the project dependencies using npm:

    npm install
    
4. **Set Up Environment Variables**

Create a new file named .env in the root of your project and add the following content:
  
    MONGODB_URL=
    CLERK_SECRET_KEY=
    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=
    NEXT_CLERK_WEBHOOK_SECRET=
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up for the corresponding services on MongoDB, Clerk, and UploadThing.

5. **Running the Project**

Start the development server:

    npm run dev
    Open http://localhost:3000 in your browser to view the project.
