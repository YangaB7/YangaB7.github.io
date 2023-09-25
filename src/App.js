import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {

  const Circle = ({top, left, right, bottom, h, w}) => (
    <div className={`absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-700 dark:bg-[#d9e3da] top-${top} right-${right} left-${left} bottom-${bottom} h-${h} w-${w} transform hover:translate-y-2 transition-transform ease-in-out`}>
    </div>
  );

  return (
    <div className="bg-[#d9e3da] dark:bg-[#475569] transition-bg duration-300 h-screen w-screen">
          <Navbar bg={'none'} />

          <div className='absolute h-64 w-64 top-72 right-56 shadow-lg border-2 bg-[#D9E3DA] border-gray-500 p-2 rounded-md z-30'>
            <p className="tracking-widest">Hi! I'm Yanga, a junior in high school with boundless aspirations. I'm fueled by a deep passion for engineering and embrace my mixed-race heritage, which inspires me to bridge diverse perspectives in the pursuit of innovation.</p>
          </div>
          <div className='absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-700 dark:bg-[#d9e3da] top-32 left-28 h-24 w-24 transform hover:translate-y-2 transition-transform ease-in-out'></div>
          {/* <Circle top={'32'} left={'28'} h={'24'} w={'24'}/> */}
          <div className='absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-700 dark:bg-[#d9e3da] top-24 right-40 h-32 w-32 transform hover:-translate-y-2 transition-transform ease-in-out z-40'></div>
          {/* <Circle top={'24'} right={'40'} h={'32'} w={'32'}/> */}

          {/* <Circle top={'72'} left={'60'} h={'32'} w={'32'}/> */}
          <div className='absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-700 dark:bg-[#d9e3da] top-72 left-60 h-32 w-32 transform hover:translate-y-2 transition-transform ease-in-out'></div>
          <div className=" bg-[#d9e3da] h-74 w-40 absolute top-40 left-40 border-2 border-gray-500 shaodw-lg rounded-xl p-2 z-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
            <div className=" w-auto rounded-md h-44 border-2 border-black p-2 group">
              <p>-Webdev</p>
              <p>-Club leadership</p>
              <p>-Tutoring</p>
              <p>-Life</p>
              {/* <Circle bottom={'1'} right={'20'} h={'1'} w={'24'}/> */}
              <div className='absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-300 dark:bg-[#d9e3da] bottom-4 left-[14px] h-1 w-24'></div>
              <div className='absolute h-5 group-hover:h-8 transition-all duration-700 w-2 right-[8px] bottom-2 bg-[#d9e3da] rounded-full'></div>
              <div className='absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-700 dark:bg-[#d9e3da] bottom-[-25px] left-24 h-14 w-14 transform hover:-translate-y-2 transition-transform ease-in-out z-40'></div>
            </div>
            <div className='w-2 h-2 bg-[#d9e3da] absolute bottom-[4px] left-[91px] rounded-full'></div>
          </div>  
          {/* <Circle bottom={'20'} left={'64'} h={'14'} w={'14'}/> */}
          {/* <Circle top={'64'} right={'60'} h={'56'} w={'56'}/> */}
          <div className='absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-700 dark:bg-[#d9e3da] top-64 right-60 h-56 w-56 transform hover:-translate-x-2 transition-transform ease-in-out m-32 z-20'></div>
          {/* <Circle top={'64'} right={'96'} h={'12'} w={'12'}/> */}
          <div className='absolute bg-[#475569] rounded-full shadow-lg transition-bg duration-700 dark:bg-[#d9e3da] top-64 right-96 h-12 w-12 transform hover:-translate-y-2 transition-transform ease-in-out z-40'></div>
          <Sidebar/>
  
    </div>
  );
}

export default App;
