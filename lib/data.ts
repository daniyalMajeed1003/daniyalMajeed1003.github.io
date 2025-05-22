import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'daniyal.majeed1003@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Daniyal, I am reaching out to you because...',

    linkedInProfile: 'https://www.linkedin.com/in/daniyal-majeed-b56b6311a/',
    upworkProfile: 'https://www.upwork.com/freelancers/~0190b3fbb1ba6706f5',
};

export const SOCIAL_LINKS = [
    // { name: 'github', url: 'https://github.com/daniyal-majeed' },
    { name: 'linkedin', url: GENERAL_INFO.linkedInProfile },
    { name: 'upwork', url: GENERAL_INFO.upworkProfile },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'HTML/CSS',
            icon: '/logo/html-css.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
    ],
    backend: [
        {
            name: 'GoLang',
            icon: '/logo/golang.png',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Django REST Framework',
            icon: '/logo/django.png',
        },
        {
            name: 'Yii2',
            icon: '/logo/yii3.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Oracle',
            icon: '/logo/oracle.png',
        },
    ],
    cloud: [
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'EC2',
            icon: '/logo/aws.png',
        },
        {
            name: 'S3',
            icon: '/logo/aws.png',
        },
        {
            name: 'Lambda',
            icon: '/logo/awslambda.png',
        },
        {
            name: 'DigitalOcean',
            icon: '/logo/digitalOcean.png',
        },
    ],
    devops: [
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Ansible',
            icon: '/logo/ansible.png',
        },
        {
            name: 'Jenkins',
            icon: '/logo/jenkins.png',
        },
    ],
    apis: [
        {
            name: 'Stripe',
            icon: '/logo/stripe.png',
        },
        {
            name: 'Persona',
            icon: '/logo/persona.jpeg',
        },
        {
            name: 'Twilio',
            icon: '/logo/twilio.png',
        },
        {
            name: 'OpenAI',
            icon: '/logo/openai.png',
        },
        {
            name: 'Alice',
            icon: '/logo/alice.png',
        },
        {
            name: 'Confirmo',
            icon: '/logo/confirmo.png',
        },
    ],
    ai: [
        {
            name: 'OpenAI',
            icon: '/logo/openai.png',
        },
        {
            name: 'ChatGPT',
            icon: '/logo/chatgpt.png',
        },
        {
            name: 'Cursor',
            icon: '/logo/cursor.png',
        },
        {
            name: 'Claude',
            icon: '/logo/claude.webp',
        },
    ],
    messaging: [
        {
            name: 'REST APIs',
            icon: '/logo/rest.png',
        },
        {
            name: 'Microservices',
            icon: '/logo/micro.png',
        },
        {
            name: 'RabbitMQ',
            icon: '/logo/RabbitMQ.png',
        },
        {
            name: 'Kafka',
            icon: '/logo/kafka.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Jira',
            icon: '/logo/jira.png',
        },
        {
            name: 'Confluence',
            icon: '/logo/Confluence.png',
        },
        {
            name: 'Crystal Reports',
            icon: '/logo/crystalReports.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Tribl.app',
        slug: 'tribl',
        liveUrl: 'https://tribl.app',
        year: 2024,
        description: `
      A creator-first social platform where creativity meets community and passion fuels engagement. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>👥 User Management: Secure authentication and profile management</li>
        <li>💰 Payment Integration: Seamless monetization through Stripe</li>
        <li>🔍 Identity Verification: User verification through Persona</li>
        <li>🤖 AI Integration: Content validation using OpenAI</li>
        <li>📱 Responsive Design: Custom UI from Figma designs</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed modular API architecture for scalability</li>
        <li>Implemented secure payment workflows with Stripe</li>
        <li>Created responsive UI with pixel-perfect implementation from Figma</li>
        <li>Integrated OpenAI for LLM-based content validation</li>
      </ul>
      `,
        role: `
      Full Stack Developer - Team Lead <br/>
      Responsibilities included:
      <ul>
        <li>✅ Backend: Developed architecture in Node.js with modular API flows</li>
        <li>🎨 Frontend: Created responsive UI with Next.js and TypeScript from Figma designs</li>
        <li>🔒 Security: Implemented secure user and content workflows</li>
        <li>🔌 Integrations: Connected Stripe (payments), Persona (identity), and OpenAI</li>
        <li>🚀 Delivery: Produced a production-ready MVP with real-time features</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Node.js',
            'TypeScript',
            'Stripe',
            'OpenAI',
            'Persona',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/tribl/videos/1.mov',
        longThumbnail: '/projects/tribl/videos/1.mov',
        images: [],
        videos: [
            '/projects/tribl/videos/1.mov',
        ],
    },
    {
        title: 'SaevolGo UCaaS Platform',
        slug: 'saevolgo',
        year: 2023,
        description: `
      A comprehensive UCaaS (Unified Communications as a Service) platform providing messaging and calling solutions. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📞 Call Center Configuration: Dynamic setup of call routing and features</li>
        <li>📱 Mobile App Integration: Custom web tabs for in-app settings management</li>
        <li>💬 Web Chat: Real-time messaging with call history</li>
        <li>🔄 Role Management: Flexible user permissions system</li>
        <li>🔌 Legacy Integration: Connection to existing call center infrastructure</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built microservices architecture for data provisioning</li>
        <li>Created React-based admin portals for VoIP/SIP configuration</li>
        <li>Implemented WebRTC for real-time communication</li>
        <li>Developed UI-to-DB mappings for complex configuration settings</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Over 5+ years at SaevolGo:
      <ul>
        <li>✅ Backend: Developed microservices in GoLang for data provisioning</li>
        <li>🎨 Frontend: Built admin portals with React for call center configuration</li>
        <li>📱 Mobile: Created web tabs for settings management in mobile apps</li>
        <li>🔌 Integration: Built middleware to connect with legacy systems</li>
        <li>📊 Architecture: Designed scalable data structure for complex SIP settings</li>
      </ul>
      `,
        techStack: [
            'React',
            'GoLang',
            'PostgreSQL',
            'WebRTC',
            'Microservices',
        ],
        thumbnail: '/projects/saevolgo/images/1.png',
        longThumbnail: '/projects/saevolgo/images/1.png',
        images: [
            '/projects/saevolgo/images/1.png',
            '/projects/saevolgo/images/2.png',
            '/projects/saevolgo/images/3.png',
            '/projects/saevolgo/images/4.png',
            '/projects/saevolgo/images/5.png',
            '/projects/saevolgo/images/6.png',
            '/projects/saevolgo/images/7.png',
            '/projects/saevolgo/images/8.png',
            '/projects/saevolgo/images/9.png',
            '/projects/saevolgo/images/10.png',
            '/projects/saevolgo/images/11.png',
            '/projects/saevolgo/images/12.png',
        ],
    },
    {
        title: 'Inventory Management System',
        slug: 'inventory-management',
        year: 2020,
        description: `
      A desktop application developed to solve inventory and accounting management problems for point of sale and mobile accessories businesses. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📦 Inventory Tracking: Real-time stock management</li>
        <li>💰 POS Integration: Sales processing and reporting</li>
        <li>📊 Financial Reports: Comprehensive accounting tools</li>
        <li>🔔 SMS Notifications: Customer and inventory alerts</li>
        <li>⚙️ Customization: Business-specific configuration options</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed a complete desktop solution with .NET Framework</li>
        <li>Designed normalized database schema for inventory and accounting</li>
        <li>Implemented robust transaction processing system</li>
        <li>Created intuitive UI for non-technical users</li>
      </ul>
      `,
        role: `
      Lead Developer <br/>
      Responsibilities included:
      <ul>
        <li>✅ Backend: Database design and business logic implementation</li>
        <li>🎨 Frontend: UI/UX design for the desktop application</li>
        <li>📊 Reporting: Financial and inventory reporting system</li>
        <li>🔌 Integration: SMS service integration for notifications</li>
      </ul>
      `,
        techStack: [
            '.NET Framework',
            'MySQL',
            'Database Design',
            'Desktop Application',
        ],
        thumbnail: '/projects/ims/videos/IMS Working Demo.mp4',
        longThumbnail: '/projects/ims/videos/IMS Working Demo.mp4',
        images: [
            '/projects/ims/images/1.png',
        ],
        videos: [
            '/projects/ims/videos/IMS Working Demo.mp4',
        ],
    },
    {
        title: 'JanahApp Web App',
        slug: 'janahapp',
        year: 2018,
        description: `
      A comprehensive travel planning web application built for a Saudi Arabian client. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🗺️ Interactive Trip Planning: Sequential flow for creating detailed itineraries</li>
        <li>📍 Custom Map Integration: Pin placement for locations</li>
        <li>👥 Social Features: Sharing, liking, and commenting on trip plans</li>
        <li>🏙️ Location Database: Extensive collection of countries, cities, and points of interest</li>
        <li>🌐 Multi-language Support: Full Arabic language integration</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built with Yii2 PHP framework</li>
        <li>Implemented custom UI with jQuery and Bootstrap</li>
        <li>Created dynamic partial views for sequence-based trip planning</li>
        <li>Designed responsive layout for all device sizes</li>
      </ul>
      `,
        role: `
      Web Developer <br/>
      Responsibilities included:
      <ul>
        <li>✅ Backend: API development and database design</li>
        <li>🎨 Frontend: Implementation of custom modules and pages</li>
        <li>📱 Responsive Design: Ensuring compatibility across devices</li>
        <li>🔄 Feature Development: Building core functionality for trip planning</li>
      </ul>
      `,
        techStack: [
            'PHP',
            'Yii2',
            'jQuery',
            'Bootstrap',
            'Microsoft SQL Server',
        ],
        thumbnail: '/projects/janahapp/images/1.png',
        longThumbnail: '/projects/janahapp/images/1.png',
        images: [
            '/projects/janahapp/images/1.png',
        ],
    },
    {
        title: 'FaithIQ Web App',
        slug: 'faithiq',
        year: 2018,
        description: `
      A content-driven platform for religious education and Q&A. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎥 Video Content Library: Organized collection of educational videos</li>
        <li>❓ Question Submission: User-generated questions with voting system</li>
        <li>🔔 Notification System: Alerts for new content addressing user questions</li>
        <li>👤 User Management: Profile creation, commenting and interaction</li>
        <li>📱 Mobile Integration: API support for mobile applications</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed with Yii2 PHP framework</li>
        <li>Designed normalized database schema for content management</li>
        <li>Built RESTful APIs for mobile client integration</li>
        <li>Implemented social features with comment threads and notifications</li>
      </ul>
      `,
        role: `
      Web Developer <br/>
      Responsibilities included:
      <ul>
        <li>✅ Backend: Database design and API development</li>
        <li>🎨 Frontend: Implementation of user interface</li>
        <li>📱 Mobile Integration: Building APIs for mobile clients</li>
        <li>👤 User Experience: Creating interactive features for community engagement</li>
      </ul>
      `,
        techStack: [
            'PHP',
            'Yii2',
            'MySQL',
            'Bootstrap',
            'jQuery',
        ],
        thumbnail: '/projects/faithiq/images/1.png',
        longThumbnail: '/projects/faithiq/images/1.png',
        images: [
            '/projects/faithiq/images/1.png',
        ],
    },
];

export const EXPERIENCES = [
    {
        company: 'Tribl',
        position: 'Full Stack Developer (Remote)',
        duration: 'October 2023 - Present',
        description:
            'Created a complete social platform with custom Figma designs and third-party integrations including Stripe, Persona, and OpenAI. Built modern architecture with Node.js backend and Next.js frontend.',
    },
    {
        company: 'SaevolGo',
        position: 'Senior Software Engineer (Remote)',
        duration: 'December 2020 - March 2025',
        description:
            'Worked as team lead building end-to-end solutions for clients. Developed admin portals using React.js for call center configurations and backend microservices in GoLang for data provisioning.',
    },
    {
        company: 'NetSol',
        position: 'Software Engineer',
        duration: 'October 2019 - December 2020',
        description:
            'Worked on the legacy LeaseSoft product built on .NET and Oracle, handling complex financial software systems and database management.',
    },
    {
        company: 'Next Bridge',
        position: 'Data Scientist and Machine Learning Engineer',
        duration: 'November 2018 - January 2019',
        description:
            'Applied data science and machine learning techniques to solve real-world problems, utilizing statistical analysis and predictive modeling.',
    },
    {
        company: 'Granjur Technologies',
        position: 'Web Developer',
        duration: 'August 2018 - November 2018',
        description:
            'Developed web applications using Yii2 PHP framework, building modules and pages for client websites including JanahApp and FaithIQ.',
    },
];

export const EDUCATION = {
    university: 'Central University of Punjab',
    degree: 'Bachelor of Applied Science (B.A.Sc.), Computer Science',
    duration: '2014-2018',
};

export const SKILLS_SUMMARY = {
    title: "Full-Stack Engineer with expertise in GoLang, Node.js, React, and Next.js",
    description: "I specialize in crafting microservices architectures, API integrations, and UI-driven database workflows for social media and telecom SaaS platforms. My focus is on delivering performant backends and intuitive admin interfaces that are both scalable and secure."
};
