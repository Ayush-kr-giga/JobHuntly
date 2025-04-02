import React from "react"
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="flex justify-between items-center p-4  mu-4 bg-[#F8F8FD]">
        
        <div className="flex space-x-8 ml-20">
          <div className="w-8 h-8 bg-[#4640DE] rounded-full"></div>  
          <h2 className="text-2xl font-bold">JobHuntly</h2>
          <a href="#find-jobs" className="hover:text-gray-400">Find Jobs</a>
          <a href="#browse-companies" className="hover:text-gray-400">Browse Companies</a>
        </div>
  
        {/* Right side: Login & Sign Up buttons */}
        <div className="space-x-4 mr-10">
        <Link to="/login" className="px-4 py-2 rounded text-[#4640DE] hover:text-blue-600">Login</Link>
        <Link to="/signup" className="bg-[#4640DE] hover:bg-blue-600 text-white px-4 py-2 rounded">Sign Up</Link>
        </div>
      </div>
    )
}
export default Navbar