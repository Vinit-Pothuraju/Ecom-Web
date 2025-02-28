import React, { use, useContext } from 'react'
import { useState } from 'react'
import { ShopContext } from '../context/shopContext'
import assets from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useEffect } from 'react'
const Collections = () => {

  const {products}=useContext(ShopContext)
  const [ShowFilter,setShowFilter]=useState(false);
  const [FilterProducts,setFilterProducts]=useState([]);

  const [Category,setCategory]=useState([]);
  const[subCategory,setSubCategory]=useState([]);

  const toggleCategory=(e)=>{
    if(Category.includes(e.target.value)){
      setCategory(prev=>prev.filter((item)=>item!==e.target.value))}
      else{
        setCategory(prev=>[...prev,e.target.value])
      }
  }
  

  useEffect(()=>{
    setFilterProducts(products)
  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     {/*Filter Options*/}
     <div className='min-w-60'>
      <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
        <img src={assets.dropdown_icon } className={`h-3 sm:hidden ${ShowFilter? 'rotate-90':""}`}  onClick={()=>setShowFilter(!ShowFilter)}  alt="" />
      </p>
      {/*Filter by Category*/}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter?"":'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium' >CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Men'} />Men
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Women'} />Women
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Kids'} />Kids
          </p>
        </div>
      </div>
           {/*sub categories*/}
     <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter?"":'hidden'} sm:block`}>
        <p className='mb=3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Topwear'} />Topwear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Bottomwear'} />Bottomwear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Winterwear'} />Winterwear
          </p>
        </div>
      </div>
     </div>
    {/*rightside*/}
    <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'All'} text2={'COLLECTIONS'}/>
        {/*Sort by*/}
        <select className='border border-gray-300 text-sm px-2'>
          <option value="relavant">Sort by: Relevance</option>
          <option value="low-high">Sort by: Low-High</option>
          <option value="high-low">Sort by: High-Low</option>
        </select>
      </div>
      {/* map Products*/}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-6'>
      {FilterProducts.map((Item, index) => (
        <ProductItem key={index} name={Item.name} id={Item._id} price={Item.price} image={Item.image}/>
      ))}
      </div>
    </div>

    </div>
  )
}

export default Collections