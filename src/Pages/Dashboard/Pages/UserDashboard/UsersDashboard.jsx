import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAlluser ,deleteuser} from '../../../../../rudex/slices/user/userSlice'

const UsersDashboard = () => {
  const dispatch = useDispatch();
  const { users,isLoading,isError,isSuccess} = useSelector((state) => state.userSlice)
  console.log(users, "FOUND DATA!!!!!!!!!!")

  useEffect(() =>{

    // invocation ()
dispatch(getAlluser())
  },[])

  const deleteHandler = (ID) => {
    
    dispatch(deleteuser(ID));
    console.log(users);
  };

  return (
    
    <div>
      <div className='w-full'>
      {/* console header */}
      <div className='head w-full flex items-center justify-around'>
        <h1 className='text-xl font-bold'>Users management console</h1>
         <Link to='/Dashboard/User/new'>
        <button className='text-xl font-bold py-2 px-3 bg-blue-700 text-white mt-3'>
          New User
        </button>
        </Link>
      </div>

      {/* ALL USERS */}

      {  (
        <>
          {/* fragments */}

          <table className='my-3 w-[90%] mx-auto '>
          <tr>
            <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Firstname
                </th>
                <th scope="col" class="px-6 py-3">
                    LastName
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                
                <th scope="col" class="px-6 py-3">
                    view
                </th>
                <th scope="col" class="px-6 py-3">
                    edite
                </th>

                <th scope="col" class="px-6 py-3">
                    update
                </th>

                <th scope="col" class="px-6 py-3">
                    role
                </th>
            </tr>

            {users?.  users?.map(( users
) =>(
           <tbody>
           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
              
               {/* <th scope="row" class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white ">

               </th> */}

               <td class="px-6 py-4">
               { users.userId}
               </td>
                   <td class="pl-3">
                       <div class="text-base font-semibold">{ users. FirstName}</div>
                       
                   </td>  

                   <td class="pl-3">
                       <div class="text-base font-semibold">{ users. LastName}</div>
                       
                   </td> 
               
               <td class="px-6 py-4">
               { users.Email}
               </td>

               {/* <td class="px-6 py-4">
                   <div class="flex items-center">
                       <div class=""></div> { users.costumerAddress}
                   </div>
               </td> */}

              
              <td class="px-6 py-4">
              <Link to={`/Dashboard/User/get/${users.userId}`}>
              <button className='px-3 py-2 bg-green-500 text-white'>
                   view
                 </button>
                    </Link>
               </td>
              

               <td class="px-6 py-4">
                   <button className='px-3 py-2 bg-green-900 text-white'onClick={()=> deleteHandler(users.userId)}>
                   delete
                </button>
               </td>

               <td class="px-6 py-4">
              <Link to={`/Dashboard/User/Edit/${users.userId}`}>
              <button className='px-3 py-2 bg-green-500 text-white'>
              update
                 </button>
                    </Link>
               </td>

               <td class="px-6 py-4">
              <Link to={`/Dashboard/User/role/${users.userId}`}>
              <button className='px-3 py-2 bg-green-500 text-white'>
              role
                 </button>
                    </Link>
               </td>

               
              
           </tr>
           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
              
           </tr>
       </tbody>
        ))}
           
          </table>
        </>
      )}
    </div>
    </div>
  )
}

export default UsersDashboard
