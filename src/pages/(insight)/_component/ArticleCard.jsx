import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ArticleCard = ({ title, imageUrl, url, date, author }) => {
  return (
    <li className="py-5 px-8 h-36 w-full rounded-xl bg-slate-100 hover:bg-slate-200 group cursor-pointer duration-200">
      <Link to={url} className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="mt-3 flex gap-5 text-lg">
            <img src={imageUrl} width={64} height={64} alt="imageUrl" />
            <div>
              <span className="block font-medium">{author}</span>
              <span className="mt-1 block text-sm">{date}</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex h-full items-center group-hover:translate-x-2 duration-300">
          <FaAngleRight
            size={32}
            className="duration-300 text-gray-500 group-hover:text-blue-400"
          />
        </div>
      </Link>
    </li>
  );
};
