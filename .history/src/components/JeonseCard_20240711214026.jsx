import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { MdApartment } from 'react-icons/md'

export const JeonseCard = ({address1, address2, price}) => {
  return <li className='flex gap-4 p-2 border drop-shadow-xl items-center justify-center cursor-pointer rounded-lg'>
    {/* right box */}
      <div className='flex gap-4 items-center'>
        {/* icon */}
        <div className='h-20 w-20 flex items-center justify-center bg-slate-200 rounded-lg'>
          <MdApartment size={48}/>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold text-lg'>{address1}</span>
          <span className='text-xs opacity-40'>{address2}</span>
          <span className='font-bold text-lg'>{price}</span>
        </div>
        <div>
          <IoIosArrowDroprightCircle size={48} className='text-gray-500'/>
        </div>
      </div>
  </li>
}