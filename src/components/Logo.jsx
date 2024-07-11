import { FaHouseMedical } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return <Link to={"/"} className='flex items-center gap-2 cursor-pointer'>
    <FaHouseMedical size={24} />
    <span className='text-2xl'>예방</span>
  </Link>
}