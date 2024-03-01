import { fetchSearchProduct, getSearchProduct } from '../../store/SearchProduct'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading/Loading'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Search = () => {
  const [active,setactive] = useState(true)
    const {id} = useParams()
    const getSearchApi = useSelector(getSearchProduct)
    console.log(getSearchApi)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchSearchProduct(id))
        setTimeout(() => {
          setactive(false)
        }, 1000);
    },[dispatch,id])
  return <div className='py-10 mt-32'>
    {active ? <Loading/> : 
    <div className="container">
      {getSearchApi !== '' ? 
              <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
              {getSearchApi.map((item)=>(
                  <motion.div
                  initial={{opacity:0,y:30}}
                  animate={{opacity:1,y:0}}
                  transition={{duration:0.5}}
                  key={item.id} className='shadow relative'>
                  <Link to={`/product/${item?.id}`}>
                  <span className='absolute category z-20 top-5 left-0 bg-orange-500 p-2  w-40 text-gray-100'>{item.category}</span>
                  <div className='w-full h-64'>
                    <img src={item?.thumbnail} className='w-full h-full '  alt='' />
                  </div> 
                  <div className='px-5 py-3 text-center'>
                  <p className='text-gray-950 font-bold'>Brand: <span className='text-gray-700 font-normal'>{item.brand}</span></p>
                   <p className='text-gray-700'>{item.title}</p>
                   <div className='flex justify-center gap-3'>
                    <span className='line-through text-gray-400'>${item.price}</span>
                    <span className='font-bold underline'>${((item.price) - (item.price * (item.discountPercentage /100) )).toFixed()}</span>
                    <span className='text-teal-500'>({(item.discountPercentage).toFixed()}%off)</span>
                   </div>
                  </div>
                </Link>
                  </motion.div>
              ))}
          </div> :
          <div>
          <span>no product from this search</span>  
          </div>}
    </div>
    }
  </div>
  
}

export default Search