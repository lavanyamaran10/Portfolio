import React, { useState } from "react";
import lavanya from "../assets/Lavanya.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);

  const renderContent = (isMobile = false) => {
    switch (activeTab) {
      case "Skills":
        if (isMobile) {
          return (
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Frontend:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>React.js</li>
                    <li>React Hooks</li>
                    <li>Tailwind CSS</li>
                    <li>Material-UI</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript(ES6+)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">State Management & Tools:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>React Router</li>
                    <li>Redux</li>
                    <li>Context API</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Backend (Exposure):</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>REST API Development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Database:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>MySQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Others:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Core Java</li>
                    <li>Advance Java</li>
                    <li>Hibernate</li>
                    <li>Spring</li>
                    <li>JSP (academic exposure)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Tools:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>SQL Workbench</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
              <div className="space-y-3">
                <p><strong>Frontend:</strong> React.js, React Hooks, Tailwind CSS, Material-UI, HTML5, CSS3, JavaScript(ES6+)</p>
                <p><strong>State Management & Tools:</strong> React Router, Redux, Context API</p>
                <p><strong>Backend (Exposure):</strong> Node.js, Express.js, REST API Development</p>
                <p><strong>Database:</strong> MySQL</p>
                <p><strong>Others:</strong> Core Java, Advance Java, Hibernate, Spring, JSP (academic exposure)</p>
                <p><strong>Tools:</strong> VS Code, Postman, SQL Workbench</p>
              </div>
            </div>
          );
        }
      
      case "Education":
        return (
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">University College Of Engineering, BIT Campus, Trichy</h4>
                <p>Bachelor of Technology in Information Technology - CGPA: 8.04</p>
                <p className="text-gray-300">2020-2024</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Dr. J. C. Kumarappa Matric Higher Secondary School, Peravurani</h4>
                <p>Higher Secondary Certificate - PERCENTILE: 71%</p>
                <p className="text-gray-300">2019-2020</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Dr. J. C. Kumarappa Matric Higher Secondary School, Peravurani</h4>
                <p>Secondary School Leaving Certificate - PERCENTILE: 87%</p>
                <p className="text-gray-300">2017-2018</p>
              </div>
            </div>
          </div>
        );
      
      case "Experience":
        return (
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold">Software Trainee – React Developer</h4>
                <p className="text-lg">Softsuave Technologies | Feb 2025 – Sep 2025</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Primarily worked on front-end development with React.js</li>
                  <li>Developed responsive, component-based UIs using React.js, Tailwind CSS, and Material-UI</li>
                  <li>Integrated frontend with backend Node.js/Express.js microservices and MySQL database</li>
                  <li>Contributed to Turbo Pro, a cloud-based business management system, improving UI/UX and reducing API overhead</li>
                  <li>Used Postman, Git, and SQL Workbench for testing, debugging, and collaboration</li>
                </ul>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2">Turbo Pro - Business Management System</h5>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Developed the frontend using React.js, building responsive, reusable, and interactive UI components with Tailwind CSS and Material-UI for modules like quoting, ordering, reporting, and document management</li>
                    <li>Collaborated with backend team to integrate Node.js/Express.js microservices and MySQL database, ensuring smooth API communication</li>
                    <li>Implemented performance optimization strategies, reducing redundant network calls and improving system responsiveness</li>
                    <li>Followed modular coding practices and created reusable components to enhance maintainability and scalability</li>
                    <li>Contributed to enhanced reporting capabilities for inventory, financials, job tracking, and customer profitability, improving overall user experience</li>
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  <p><a href="https://drive.google.com/file/d/1IbPrPBtfcOOn42WwnFRMO1Thlm4kzPmi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">📄 Offer Letter</a></p>
                  <p><a href="https://drive.google.com/file/d/10KidtOsqfVb9rNJoKUeM7HPagh0LJcD8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">💰 Payslip</a></p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "Certificates":
        return (
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Certificates</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">Java Full Stack Web Development</h4>
                <p>Tap Academy | March 2024 – August 2024</p>
                <p className="mt-2">
                  <a href="https://drive.google.com/file/d/1z-feueh3q6wO4cJxUULzewO2pvrcXbMT/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                    🏆 View Certificate
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div id="about" className="w-full min-h-screen bg-slate-950 flex flex-col p-20">
      <div className="w-full flex flex-col gap-5 pl-10 lg:pl-20 md:pl-20 pb-10">
        <h2 className="text-white text-3xl">About Me</h2>
        <p className="w-full h-full text-white text-[20px]">
          I'm a Front-End Developer specializing in React.js and modern UI
          design. I create responsive, scalable, and user-friendly web
          applications using technologies like React, Tailwind CSS, and
          Material-UI — focused on delivering smooth user experiences and clean
          code.
        </p>
      </div>
      
      {/* Desktop Navigation */}
      <div className="w-full flex pl-20 hidden md:flex">
        <ul className="flex flex-row gap-10 text-white text-[18px] cursor-pointer">
          <li 
            onClick={() => setActiveTab("Skills")}
            className={`${activeTab === "Skills" ? "text-white border-b-2 border-white" : "hover:text-white"}`}
          >
            Skills
          </li>
          <li 
            onClick={() => setActiveTab("Education")}
            className={`${activeTab === "Education" ? "text-white border-b-2 border-white" : "hover:text-white"}`}
          >
            Education
          </li>
          <li 
            onClick={() => setActiveTab("Experience")}
            className={`${activeTab === "Experience" ? "text-white border-b-2 border-white" : "hover:text-white"}`}
          >
            Experience
          </li>
          <li 
            onClick={() => setActiveTab("Certificates")}
            className={`${activeTab === "Certificates" ? "text-white border-b-2 border-white" : "hover:text-white"}`}
          >
            Certificates
          </li>
        </ul>
      </div>

      {/* Mobile Accordion */}
      <div className="w-full pl-10 lg:pl-20 lg:pr-20 md:pl-20 md:pr-20 md:hidden">
        <div className="space-y-2">
          {["Skills", "Education", "Experience", "Certificates"].map((tab) => (
            <div key={tab} className="border border-gray-600 rounded-lg">
              <button
                onClick={() => {
                  if (activeTab === tab) {
                    setIsMobileAccordionOpen(!isMobileAccordionOpen);
                  } else {
                    setActiveTab(tab);
                    setIsMobileAccordionOpen(true);
                  }
                }}
                className="w-full text-left p-4 text-white text-[18px] hover:bg-gray-800 rounded-lg flex justify-between items-center"
              >
                <span>{tab}</span>
                <span className={`transform transition-transform ${activeTab === tab && isMobileAccordionOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {activeTab === tab && isMobileAccordionOpen && (
                <div className="p-4 border-t border-gray-600 bg-gray-900 rounded-b-lg">
                  {renderContent(true)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop Content */}
      <div className="w-full pl-20 pr-20 mt-8 hidden md:block">
        {renderContent()}
      </div>
    </div>
  );
};

export default About;
