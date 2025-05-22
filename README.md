# Portfolio Website

This is a modern portfolio website built with Next.js, React, and TypeScript. This README provides instructions on how to make changes to the website content.

## Table of Contents

1. [Getting Started](#getting-started)
2. [How to Update Your Information](#how-to-update-your-information)
3. [How to Update Projects](#how-to-update-projects)
4. [How to Update Technical Skills](#how-to-update-technical-skills)
5. [How to Add/Replace Images and Videos](#how-to-addreplace-images-and-videos)
6. [Running the Website Locally](#running-the-website-locally)

## Getting Started

This website uses a data file to manage most of the content. This makes it easy to update information without needing to modify code.

### Prerequisites

- Basic knowledge of text editing
- Access to the project files
- A code editor (like Visual Studio Code, Notepad++, or even Notepad)

## How to Update Your Information

All personal information is stored in the `lib/data.ts` file. To update your contact information:

1. Open the `lib/data.ts` file in a text editor
2. Find the `GENERAL_INFO` section at the top
3. Update the values for:
   - `email`: Your email address
   - `emailSubject`: Default subject line when someone clicks to email you
   - `emailBody`: Default email body content
   - `linkedInProfile`: Your LinkedIn profile URL
   - `upworkProfile`: Your Upwork profile URL

Example:
```typescript
export const GENERAL_INFO = {
    email: 'your.new.email@example.com',
    emailSubject: "New subject line",
    emailBody: 'New email body text...',
    linkedInProfile: 'https://www.linkedin.com/in/your-profile/',
    upworkProfile: 'https://www.upwork.com/freelancers/your-profile',
};
```

To update your social links:

1. Find the `SOCIAL_LINKS` section
2. Add, remove, or modify the social media links as needed

Example:
```typescript
export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/your-username' },
    { name: 'linkedin', url: GENERAL_INFO.linkedInProfile },
    { name: 'upwork', url: GENERAL_INFO.upworkProfile },
];
```

## How to Update Projects

The projects section displays your portfolio work. To update or add projects:

1. Find the `PROJECTS` array in `lib/data.ts`
2. Each project is an object with these properties:
   - `title`: The name of your project
   - `slug`: A URL-friendly version of the title (no spaces, lowercase)
   - `liveUrl`: (Optional) Link to the live project
   - `year`: The year the project was completed
   - `description`: Description with HTML formatting (`<br/>`, `<ul>`, `<li>` tags allowed)
   - `role`: Your role in the project (supports HTML formatting)
   - `techStack`: Array of technologies used
   - `thumbnail`: Path to the main preview image or video
   - `longThumbnail`: Path to a larger preview (can be the same as thumbnail)
   - `images`: Array of image paths for project gallery
   - `videos`: (Optional) Array of video paths for project gallery

Example of adding a new project:
```typescript
{
    title: 'My New Project',
    slug: 'my-new-project',
    liveUrl: 'https://myproject.com',
    year: 2024,
    description: `
        Project description with <br/> line breaks. <br/> <br/>
        
        Key Features:<br/>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
    `,
    role: `
        Project Role <br/>
        Responsibilities included:
        <ul>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
        </ul>
    `,
    techStack: [
        'React', 
        'TypeScript', 
        'Other Technology'
    ],
    thumbnail: '/projects/new-project/images/thumbnail.png',
    longThumbnail: '/projects/new-project/images/long-thumbnail.png',
    images: [
        '/projects/new-project/images/1.png',
        '/projects/new-project/images/2.png',
    ],
    videos: [
        '/projects/new-project/videos/demo.mp4',
    ],
}
```

To add a new project, copy an existing project block and modify the values.

## How to Update Technical Skills

Your technical skills are organized in the `MY_STACK` object in `lib/data.ts`. Skills are grouped by category:

- `frontend`: Front-end development technologies
- `backend`: Back-end development technologies
- `database`: Database technologies
- `cloud`: Cloud services
- `devops`: DevOps tools
- `apis`: API integrations
- `ai`: AI tools and technologies
- `messaging`: Messaging technologies
- `tools`: Miscellaneous tools

To update a skill category:

1. Find the appropriate category in the `MY_STACK` object
2. Each skill has a `name` and an `icon` (image path)
3. Add, remove, or modify skills as needed

Example:
```typescript
frontend: [
    {
        name: 'React.js',
        icon: '/logo/react.png',
    },
    {
        name: 'Your New Skill',
        icon: '/logo/new-skill.png',
    },
],
```

## How to Add/Replace Images and Videos

Project images and videos are stored in the `public` folder:

1. For project assets:
   - Create a folder in `public/projects/[project-slug]/`
   - Within that, create `images` and/or `videos` folders
   - Add your files to these folders
   - Reference the paths in the project data as `/projects/[project-slug]/images/filename.png`

2. For skill icons:
   - Add icons to the `public/logo/` directory
   - Reference them in the skills data as `/logo/filename.png`

**Important:** Make sure the file paths in the data.ts file exactly match the actual file locations and names, including capitalization.

## Running the Website Locally

If you want to see your changes before deploying:

1. Open a terminal or command prompt
2. Navigate to the project folder
3. Run the following commands:

```
npm install
npm run dev
```

4. Open a web browser and go to http://localhost:3000

## Getting Help

If you encounter any issues making updates, please reach out to a technical team member for assistance. 
