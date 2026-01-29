import React from 'react';

const Logo = () => {
    return (
        <div>
<div className="flex-shrink-0 flex items-center">
            <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-lg">
              <div className="">
                <div className="text-[#f57722] font-extrabold absolute right-3.5 top-1"><FaAngleLeft size={35} /></div>
                <div className="text-[#f9004d] font-extrabold absolute top-3 left-4"><FaAngleRight size={35} /></div>
                
              </div>
            </div>
          </div>

        </div>
    );
};

export default Logo;