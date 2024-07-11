import { MdApartment } from 'react-icons/md'

export const JeonseCard = () => {
  return <li>
    {/* right box */}
      <div>
        {/* icon */}
        <div>
          <MdApartment size={48}/>
        </div>
        <div>
          <span>서울특별시 관악구 신림동</span>
          <span>OO로 56 (123-12) 3층 20평</span>
          <span>1억 2000만원</span>
        </div>
        <div>
          <IoIosArrowDroprightCircle />
        </div>
      </div>
  </li>
}