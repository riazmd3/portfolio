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
  username: "Riaz Mohammed A",
  title: "Hi all, I'm Riaz",
  subTitle: emoji(
    "Innovative and passionate Artificial Intelligence and Data Science student with hands-on experience in Python, Machine Learning, Deep Learning, Computer Vision, and Data Analytics. Skilled in developing AI-driven solutions, intelligent systems, and data-based decision models. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/14pge1hyAUnyxhukfaiFtytWfht5VXAvL/view?usp=drivesdk", // External resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/riazmd3",
  linkedin: "https://www.linkedin.com/in/riaz-mohammed-a/",
  gmail: "riazmohemed0@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI & DATA SCIENCE ENTHUSIAST SPECIALIZED IN MACHINE LEARNING, DEEP LEARNING, AND FULL-STACK DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Develop AI-driven solutions and intelligent systems using Python, TensorFlow, PyTorch, and scikit-learn"
    ),
    emoji("⚡ Build full-stack applications with React, FastAPI, PostgreSQL, and Firebase"),
    emoji(
      "⚡ Data Analysis and Visualization using Power BI, BigQuery, and cloud platforms (AWS, GCP)"
    ),
    emoji(
      "⚡ Implement Computer Vision and IoT solutions for real-world applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "robotics",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "iot",
      fontAwesomeClassname: "fas fa-microchip"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arunai Engineering College",
      logo: require("./assets/images/arunai-logo.png"),
      subHeader: "Bachelor of Technology (AI & DS)",
      duration: "2022 - 2026",
      desc: "GPA: 8.36/10.0. Specialized in Artificial Intelligence and Data Science with focus on Machine Learning, Deep Learning, Computer Vision, and Data Analytics.",
      descBullets: [
        "Specialized in AI model development, DSA, and scripting",
        "Hands-on experience with data preprocessing, model training, and deployment",
        "Strong foundation in statistics, algorithms, and problem-solving"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI & Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "75%"
    },
    {
      Stack: "Robotics & IoT",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer – DropCars.in",
      company: "Multi-Role Vehicle Booking System",
      companylogo: require("./assets/images/Dropcars-logo.png"), 
      date: "Sep – Nov 2025",
      desc: "Developed a full-stack vehicle booking and management platform with four portals: Admin, Vendor, Driver, and QuickDriver, ensuring smooth booking, trip, and payment workflows.",
      // descBullets: [
      //   "Built Driver and QuickDriver apps for trip management — drivers handle vehicle data and payments, while QuickDrivers start and end trips in real time",
      //   "Designed Admin portal to manage profiles, verify licenses and vehicle documents, and oversee all transactions and cloud-stored data on Google Cloud",
      //   "Implemented backend using FastAPI,Razorpay gateway ,JWT Bearer tokens and PostgreSQL with Firebase for real-time synchronization",

      // ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Crimson Owl Pvt. Ltd., Bengaluru",
      companylogo: require("./assets/images/crimson owltect-logo.jpeg"), 
      date: "Apr – Jul 2025",
      desc: "Developed the frontend of an Android and Web-based Canteen Management System for Neuro Foundation Hospital, Salem. Streamlined food ordering, delivery, and role-based access for hospital staff and patients.",
      // descBullets: [
      //   "Implemented secure user login, real-time updates, and responsive UI",
      //   "Collaborated using React, JavaScript, PostgreSQL, and Expo framework to deliver a production-ready solution"
      // ]
    },
    {
      role: "Intel Unnati Industrial Training Program",
      company: "Organized by Intel India and AUK Computing CIIC",
      companylogo: require("./assets/images/intel unnati logo.jpg"), 
      date: "Jul – Aug 2024",
      desc: "Completed a 30-day training program on Machine Learning and Deep Learning.",
      descBullets: []
    },
    {
      role: "Mentor & Trainer – AI, IoT, and Data Science Bootcamp 2.0",
      company: "SKV International School",
      companylogo: require("./assets/images/skv-logo.jpeg"), 
      date: "Mar 2025",
      desc: "Awarded Certificate of Distinguished Excellence for exceptional leadership and guidance. Mentored and trained students in AI, IoT, NLP, Chatbots, Power BI, Power Query, Maps & Navigation, and Text Editors.",
      descBullets: [
        "Delivered both technical training and career-focused mentoring to nurture future-ready skills"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS THAT DEMONSTRATE MY SKILLS IN AI, FULL-STACK DEVELOPMENT, AND REAL-WORLD APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/Dropcars-logo.png"), 
      projectName: "DropCars.in: Vehicle Booking & Management System",
      projectDesc: "Comprehensive full-stack vehicle booking system with four dedicated portals: Admin, Vendor, Driver, and QuickDriver applications. Built with Python (FastAPI), React, PostgreSQL, Java, Firebase, and Razorpay API.",
      footerLink: [
        {
          name: "Frontend GitHub",
          url: "https://github.com/riazmd3/Project-Drop-Cars"
        },
        {
          name: "Backend GitHub",
          url: "https://github.com/riazmd3/Project-Drop-Cars-Backend"
        }
      ]
    },
    {
      image: require("./assets/images/neuro canteen.jpg"), 
      projectName: "Neuro Canteen Management System",
      projectDesc: "Full-fledged Android and Web-based canteen management system for Neuro Foundation Hospital, Salem. Implemented responsive UI, secure authentication, real-time order updates, and smooth role-based access.",
      footerLink: [
        {
          name: "Project GitHub",
          url: "https://github.com/riazmd3/Neuro_Canteen"
        },
        {
          name: "LinkedIn Post",
          url: "" // TODO: Add your LinkedIn post URL here (e.g., https://www.linkedin.com/posts/...)
        }
      ]
    },
    {
      image: require("./assets/images/Rover.jpeg"), 
      projectName: "AI-Based Rover Working Model - Plant Disease Detection",
      projectDesc: "IoT-based agriculture rover integrating AI into farming, capable of capturing crop images, detecting diseases, and suggesting remedies using a custom AI-driven analysis tool. Applied for patent and recognized by Tiruvannamalai District Collector.",
      footerLink: []
    },
    {
      image: require("./assets/images/Arunachala-travels.png"),
      projectName: "Car Booking Website - Arunachala Travels",
      projectDesc: "One-way car booking website for Arunachala Travels, Tiruvannamalai with fare calculation based on distance, WhatsApp automation and map integration.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Hackathon Wins, Awards, Certifications, and Recognition for My Work in AI and Technology!",

  achievementsCards: [
    {
      title: "24-Hour Hackathon Winner (Sponsored by Zoho)",
      subtitle:
        "Won 24-Hour Hackathon with cash prize of ₹15,000 at St. Joseph's Institute of Technology, Chennai. Developed an IoT-based agriculture rover that captures crop images, detects diseases, and suggests remedies using an AI-driven tool.",
      image: require("./assets/images/hackathonimage.jpg"),
      imageAlt: "Hackathon Winner",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/riaz-mohammed-12573a262_hackathon-winner-iot-activity-7249965324224061441-7Mjh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECJay0BTWoFzv_UBMCIllfeOhr04CNKbvU" // TODO: Add your LinkedIn post URL for the hackathon win (e.g., https://www.linkedin.com/posts/...)
        }
      ]
    },
    {
      title: "ISRO Space Week Exhibition (3rd Prize)",
      subtitle:
        "Developed a Rescue Rover for Tunnel Navigation & Object Detection at IFET College of Engineering, Villupuram. Performed real-time object classification, detection, and tracking to identify obstacles, survivors, and hazards.",
      image: require("./assets/images/Rover.jpeg"),
      imageAlt: "ISRO Space Week",
      footerLink: []
    },
    {
      title: "Young Scientist Summer Program (TN Govt)",
      subtitle:
        "Selected for a 14-day program on scientific research and innovation. Gained early exposure to technology, developed teamwork skills, and learned goal setting.",
      image: require("./assets/images/yssp certificate.jpeg"), 
      imageAlt: "Young Scientist Program",
      footerLink: []
    },
    {
      title: "IntelⒹ Unnati Industrial Training Program",
      subtitle:
        "Completed 30-day training in Machine Learning and Deep Learning organized by Intel India and AUK Computing CIIC Intel Unnati Data Centric Labs.",
      image: require("./assets/images/unati certificate.jpg"), 
      imageAlt: "Intel Unnati Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/riaz-mohammed-12573a262_machinelearning-deeplearning-intelunnati-activity-7259178864076075008-z5UI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECJay0BTWoFzv_UBMCIllfeOhr04CNKbvU"
        }
      ]
    },
    {
      title: "OpenAI GPT-3 for Developers",
      subtitle:
        "Specialized course on GPT-3 and AI applications from Infosys Springboard.",
      image: require("./assets/images/infosyscertificate.jpg"),
      imageAlt: "OpenAI GPT-3 Certificate",
      footerLink: [
        {
          name: "View Post",
          url: "https://www.linkedin.com/posts/riaz-mohammed-12573a262_ai-gpt3-machinelearning-activity-7293244563689742336-xQkq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECJay0BTWoFzv_UBMCIllfeOhr04CNKbvU" 
        }
      ]
    },
    {
      title: "Introduction to Generative AI",
      subtitle:
        "Gained foundational knowledge of Generative AI concepts and tools from Intel Digital Readiness Program.",
      image: require("./assets/images/genai.jpg"),
      imageAlt: "Generative AI Certificate",
      footerLink: [
        {
          name: "View Post",
          url: "https://www.linkedin.com/posts/riaz-mohammed-12573a262_generativeai-ai-intelunnati-activity-7307244554288607233-srlt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECJay0BTWoFzv_UBMCIllfeOhr04CNKbvU" // TODO: Add your certificate URL from Intel Digital Readiness Program (e.g., certificate URL or LinkedIn link)
        }
      ]
    },
    {
      title: "Introduction to Robotics and AI",
      subtitle:
        "Learned basics of robotics, sensors, and AI applications from Great Learning Academy.",
      image: require("./assets/images/robotics-ai certificate.jpg"),
      imageAlt: "Robotics and AI Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/riaz-mohammed-12573a262_robotics-artificialintelligence-machinelearning-activity-7296585413261959168-dZj_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECJay0BTWoFzv_UBMCIllfeOhr04CNKbvU" 
        }
      ]
    },
    {
      title: "Mentor & Trainer – AI, IoT, and Data Science Bootcamp 2.0",
      subtitle:
        "Recognized for mentoring and training students in AI, IoT, and Data Science at SKV International School. Awarded Certificate of Distinguished Excellence.",
      image: require("./assets/images/skvcertificate.jpg"),
      imageAlt: "Mentor Certificate",
      footerLink: [
        {
          name: "View Post",
          url: "https://www.linkedin.com/posts/riaz-mohammed-12573a262_techrockstars-futureleaders-bootcampmagic-activity-7318658539860676608-WlNd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECJay0BTWoFzv_UBMCIllfeOhr04CNKbvU" // TODO: Add your LinkedIn certificate URL for SKV Mentor training (e.g., https://www.linkedin.com/in/.../details/certifications/...)
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9500820541",
  email_address: "riazmohemed0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
