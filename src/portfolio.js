/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akshay's Portfolio",
  description:
    "I am a passionate student striving to be a well-rounded software engineer. Right now, I am finishing my Bachelor's at UCSC and will then start my Master's at UCSD. My interests are in system design, machine learning, and full stack development. Currently, I'm learning Spring Boot to grow as a backend engineer.",
  og: {
    title: "Akshay Kamath Portfolio",
    type: "website",
    url: "http://akshaykamath.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Akshay Kamath",
  logo_name: "Akshay Kamath",
  subTitle:
    "I am a passionate student striving to be a well-rounded software engineer. Right now, I am finishing my Bachelor's at UCSC and later this year, will start my Master's at UCSD. My interests are in system design, machine learning, and full stack development. Currently, I am learning Spring Boot so that I can build more powerful backend systems.",
  resumeLink:
    "https://drive.google.com/file/d/1KZsh1LCEMz5pHHFK3QXqRb3hWnY3h1nx/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1KZsh1LCEMz5pHHFK3QXqRb3hWnY3h1nx/view?usp=sharing",
  githubProfile: "https://github.com/AkshayKamath12",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/AkshayKamath12",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akshaykam",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:akshaykam@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive full-stack web applications using the latest frontend and backend technologies",
        "⚡ Developing Restful and CRUD APIs in Spring Boot, Flask, Fast API, and Express",
        "⚡ Integrating databases such as PostgreSQL, MySQL, and Redis into applications",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Spring boot",
          fontAwesomeClassname: "devicon:spring",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "file-icons:flask",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "lineicons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building image classification models in Tensorflow and PyTorch",
        "⚡ Developing RAG large language models using LangChain",
        "⚡ Pre-processing and cleaning data using Pandas and Numpy",
        "⚡ Building and deploying models using Flask and FastAPI",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "file-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Langchain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Dev-ops and Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing and maintaining CI/CD pipelines using Github Actions",
        "⚡ Creating unit tests in the React Testing Library, Jest, and PyTest",
        "⚡ Hosting and maintaining websites on AWS EC2 along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Following test-driven development (TDD) and agile methodologies",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of California, San Diego",
      subtitle: "MS in Computer Science and Engineering",
      logo_path: "UCSD_logo.png",
      alt_name: "UCSD",
      duration: "Starting September 2025",
      descriptions: [
        "⚡ I am joining UCSD this fall as a Master's student to research machine learning applications and natural language processing",
        "⚡ I anticipate completing this program by December 2026",
      ],
    },
    {
      title: "University of California, Santa Cruz",
      subtitle: "BS in Computer Science",
      logo_path: "UCSC_logo.png",
      alt_name: "UCSC",
      duration: "September 2022 - June 2025",
      descriptions: [
        "⚡ I have taken courses related to full-stack development, machine learning, system design, data structures and algorithms, and computer systems",
        "⚡ I have been a member of the UCSC Blueprint organization, which builds web-applications for local nonprofits",
        "⚡ On my own time, I have done research into RAG systems for large language models and compiler design.",
        "⚡ I have also been a data analyst for the UCSC Social Sciences division, where I have worked on developing tools for tracking university room usage",
      ],
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships, and Volunteering",
  description:
    "I have worked with startups, non-profits, marketing agencies, and school organizations. The majority of my roles have involved software development although my on-campus job has been more related to data management.",
  header_image_path: "Akshay3.jpg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Analyst",
          company: "UCSC Social Sciences",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "UCSC_logo.png",
          duration: "June 2023 - Present",
          location: "Santa Cruz, CA, USA",
          description:
            "Migrating university room and key tracking systems to a PostgreSQL database. Developing a web application using Next, Flask, and the PostgreSQL database for vizualizing room usage. Continuing to expand the dataset as staff get moved between buildings.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Software Engineering Intern",
          company: "Seam",
          company_url: "",
          logo_path: "seam_logo.jfif",
          duration: "June 2024 - December 2024",
          location: "Remote",
          description:
            "Created a full-stack application to extract findings from company datasets using a NextJS, Flask, and PostgreSQL. Implemented a LangChain retrieval augmented generation LLM for a chat bot, which mapped prompts to sequences of backend function calls. Built many NextJS components with TypeScript that were connected to Flask endpoints. Also developed a Flask application for connecting businesses with clients on Reddit by leveraging pre-trained LLMs for keyword extraction and the Google Search API for identifying relevant discussions.",
          color: "#000000",
        },
        {
          title: "Data Analytics Intern",
          company: "Wasserman",
          company_url: "",
          logo_path: "wasserman_logo.png",
          duration: "January 2024 - May 2024",
          location: "Remote",
          description:
            "Worked within the Gatorade analytics team within Wasserman. Used online tools to extract engagement data of Gatorade advertisements, which I extensively analyzed to find trends/patterns. Also trained a TensorFlow model to classify advertisement comments into sentiments, helping speed up the tagging process. Continued optimizing the advertisement tagging by using regular expressions on Twitter API data.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "Software Developer",
          company: "UCSC Blueprint",
          company_url: "https://about.google/",
          logo_path: "blueprint_logo.avif",
          duration: "November 2024 - Present",
          location: "Santa Cruz, California",
          description:
            "Developing a full-stack web application for the YFIOB nonprofit to help K-12 students gain career guidance. Building many UI components in React to make up the foundation for the website. Creating REST APIs in Node and Express for the backend and incorporating Firebase for authentication and cloud data storage. Writing unit tests in Jest and incorporating them in a CI/CD pipeline I built in GitHub Actions.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have built many projects that incorporate industry-relevant technologies. These include full-stack web applications, command line C programs, Google Chrome extensions, and much more.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "AkshayPic.webp",
    description:
      "I am always open to new opportunities and new people to work with. Feel free to reach out via email or connect with me through LinkedIn!",
  },
  blogSection: {},
  addressSection: {},
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
