import React from 'react';

const Header = ()=>{
    return (
        <div className="relative h-[80vh] flex flex-col items-start justify-center pl-16 bg-[#F8F8FD] h-[92vh]">

            <div className='absolute top-[60px] left-[85px] space-y-6'>

                <h1 className="w-[400px] font-[Clash Display] font-semibold text-[70px] leading-[110%] tracking-normal text-left">
                    <span className="text-black block">Discover more than</span> 
                    <span className="text-[#26A4FF] block">5000+ Jobs</span> 
                </h1>

                <p className="w-[551px] opacity-70 font-[Epilogue] font-normal text-[28px] leading-[160%] text-[#515B6F] text-left">
                    Great platform for job seekers searching for new career heights and passionate about startups.
                </p>
            </div>
            <img 
                src="/images/man.png" 
                alt="Job Hunt" 
                className="absolute top-[16px] left-[852px] w-[501px] h-[707px]" 
            />
            <div className="absolute top-[450px] left-[85px] bg-white w-[950px] h-[100px] flex space-x-6 mt-8 items-center justify-around">


                <div className="flex items-center w-[300px]">
                    <img 
                        src="/images/search-icon.png" 
                        alt="search-icon"
                        className="w-[25px] h-[25px] mr-2"
                    />
                    <input 
                        type="text" 
                        placeholder="Search jobs..."
                        className="outline-none w-full border-b border-gray-400 focus:border-[#26A4FF] transition-all"
                    />
                </div>

                <div className="flex items-center w-[300px]">
                    <img 
                        src="/images/location-icon.png" 
                        alt="location-icon"
                        className="w-[25px] h-[25px] mr-2"
                    />
                    <select className="outline-none w-full border-b border-gray-400 focus:border-[#26A4FF] transition-all bg-transparent">
                        <option value="">Select Location</option>
                        <option value="new-york">New York</option>
                        <option value="san-francisco">San Francisco</option>
                        <option value="los-angeles">Los Angeles</option>
                    </select>
                </div>

                <button className="bg-[#4640DE] hover:bg-blue-600 text-white px-4 py-2 w-[170px] h-[70px]">Search My Job</button>

            </div>
            <p
            className='absolute top-[600px] left-[85px] text-[#202430]'
            >Popular : UI Designer, UX Researcher, Android, Admin</p>
        </div>
    )
}

export default Header