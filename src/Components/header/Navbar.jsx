import logo from '../../assets/logo.png'
import Sidebar from './Sidebar'
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import { setSidebarOn } from '../../store/SidebarSlice'
import SearchBar from './SearchBar'
import {motion} from 'framer-motion'
import ShoppingCart from './ShoppingCart'
import NavTop from './NavTop'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [animation,setanimation] = useState(true)

  const dispatch = useDispatch()
  useEffect(()=>{
    setTimeout(()=>{
      setanimation(false)
    },1000)
  },[])
  return <>
  {animation ? "" : 
    <div className=' fixed top-0 right-0 left-0 z-40 bg-gray-900 border-b-gray-200 border-b-[1px] w-full'>
    <div className="container  h-full">
    <motion.div
    initial={{opacity:0,y:-30}}
    animate={{opacity:1,y:0}}>
      <NavTop/>
    </motion.div>
      <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5}}
      className='flex items-center justify-between my-2 mx-5'>
        <motion.div
           initial={{opacity:0,x:-50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.7}}
          className='flex items-center overflow-hidden'>
          <FaBarsStaggered className='cursor-pointer text-gray-200 text-2xl' onClick={()=>dispatch(setSidebarOn())
          } />
          <Link to={'/'}>
            <img src={logo} alt='Logo-Img' className='logo w-16 sm:w-20' />
          </Link>
        </motion.div>
        <div className='hidden sm:block flex-1'><SearchBar/></div>
        <motion.div
                initial={{opacity:0,x:50}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.7}}>
          <ShoppingCart/>
        </motion.div>
      </motion.div>
    </div>
  </div>
  }
  <Sidebar/>
  </>
}

export default Navbar