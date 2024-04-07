import ReactBasicsImage from '../images/ReactBasics.png'
import AdvancedReact from '../images/AdvancedReact.png'
import LittleLemon from '../images/LittleLemon.png'
import CryptoTweet from '../images/CryptoTweet.png'
import Ecommerce from '../images/Ecommerce.png'
import FrontEndCertificate from '../images/FrontEndCertificate.png'



export const Bio = {
  name: "Vinay Jagannavar",
  roles: [
    "Full Stack Developer",
    "Java Developer",
    "Android Developer"
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/vinayjagannavar",
  resume:
    "https://drive.google.com/file/d/1Z_qtJYqdUK6m68EemH70vG9PTh-lu3HA/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/vinay-jagannavar-6a0217124",
  //twitter: "https://twitter.com/RishavChanda",
  insta: "https://www.instagram.com/vinay_jagannavar/",
  //facebook: "https://www.facebook.com/rishav.chanda.165/",
  phone: "+13156037616"
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Angular",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      /*{
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },*/
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Flutter",
        image:
          "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Django",
        image:
          "https://banner2.cleanpng.com/20180711/rtc/kisspng-django-web-development-web-framework-python-softwa-django-5b45d913f29027.4888902515313042119936.jpg",
      },
      {
        name: "Flask",
        image: "https://assets-global.website-files.com/63894f0e251e567f6e443bfa/64a25628612c9db05d4c7f56_63c10c7b6f20f424c72490bf_flask.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Kotlin",
        image:
          "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
      {
        name: "Adobe XD",
        image:
          "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      },
      {
        name: "Figma",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://download.logo.wine/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.png",
    role: "Software Engineer",
    company: "Tech Mahindra Limited",
    date: "September 2020 - July 2022",
    desc: `• Accelerated project delivery by 40% through mastery of Scrum Agile methodologies, while streamlining software development in Azure DevOps, achieving 50% faster development via CI/CD pipelines and enhancing client satisfaction.<br />
• Engineered an enterprise-focused full stack SIP-trunk solution, eliminating Excel dependency and cutting setup time from weeks to immediate. Optimized network management and automated allocation, augmenting efficiency.<br />
• Implemented an automation initiative for diagnostic testing on network element predictive alarms, saving network engineers approximately 1000 minutes of manual work daily.<br />
• Designed and led the backend development with Python and Django, crafting a scalable codebase, while implementing Angular for the frontend to propel substantial improvements in client interaction metrics.<br />
• Led the creation of sophisticated SQL databases and highly efficient RESTful APIs, incorporating optimized stored procedures, culminating in a 40% decrease in data processing time and seamless integration capabilities across systems.`,
    skills: [
      "Angular",
      "Python",
      "Django",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Figma",
      "Azure DevOps Services",
      "SQL",
      "Stored Procedures",
      "PowerShell Scripting",
      "Postman",
      "RESTful API",
      "SOAP"
    ],
    //doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
  },
  {
    id: 1,
    img: "https://download.logo.wine/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.png",
    role: "Associate Software Engineer",
    company: "Tech Mahindra Limited",
    date: "April 2018 - August 2020",
    desc: `•	Demonstrated Telecom Domain expertise in Siebel CRM, Fusion Middleware, and Oracle BRM.<br />
    •	Expedited critical flaw resolution in Data Integrity Program during Oracle BRM upgrade with cross-functional team. Recovered 60k post-pay customers and 100k rating products, preventing revenue loss.<br />
    •	Strengthened system stability by troubleshooting and debugging 50K+ failed transactions/orders, enhancing user experience.<br />
    •	Spearheaded automation initiatives with UiPath, resulting in a remarkable 42-hour reduction in manual workload, driving productivity and innovation.<br />
    •	Deployed NLP and ML-driven ticket assignment with a Decision Tree approach, boosting efficiency and resolution precision.<br />
    •	Conducted comprehensive Exploratory Data Analysis (EDA) on 20K+ incident reports, providing invaluable insights for data- driven decision-making and process improvement.
    `,
    skills: [
      "Oracle Siebel CRM",
      "Oracle Fusion Middleware",
      "Oracle SQL Database",
      "Splunk",
      "Teradata",
      "Data Science",
      "EDA",
      "Machine Learning",
      "NLP",
      "UiPath"
    ],
    //doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  {
    id: 2,
    img: "https://images.jdmagicbox.com/comp/pune/y9/020pxx20.xx20.170601200228.m4y9/catalogue/krixi-ideas-and-technology-solutions-pvt-ltd-hingne-khurd-pune-software-companies-nyhw0opji0.jpg",
    role: "Software Developer Intern",
    company: "Krixi Ideas and Technology Solutions Pvt Ltd",
    date: "December 2016 - May 2017",
    desc: `•	Deployed OAuth security protocols, introduced RESTful APIs, and leveraged MP-Chart to craft visually engaging data representations, culminating in a 30% surge in user engagement.<br />
    •	Integrated Google Fit and Fitbit API using Java to retrieve fitness data, incorporated health goal-setting features, and designed motivational notifications to drive user engagement, resulting in a 30% increase in daily active users.
    `,
    skills: [
      "Java",
      "Kotlin",
      "Object Oriented Programming",
      "Android Studio",
      "REST API",
      "XML",
    ],
  }
];

export const education = [
  {
    id: 0,
    img: "https://imageio.forbes.com/specials-images/imageserve/5d52cca168cb0a000916d49b/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=87&width=87",
    school: "Syracuse University, Syracuse, NY",
    date: "August 2022 - May 2024",
    grade: "3.78 GPA",
    desc: "Courses: Design and Analysis of Algorithms, Structured Programming and Formal Methods, Operating System, Computer Architecture, Artificial Intelligence, Machine Learning, Natural Language Processing, Android Programming, Social Media and Data Mining.",
    degree: "Masters Of Science - Computer Science",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5C74v3rfUB0RbnoE2fR2leNmsmhlHQF2ZqyWXcX7A9w&s",
    school: "University Of Pune, Pune, India",
    date: "July 2013 - May 2017",
    grade: "3.4 GPA",
    desc: "Courses: Data Structures and Algorithms, Object Oriented Design, Database Management Systems, Theory Of Computations.",
    degree: "Bachelors of Engineering - Computer Engineering",
  }
];

export const projects = [
  {
    id: 0,
    title: "Little Lemon Website",
    date: "Mar 2023",
    description:
      `• Developed the 'Reserve a Table' feature for the Little Lemon Website using React, effectively managing state with hooks such as useState. 
      • Implemented advanced form handling methods, including controlled and uncontrolled components, alongside the useRef hook, to optimize the booking process.
      • Performed thorough unit testing with Jest, guaranteeing the functionality and dependability of components.`,
    image: LittleLemon,
    tags: [
      "React JS",
      "JavaScript(ES6+)",
      "HTML5",
      "CSS",
      "Jest",
      "Git",
      "Figma",
      "API"
    ],
    category: "web app",
    github: "https://github.com/vinayjagannavar/LittleLemon",
    webapp: "https://github.com/vinayjagannavar/LittleLemon",
  },
  {
    id: 1,
    title: "Ecommerce Shopping",
    date: "Mar 2023",
    description:
      `•	Pioneered RESTful API implementation with Spring Boot for seamless frontend-backend communication, while enforcing Spring Security and employing MySQL for efficient backend management.
      •	Orchestrated frontend development leveraging React, integrating Tailwind CSS and Material-UI (MUI) for UI design, Redux for state management, and JWT for secure authentication.
      `,
    image: Ecommerce,
    tags: [
      "React JS",
      "Redux",
      "Java",
      "JSON Web Tokens",
      "Spring Boot",
      "Spring Security",
      "Tailwind CSS",
      "Material-UI",
      "MySQL"
    ],
    category: "web app",
    github: "https://github.com/vinayjagannavar/Ecommerce-Shopping-Backend",
    webapp: "https://clothcrafters.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto Tweet Sentiment Analysis",
    date: "March 2023 - April 2023",
    description:
      "Extracted actionable cryptocurrency market insights through large-scale NLP analysis (preprocessing, tokenization) of over 100k tweets, incorporating BERT models (FinBERT & CryptoBERT) for accurate sentiment classification.",
    image: CryptoTweet,
    tags: ["Python", "NLP", "Pandas", "Numpy", "TensorFlow", "Keras","Seaborn"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
  },
  {
    id: 3,
    title: "BillBuddy",
    date: "September 2023 - December 2023",
    description:
      `• Architected and developed a responsive Kotlin Android app utilizing OOPs and LiveData (20% reduced data latency). Implemented engaging bill-splitting & spending analysis features (coroutines) leading to a 15% user engagement rise.
      • Facilitated secure payment processing via PayPal integration, championed the use of GitHub for version control (reducing merge conflicts by 30%), fostering a collaborative development workflow.
      `,
    image:
      "https://raw.githubusercontent.com/vinayjagannavar/BillBuddy/main/Screenshot%202024-03-31%20234421.png",
    tags: ["Kotlin", "MVVM", "Room Database", "AWS Gateway API", "AWS RDS"],
    category: "android app",
    github: "https://github.com/vinayjagannavar/BillBuddy",
    webapp: "https://github.com/vinayjagannavar/BillBuddy",
  },
  {
    id: 8,
    title: "AI-based 2048 Game",
    date: "September 2022 - December 2022",
    description:
      `• Executed Expectimax algorithm for tree search AI in 2048 game, considering chance and limited depth search; algorithm optimized move selection, resulting in a 25% increase in game win rate.
      • Upgraded tree search with a neural network trained on game state data and projected utility values for each level.
      `,
    image:
      "https://raw.githubusercontent.com/vinayjagannavar/2048-Expectimax-AI-Game/main/AIscores.png",
    tags: ["Python", "PyTorch", "MatplotLib", "NumPy", "AI Algorithm"],
    category: "machine learning",
    github: "https://github.com/vinayjagannavar/2048-Expectimax-AI-Game",
    webapp: "https://github.com/vinayjagannavar/2048-Expectimax-AI-Game",
  },
];

export const certifications = [
  {
    id: "1",
    name: "Meta Front-End Developer Professional Certificate",
    image: FrontEndCertificate,
    description: "- Coursera",
    certificateURL: "https://www.coursera.org/account/accomplishments/professional-cert/ANAK6V7KVQS8"
  },
  {
    id: "1",
    name: "React Basic",
    image: ReactBasicsImage,
    description: "- Coursera",
    certificateURL: "https://www.coursera.org/account/accomplishments/verify/8CLUGAP33QTF"
  },
  {
    id: "2",
    name: "Advanced React",
    image: AdvancedReact,
    description: "- Coursera",
    certificateURL: "https://www.coursera.org/account/accomplishments/verify/T63G2N5BHWDZ"
  },
  // Add more certifications as needed
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
