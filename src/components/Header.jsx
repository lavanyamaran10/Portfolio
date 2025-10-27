import React, { useState ,useEffect} from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  useEffect(() =>{
    const handleResize = () => {
      if(window.innerWidth >= 768){
         setToggleMenu(false);
      }
    };
    window.addEventListener("resize",handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  },[])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setToggleMenu(false); 
  };
  return (
    <div className="relative w-full h-[80px] bg-gray-950 flex">
      <div className="flex text-white  p-5 text-3xl  h-full flex-1">
        Lavanya
      </div>
      <div className="flex p-5 justify-end lg:justify-center  md:justify-center items-center h-full flex-1">
        <ul className="hidden lg:flex lg:flex-row md:flex md:flex-row  text-white justify-between gap-10 text-xl cursor-pointer h-full w-full">
          <li onClick={() => scrollToSection('home')} className="hover:text-blue-400 hover:text-[17px] transition-colors duration-200">HOME</li>
          <li onClick={() => scrollToSection('about')} className="hover:text-blue-400 hover:text-[17px] transition-colors duration-200">ABOUT</li>
          <li onClick={() => scrollToSection('projects')} className="hover:text-blue-400 hover:text-[17px] transition-colors duration-200">PROJECT</li>
          <li onClick={() => scrollToSection('contact')} className="hover:text-blue-400 hover:text-[17px] transition-colors duration-200">CONTACT</li>
        </ul>
        <button
          className="flex lg:hidden md:hidden text-white"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          ☰
        </button>
      </div>
      {toggleMenu && (
        <div className="flex absolute left-0 top-20 w-full">
          <ul className="flex flex-col text-white w-full text-[16px] bg-gray-950 justify-center items-center">
            <li onClick={() => scrollToSection('home')} className="flex justify-center items-center border-y-2 border-slate-900 w-full p-5 hover:bg-gray-800 transition-colors duration-200">HOME</li>
            <li onClick={() => scrollToSection('about')} className="flex justify-center items-center border-b-2 border-slate-900 w-full p-5 hover:bg-gray-800 transition-colors duration-200">ABOUT</li>
            <li onClick={() => scrollToSection('projects')} className="flex justify-center items-center border-b-2 border-slate-900 w-full p-5 hover:bg-gray-800 transition-colors duration-200">PROJECT</li>
            <li onClick={() => scrollToSection('contact')} className="flex justify-center items-center w-full p-5 hover:bg-gray-800 transition-colors duration-200">CONTACT</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
