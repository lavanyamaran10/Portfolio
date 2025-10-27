import booksLandingPage from "../assets/books.png";
import dashboard from "../assets/dashboard.png";
import employee from "../assets/employee.png";
import atm from "../assets/atm.png";
import flexgallery from "../assets/flexgallery.png";
import gridgallery from "../assets/gridgallery.png";
import solmusic from "../assets/solmusic.png";
import weather from "../assets/weather.png";

export const getProjects = () => {
  return [
    {
      id: 1,
      heading: "ATM Interface",
      description:
        "Developed an ATM application using Java, JDBC, and Servlets to handle core banking operations like balance inquiry, cash withdrawal, and money transfer. Utilized OOP principles and exception handling for robust, modular design. Integrated database operations through JDBC with DAO and DTO patterns for efficient data management.",
      link: "https://drive.google.com/file/d/1o_dIsrSsyWZh5BXlqMqfQ1nyG7t905gl/view?usp=drive_link",
      sourceCode: "https://github.com/lavanyamaran10/ATM-Interface",
      image: atm,
    },
    {
      id: 2,
      heading: "Employee Details Management",
      description:
        "Created an employee management system that displays employee details and allows adding, updating, and deleting employees. The system follows object-oriented principles, utilizing DAO and DTO patterns for data management and CRUD operations. It integrates Servlets, JSP, and JDBC to handle requests and interact with the database efficiently.",
      link: "https://drive.google.com/file/d/1uT44qFcix2pFsINx_hB3otDwrrHz7EI-/view?usp=drive_link",
      sourceCode: "https://github.com/lavanyamaran10/EmployeeDetailManagement",
      image: employee,
    },
    {
      id: 3,
      heading: "Books Landing Page",
      description:
        "Designed and developed a React-based landing page to practice front-end skills during the learning phase. Focused on UI design, component structure, and created a responsive layout limited to large screens.",
      link: "https://react-landingpage-mu.vercel.app/",
      sourceCode: "https://github.com/lavanyamaran10/react-landingpage-1",
      image: booksLandingPage,
    },
    {
      id: 4,
      heading: "Masonry Image Gallery",
      description: "A React-based gallery project showcasing masonry-style image layouts using Flexbox. Focused on responsive design and layout alignment.",
      link: "https://masonry-image-gallery-three.vercel.app/",
      sourceCode: "https://github.com/lavanyamaran10/masonry-image-gallery",
      image: flexgallery,
    },
    {
      id: 5,
      heading: "Destination Gallery",
      description: "Created a grid-based responsive image gallery using React and CSS Grid to practice layout techniques and image rendering optimizations.",
      link: "https://grid-gallery-jet.vercel.app/",
      sourceCode: "https://github.com/lavanyamaran10/grid-gallery",
      image: gridgallery,
    },
    {
      id: 6,
      heading: "Weather Application",
      description:
        "Built a responsive weather app using React.js and OpenWeather API to display real-time temperature, humidity, and conditions. Implemented API integration, state management, and responsive design for desktop and mobile views.",
      link: "https://weather-awfme4p6m-lavanyas-projects-edc94e70.vercel.app/",
      sourceCode: "https://github.com/lavanyamaran10/WeatherApp",
      image: weather,
    },
    {
      id: 7,
      heading: "Static Dashboard",
      description:
        "Developed a React-based UI dashboard using MUI components and JSON data to display charts, tables, blogs, and profile sections. Implemented interactive UI elements like cards, charts, and tables with a fully responsive layout, demonstrating proficiency in React and MUI.",
      link: "https://react-dashboard-deploy.vercel.app/login",
      sourceCode: "https://github.com/lavanyamaran10/react-Dashboard-deploy",
      image: dashboard,
    },
    {
      id: 8,
      heading: "SolMusic",
      description:
        "A modern and visually appealing music player UI built using React and Tailwind CSS. Focused on layout design, component structuring, and responsive alignment.",
      link: "https://solmusic-ochre.vercel.app/",
      sourceCode: "https://github.com/lavanyamaran10/solmusic",
      image: solmusic,
    },
  ];
};
