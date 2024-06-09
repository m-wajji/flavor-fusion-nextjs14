// import { Banner } from '@/components/dashboard/Banner'
// import { Cookbook } from '@/components/dashboard/Cookbook'
// import { Sidebar } from '@/components/dashboard/Sidebar'
// import React from 'react'

// const CookbookPage = () => {
//     return (
//         <div>

//             <Banner text={"CookBook"} />
//             <div className='flex items-center  justify-center w-full'>
//                 <div className='w-1/5 ml-[-300px]'><Sidebar /></div>
//                 <div><Cookbook /></div>
//             </div>
//         </div>
//     )
// }

// export default CookbookPage


import { Banner } from '@/components/dashboard/Banner';
import { Cookbook } from '@/components/dashboard/Cookbook';
import { Sidebar } from '@/components/dashboard/Sidebar';
import React from 'react';

const CookbookPage = () => {
  return (
    <div>
      <Banner text={"COOKBOOK"} />
      <div className='flex w-full'>
        <div className='sticky  w-1/5 ml-32'>
          <Sidebar />
        </div>
        <div className=' w-4/5'>
          <Cookbook />
        </div>
      </div>
    </div>
  );
};

export default CookbookPage;
