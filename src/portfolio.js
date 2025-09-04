/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Talha Saeed",
  title: "Hi all, I'm Talha",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building chatbots and  applications with Python / FastApi / MongoDb / Vapi / N8n / Aws Automation  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13EHBk2lGt9qeIKStKMuuhgBdX_bP6oX8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Talhasaeed420",
  linkedin: "https://www.linkedin.com/in/muhammad-talha-saeed-aa4394355/",
  gmail: "talhasaeed7880@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive with backend operations and database."),
    emoji("⚡ Progressive SaaS Products like chatbots, calling agents etc"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  softwareSkills: [
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Superior University",
      logo: require("./assets/images/unilogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "October 2022 - April 2026"
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend", progressPercentage: "90%" },
    { Stack: "Databases(Mongo DB)", progressPercentage: "70%" },
    { Stack: "Api's", progressPercentage: "60%" },
    { Stack: "Machine Learning", progressPercentage: "30%" }
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend developer Intern",
      company: "App Aura",
      companylogo: require("./assets/images/appauranet.png"),
      date: "August 2025 – Ended",
      desc: "A backend developer intern at App Aura. Worked on backend development using Python, FastApi and MongoDB."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects(In Progress)",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/call.webp"),
      projectName: "Clinic Ai Agent",
      projectDesc: "An AI Agent that helps patients to book appointment, cancel appointment and reschedule appointment.",
      projectDesc: "Call on +19255926347 or click below to chat",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sample-chat-bot-git-main-talhas-projects-4b5691ee.vercel.app/"
        }
      ]
    },
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Foundation of Cybersecurity",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/HSW9XSI9W7OY"
        }
      ]
    },
    {
      title: "Manage Security Risks",
      subtitle: "Completed Certifcation from Coursera",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/HSW9XSI9W7OY"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "Currently pursuing AWS Certified Cloud Practitioner to gain foundational knowledge of AWS cloud services and architecture.",
      image: require("./assets/images/awspng.png"),
      imageAlt: "AWS Cloud Practitioner",
      footerLink: [{ name: "In progress", url: "" }]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  display: true,
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: true
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
