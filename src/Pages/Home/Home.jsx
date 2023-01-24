import React from 'react'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import Styles from './Home.module.css'
import Headroom from 'react-headroom'
import Contact from '../Contact/Contact';
import Style from './Home.module.css'
import Shoping from '../Shoping/Shoping';


const Home = () => {

  
  return (
    
<div>


<section class=" dark:text-black">
	<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128' />
			{/* <img src="assets/svg/Business_SVG.svg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"> */}
		</div>
		<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 class="text-5xl font-bold leading-none sm:text-6xl">Welcome to
				<span class="dark:text-violet-400">Emaara</span>Fashion 
			</h1>
			<p class="mt-6 mb-8 text-lg sm:mb-12">Communication is at the heart of ecommerce and community
      <br />
				{/* <br class="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem></br> */}
			</p>
			<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <Link to='/Shoping'>
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Shop Now</a>
        </Link>
         <Link to='/Contact us'>
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Contact</a>
        </Link>
			</div>
		</div>
	</div>
	<div className="free flex justify-around px-3 mx-auto w-[80%] gap-10">
		<div className="free1">
			<img src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png" className=' mx-auto' alt="" />
			<h1 className='font-bold text-center'>Free Shipping</h1>
			<p className='text-center mt-1'>Lorem ipsum dolor  <br />sit amet consectetu adipisicing elit sed</p>
		</div>
		<div className="free1">
			<img src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png" alt=""  className=' mx-auto' />
			<h1 className='font-bold text-center'>Support 24/7</h1>
			<p className='text-center mt-1'>Lorem ipsum dolor  <br /> sit amet consectetu adipisicing elit sed</p>
		</div>
		<div className="free1">
			<img src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png" alt=""  className=' mx-auto' />
			<h1 className='font-bold text-center'>Money Return</h1>
			<p className='text-center mt-1'>Lorem ipsum dolor  <br /> sit amet consectetu adipisicing elit sed</p>
		</div>
	</div>
	<div className="text text-center font-bold mt-[100px] text-3xl">
		<h1>-- DAILY DEALS! ---</h1>
	</div>
	 <div className="btn flex mx-auto w-[29%] px-3 py-3 gap-9 items-center font-bold mt-9 text-gray-600">
		<div className="btn1">
			<button>New Arrivals</button>
		</div>
		<div className="btn1">
			<button>Best Sellers</button>
		</div>
		<div className="btn1">
			<button>Sale items</button>
		</div>
	 </div>
</section>
<Shoping/>
 
   <Contact/>
</div>

     

    
  )
}

export default Home