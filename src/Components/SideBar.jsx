import React from 'react';

const SideBar = ({light , setLight}) => {
    // console.log(light)
    return (
        <div>
            {/* New Chat Part  */} 
            
            <div  className=" hidden md:block text-gray-300 py-2 bg-[#2f3136]">
                <div className="px-4 mx-2  duration-100 hover:bg-[#44454748] hover:cursor-pointer border rounded-md border-[#494a4d] py-3">
                    <p><span><i className="fa-solid fa-plus"></i></span>&nbsp;  New Chat</p>
                </div>
                <div className="h-[300px] flex justify-center items-center ">
                    <p className='text-[15px] text-gray-300'>Nothing to see here . Don't worry </p>
                </div>
                <div className="border-b border-[#494a4d]"></div>
                {/* Production Part */}
                <div className="px-2 py-2">
                    <div onClick={()=> location.reload()} className="option mb-3">
                        <p><i className="fa-solid fa-trash-can"></i>&nbsp; Clear conversations</p>
                    </div>
                    <div onClick={()=> setLight(true)} className="option mb-3">
                        <p><i className="fa-regular fa-sun"></i>&nbsp; Light Mode</p>
                    </div>
                    <div onClick={() => window.open('https://github.com/halka-code', '_blank')} className="option mb-3">
                        <p><i className="fa-brands fa-github"></i>&nbsp; My Github</p>
                    </div>
                    <div className="option mb-3">
                        <p><i className="fa-regular fa-user"></i>&nbsp; Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;