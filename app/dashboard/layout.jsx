import React from 'react'
import SideBar from './_components/SideBar';
import DashboardHeader from './_components/DashboardHeader';
const DashboardLayout =({children}) => {
  return (
    <div> 
        <div className=' mt-10 flex   ' >
          <div className='p-10' >
            {children}
          </div>
        </div>

    


       

      
    </div>
  )
}

export default DashboardLayout
