
import { fetchProductCategory, getCategoryProduct } from '../../store/CategoryProduct'

import  { useEffect, useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Category = () => {
  const [active,setactive] = useState(true)
    const ProductCategory = useSelector(getCategoryProduct)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProductCategory(id))
        setTimeout(() => {
          setactive(false)
        }, 1000);
    },[dispatch,id])
  return <div className='py-10 mt-32'>
    {active ? <Loading/> :
          <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 lg:grid-cols-5'>
            {ProductCategory.map((item)=>(
              <div key={item.id} className='shadow'>
                <Link to={`/product/${item?.id}`} >
                <div className='relative'>
                  <img src={item?.thumbnail}  className='w-full h-64'  alt={item.title} />
                  <p className='absolute top-5 px-5 py-1 text-gray-100  bg-orange-500'><span>{item.category}</span></p>
                </div>
                <div className='py-3 px-5 text-center'>
                  <p className='font-bold text-gray-950'><span>{item.title}</span></p>
                  <p className='font-bold text-gray-950'>brand : <span className='text-gray-500'>{item.brand}</span></p>
                  <p className=''><span>{item.rating}</span></p>
                  <div className='flex gap-3 justify-between'>
                  <p className='font-bold text-gray-950'>price : <span className=' text-gray-500'>${item.price}</span></p>
                  <p className=''><span className='text-orange-500'>${item.discountPercentage}</span></p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
    }
    </div>
  
}

export default Category