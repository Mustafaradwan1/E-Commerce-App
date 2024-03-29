
import { Left } from '../../Ulits/Dummy'
import { FaQuestionCircle } from 'react-icons/fa'
import { useEffect} from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavTop = () => {
  let local = JSON.parse(localStorage.getItem("Login"))
  useEffect(()=>{
  },[local])

  return <div className='flex flex-col gap-3 items-center md:flex-row justify-between  border-b py-2'>
            <div className='left'>
          <ul className='flex sm:gap-3 text-gray-100' >
          {Left.map((item)=>(
              <li key={item.title} className='text-[14px] flex items-center px-2 gap-2 cursor-pointer border-r last:border-0'>
                {item.title}
                {item.icon1}
                {item.icon2}
              </li>
              ))}
          </ul>
        </div>
        <div className='right'>
        <ul className='flex gap-3 text-gray-100' >
        <Link to={`/`} className='text-[14px] flex items-center px-2 gap-2 cursor-pointer border-r last:border-0'>
        <FaQuestionCircle/>
                Support
          </Link>
          {local ?  <div className=''>
            <h5 className='cursor-pointer relative group   flex justify-center gap-2 items-center'>
              {local.name}
              <FaUser/>
              <span className='bg-white shadow text-gray-800 group-hover:block transition hidden absolute w-[200px] h-auto py-5 px-5 rounded-md z-[1000]
              right-0 top-6' >
                <ul >
                  <li className='mb-1 cursor-pointer hover:translate-x-2 transition'>Profile</li>
                  <li className='mb-1 cursor-pointer hover:translate-x-2 transition'>Contact</li>
                  <li className='mb-1 cursor-pointer hover:translate-x-2 transition'>Setting</li>
                  <Link to={`Login`} className='text-[14px] border-t border-gray-500  flex items-center px-2 gap-2 cursor-pointer' onClick={()=>{
                  localStorage.removeItem("Login")
          }}>
          Logout
          </Link> 
                </ul>
              </span>
            </h5>

          </div> : <Link to={`Login`} className='text-[14px] flex items-center px-2 gap-2 cursor-pointer border-r last:border-0'>
          Login
          </Link> }
          </ul>
        </div>
  </div>
  
}

export default NavTop