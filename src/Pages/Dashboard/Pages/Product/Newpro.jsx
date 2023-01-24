import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
// notification 


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// notification
import { newProduct,reset } from '../../../../../rudex/slices/product/productSlice';
// import { getAllcatogary } from '../../../../rudex/slices/catogary/CatogarySlice';
import {getAll } from '../../../../../rudex/slices/Subcatogary/Subcatogary'

const Newpro = () => {

  const [title, settitle] = useState('');
  const [Price, setPrice] = useState('');
  const [Store, setStore] = useState('');
  const [subId, setsubId] = useState('');
  const [img, setimg] = useState('');
  const {newProductLoading,newProductSuccess } = useSelector(
      (state) => state.product
    );

    const { subcatogary,isLoading,isError,isSuccess} = useSelector((state) => state.sub)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
  useEffect(() =>{

    // invocation ()
dispatch(getAll())
  },[])

    useEffect(() => {
      if (newProductSuccess) {
        navigate("/Dashboard/products");
        dispatch(reset());
      }
    }, [newProductSuccess]);

    

    const handleSubmit = (e) => {
      e.preventDefault();

   

   const data = {
    title,Price,Store,subId,img
    
      };
  
      dispatch(newProduct(data));
    };

  return (
    <div>
         <div>
      <div className='header flex justify-around'>
        <h1 className='text-2xl font-bold'>Add Product</h1>
        <Link to='/dashboard/product'>
          <button className='text-xl font-bold py-2 px-3 bg-blue-700 text-white'>
            Go back
          </button>
        </Link>
      </div>

      <div className='form w-[80%] mx-auto'>
        <form onSubmit={handleSubmit} >
          <div className='formGroup'>
            <label htmlFor=''>Product Title</label>
            <div>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className='border p-3 rounded-sm w-full'
                type='text'
                placeholder='Type here'
               
              />
            </div>
          </div>
          <div className='formGroup'>
            <label htmlFor=''>Price</label>
            <div>
              <input
               value= {Price}
               onChange={(e) => setPrice(e.target.value)}
                className='border p-3 rounded-sm w-full'
                type='Number'
                placeholder='Type here'
                
              />
            </div>
          </div>
          <div className='formGroup'>
            <label htmlFor=''>Quintity</label>
            <div>
              <input
               value={Store}
               onChange={(e) => setStore(e.target.value)}
                className='border p-3 rounded-sm w-full'
                type='number'
                placeholder='Type here'
                
              />
            </div>
            <div className='formGroup'>
            <label htmlFor=''>Select category</label>
            <div>
          
                <select
              value={subId}
              onChange={(e) => setsubId(e.target.value)}
              type='text'
              className='px-2 py-2  w-[100%] outline-none border h-[50%]'
              placeholder='063'
              id='Price'
              required
            >
                       {subcatogary?.  catagory?.map(( catagory
 ) =>(
  <option
                        className="p-2 "
                        key={catagory.CagoryId}
                        value={catagory.CagoryId}
                      >
                        { catagory.type}
                      </option>
 ))}
            </select>
            </div>

            
            
            
            <div className=''>
          <div>
            <label htmlFor='body'>image</label>
          </div>
          <div>
          <input
              value={img}
              onChange={(e) => setimg(e.target.value)}
              type='text'
              className='px-2 py-2  w-[100%] outline-none border'
              placeholder='image'
              id='Price'
              // required
            />
          </div>
        </div>
          </div>

            
            
            {/* ============================== */}
            {/* <div>
                
<label class="">Upload file</label>
<input type="file"  className='border p-3 rounded-sm w-full' aria-describedby="file_input_help" id="file_input" />

<p class="mt-1 text-sm text-black  dark:text-black" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

            </div> */}
          </div>
          <button className='bg-blue-500 px-3 py-2 rounded-sm my-3 text-white'>
            Save 
          </button>
        </form>
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Newpro