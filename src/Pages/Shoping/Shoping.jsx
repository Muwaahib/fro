import React,{ useState } from 'react'
// import Post from './Post';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import {getAllProducts } from '../../../rudex/slices/product/productSlice'
import {useDispatch,useSelector} from 'react-redux'
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {


  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({  addToCart }) => {

  const dispatch = useDispatch();
  const { products,isLoading,isError,isSuccess} = useSelector((state) => state.product)
  console.log(products, "FOUND DATA!!!!!!!!!!")

  useEffect(() =>{

    // invocation ()
dispatch(getAllProducts())
  },[])

  const deleteHandler = () => {
    
    dispatch(deleteProduct(products.ProductId));
    console.log(products);
  };

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {products?.  product?.map((product) => {
          return (
            <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img class="w-64 object-cover rounded-t-md" src={product.img} alt="" />
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700 "> { product. title}</h1>
      <h1 class=" mt-2 text-gray-700 text-2xl font-semibold"> { product. Store}</h1>
      <h1 class=" mt-2 text-gray-700 text-2xl font-semibold">{ product.Price}</h1>
    
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">CART</button>
        <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
      </div>
    </div>
  </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
