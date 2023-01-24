import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './header.module.css'
import { logout } from '../../../rudex/slices/auth';
import {  useDispatch } from 'react-redux';

const DropdownProfile = () => {
  const dispatch = useDispatch();

const logoutHandler = () => {
  dispatch(logout());
};

  return (
    <div className={Styles.DropdownProfile}>
        <ul>
          < li>
                <Link to='/Login'>Login</Link>
           </li>
          <li>
                <Link to='/Register'>Register</Link>
           </li>
           <button className=''>
            <Link to='/dashboard'>Dashboard</Link>
          </button>

          <button onClick={logoutHandler}>
				
				logout
				
				</button>
            
        </ul>
         
    </div>
  )
}

export default DropdownProfile