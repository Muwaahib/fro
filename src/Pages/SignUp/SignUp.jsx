import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../../rudex/slices/auth';
import { useEffect } from 'react';

const SignUp = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  
  

  const redirect = useNavigate();
  const {user} = useSelector((state) => state.auth);

   useEffect(() => {
    if (user?.token) {
     redirect ('/Login');
    }
  }, [user]);

  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  
console.log(user)
 

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!Email || !Password || !FirstName
      ) {
      alert('NEED EMAIL AND PASSWORD');
      return;
    }

    const data = {
      Email,
      Password,
      FirstName,
      LastName

    };

    dispatch(registration(data));
  };
    
  return (
     <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
     
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Please Rigester</h2>
     
    </div>
    <form onSubmit={loginHandler}

    class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name='remember'value={true} />
     
      <div class="-space-y-px rounded-md shadow-sm">
         <div>
          <label for="email-address" class="sr-only">FirstName</label>
          <input type="text"  value={FirstName}
                onChange={(e) => setFirstName(e.target.value)} className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' placeholder='Full Name' />
         
        </div>
        <br />

        <div>
          <label for="email-address" class="sr-only">lastName</label>
          <input type="text"  value={LastName}
                onChange={(e) => setLastName(e.target.value)} className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' placeholder='lastName' />
         
        </div>

        
        <br />
         <div>
          <label for="email-address" class="sr-only">Email</label>
          <input type="email" value={Email}
                onChange={(e) => setEmail(e.target.value)} className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' placeholder='Email' />
         
        </div>
          <br />
         <div>
          <label for="password" class="sr-only">Password</label>
          <input type="password" value={Password}
                onChange={(e) => setPassword(e.target.value)}  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' placeholder='Password' />
         
        </div>
          <br />
        
        <div>
          <label for="email-address" class="sr-only">Number</label>
          <input type="text" className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' placeholder='Number' />
         
        </div>
       
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input type="checkbox" id='remember-me'  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500' />
         
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">

            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"  />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default SignUp
