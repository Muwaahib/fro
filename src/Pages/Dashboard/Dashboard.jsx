import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Sidebar from './Sidebar';
import Styles from './Dashboard.module.css'
import Header from '../../Components/Header/Header';
import HeaderDash from './HeaderDash';



const Dashboard = () => {
  
 const location = useLocation();
  return (
     <div className='flex'>
      <div className='flex'>
        
        <Sidebar />
      </div>
      <div className='w-[80%] mt-[%]'>
       	
	 <HeaderDash/>
	
        <Outlet />
      </div>
     
    </div>
  );
};
  

export default Dashboard
