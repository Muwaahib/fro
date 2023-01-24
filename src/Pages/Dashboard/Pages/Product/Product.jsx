import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllProducts ,deleteProduct} from '../../../../../rudex/slices/product/productSlice'


const product = () => {
  const dispatch = useDispatch();
  const { products,isLoading,isError,isSuccess} = useSelector((state) => state.product)
  console.log(products, "FOUND DATA!!!!!!!!!!")

  useEffect(() =>{

    // invocation ()
dispatch(getAllProducts())
  },[])

  const deleteHandler = (ID) => {
    
    dispatch(deleteProduct(ID));
    console.log(products);
  };

  return (
    <div>
        <div className="hero flex justify-between py-3 px-3">
            <h1>Product</h1>
             <Link to='/dashboard/product/new'>
           <div className="btn bg-blue-800 py-2 px-3 text-white">
             <button>New Product</button>
            </div>
            </Link>
        </div>
        <div class="  flex px-4 ">
          <table>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    ID
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>

                <th scope="col" class="px-6 py-3">
                    image
                </th>

                <th scope="col" class="px-6 py-3">
                Price
                </th>

                <th scope="col" class="px-6 py-3">
                store
                </th>
             
                <th scope="col" class="px-6 py-3">
                    view
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
                <th scope="col" class="px-6 py-3">
                    update
                </th>
            </tr>
        </thead>
        {products?.  product?.map(( product
) =>(
           <tbody>

            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' >
                <td className='px-6 py-4'>
                { product.ProductId}
                </td>

                <td>
                { product. title}
                </td>

                <td className='w-[50px] h-[10px]'>
                    <img src={product.img}  alt="" srcset="" />
                </td>

                <td className='px-6 py-4'>
                { product.Price}
                </td>

                <td>
                { product. Store}
                </td>

                <td class="px-6 py-4">
              <Link to={`/Dashboard/product/get/${product.ProductId}`}>
              <button className='px-0.5 py-2 text-blue-600 '>
                   view
                 </button>
                    </Link>
               </td>
              

               <td class="px-6 py-4">
                   <button className='px-0.5 py-2  text-green-600' onClick={() => deleteHandler(product.ProductId)}>
                   delete
                </button>
               </td>

               <td class="px-6 py-4">
              <Link to={`/Dashboard/product/Edit/${product.ProductId}`}>
              <button className='px-2 py-1  bg-gray-300 text-gray-700 '>
              update
                 </button>
                    </Link>
               </td>


            </tr>
           

               
              
          
       
       </tbody>
        ))}
        </table>

  {/* <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img class="w-64 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">Zebra succulent</h1>
      <p class="text-sm mt-2 text-gray-700">Two sizes</p>
      <div class="mt-3 space-x-4 flex p-1">
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-green-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-blue-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
        </div>
      </div>
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">$12.99</button>
        <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
      </div>
    </div>
  </div>

  <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img class="w-64 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">Zebra succulent</h1>
      <p class="text-sm mt-2 text-gray-700">Two sizes</p>
      <div class="mt-3 space-x-4 flex p-1">
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-green-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-blue-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
        </div>
      </div>
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">$12.99</button>
        <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
      </div>
    </div>
  </div>
  <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img class="w-64 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">Zebra succulent</h1>
      <p class="text-sm mt-2 text-gray-700">Two sizes</p>
      <div class="mt-3 space-x-4 flex p-1">
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-green-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-blue-400 rounded-full"> </span>
        </div>
        <div class="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
          <span class="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
        </div>
      </div>
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">$12.99</button>
        <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-red-400 rounded-lg shadow hover:shadow-md transition duration-300">Delet</button>
          <Link to='/dashboard/product/new'>
         <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Edit</button>
         </Link>
        
      </div>
    </div>
  </div> */}
</div>


    </div>
  )
}

export default product