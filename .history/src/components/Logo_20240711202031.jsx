import { FaHouseMedical } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return <Link to={"/"}>
    <FaHouseMedical size={24} />
    <span className='text-2xl'>예방</span>
  </Link>
}