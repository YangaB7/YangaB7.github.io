import { BsMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
function Navbar({bg}) {
  const [theme, setTheme] = useState(null);
  //keeps theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, []) 
  //changes theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };


  return (
    <div className={`top-0 left-0 h-20 w-screen fixed flex row items-center z-50 bg-${bg}`}>
      <NavBarOption text={'home'} link={'home'}/>
      <NavBarOption text={'goals'} link={'goals'} />
      <NavBarOption text={'about me'} link={'about-me'} />
      <NavBarOption text={'what I do'} link={'mission'} />
      
      <div className='group'>
        <button className='bg-green-200 transition-opacity dark:bg-gray-500 dark:opacity-0 p-2 rounded-3xl absolute right-10 top-4 duration-500' onClick={handleThemeSwitch}>
          <BsMoonStarsFill size='28' />
        </button>
        <button className='bg-green-200 opacity-0 transition-opacity dark:bg-gray-500 p-2 dark:opacity-80 rounded-3xl absolute right-10 top-4 duration-500' onClick={handleThemeSwitch}>
          <FaSun size='28' />
        </button>
        <div className='transition-opacity arrow-up opacity-0 right-[59px] top-[70px] absolute group-hover:opacity-100 duration-500 dark:w-0 dark:h-0 dark:border-l-5 dark:border-r-5 dark:border-transparent dark:border-b-[#D9E3DA]'>
        </div>

        <div className='flex-col justify-between w-12 duration-500 transiton-all h-0 bg-[#d9e3da] absolute top-[75px] right-[39px] rounded-lg group-hover:h-44'>
          <div className='flex h-10 w-10 mx-auto my-4 bg-white group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-1000 z-10'></div>
          <div className='flex h-10 w-10 mx-auto my-4 bg-white group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-700 z-10'></div>
          <div className='flex h-10 w-10 mx-auto mt-3 bg-white group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-500 z-10'></div>
        </div>
      </div>
    </div>
    
  );
}

const NavBarOption = ({text, link}) => (
    <a href={link} className='text-black mx-10 font-mainFont font-bold text-sm hover:-translate-y-1 transition-all duration-300'>
        {text}
    </a>
);

export default Navbar;
  