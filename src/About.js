import person from "./components/person.jpg";
import Navbar from "./components/Navbar";
function About() {
    return(
        
        <div className='grid grid-cols-1 bg-gray-400'>
            <Navbar bg={'gray-400'} />
            <div className=' h-screen m-20 mt-32 bg-yellow-600 rounded-2xl shadow-lg flex flex-col justify-between'>
                <div className='relative top-8 w-auto h-12 text-center text-2xl'>Web Development</div>
                <div className='relative m-8 h-[560px] text-center text-2xl bg-white items-end rounded-lg p-4 pt-10'>At just 16 years old and currently a high school junior, I've found a genuine love for web development. I enjoy creating websites for friends, helping them showcase their work online. Looking ahead, I'm excited about the possibility of using my skills to support local businesses with their online presence. It's a path I'm eager to explore as I continue to learn and grow in this field.
                    <div className='relative flex flex-row h-72 w-auto my-8 bg-none justify-between'>
                        <div className='h-72 w-1/4 ml-10 rounded-xl bg-black rotate-12'></div>
                        <div className='h-72 w-1/4 rounded-xl bg-black'></div>
                        <div className='h-72 w-1/4 mr-10 rounded-xl bg-black -rotate-12'></div>
                    </div>
                </div>
            </div>
            <div className=' h-screen m-20 mt-32 bg-red-600 rounded-2xl shadow-lg flex flex-col justify-between'>
                <div className='relative top-8 w-auto h-12 text-center text-2xl'>Tutoring</div>
                <div className='relative m-8 h-[560px] text-center text-2xl bg-white items-end rounded-lg p-4 pt-10'>I've discovered a profound joy in tutoring. It all began with assisting English language learners in navigating the intricacies of mathematics at my school. My dedication extended to helping friends and siblings excel in various subjects. Now, I'm actively pursuing an opportunity to become a math tutor at a local program. Witnessing the growth and newfound confidence in my students is incredibly rewarding. My aim is to empower individuals on their educational journeys, offering personalized support and a genuine enthusiasm for learning.
                    <div className='relative flex flex-row h-72 w-auto my-8 bg-green-200 justify-between'>
                        <div className='h-72 w-1/4 ml-10 rounded-xl bg-black'></div>
                        <div className='h-72 w-1/4 rounded-xl bg-black'></div>
                        <div className='h-72 w-1/4 mr-10 rounded-xl bg-black'></div>
                    </div>
                </div>
            </div>
            <div className=' h-screen m-20 mt-32 bg-blue-600 rounded-2xl shadow-lg flex flex-col justify-between'>
                <div className='relative top-8 w-auto h-12 text-center text-2xl'>E³</div>
                <div className='relative m-8 h-[560px] text-center text-2xl bg-white items-end rounded-lg p-4 pt-10'>At just 16 years old and currently a high school junior, I've found a genuine love for web development. I enjoy creating websites for friends, helping them showcase their work online. Looking ahead, I'm excited about the possibility of using my skills to support local businesses with their online presence. It's a path I'm eager to explore as I continue to learn and grow in this field.
                    <div className='relative flex flex-row h-72 w-auto my-8 bg-green-200 justify-between'>
                        <div className='h-72 w-1/4 ml-10 rounded-xl bg-black'></div>
                        <div className='h-72 w-1/4 rounded-xl bg-black'></div>
                        <div className='h-72 w-1/4 mr-10 rounded-xl bg-black'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;   