import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="h-48 flex items-center justify-center bg-gray-500 text-white">
      <div className="min-w-[500px]">
        <nav>
          <ul className="flex gap-3">
            <li className="cursor-pointer">개인정보처리방침</li>
            <li className="cursor-pointer">신용정보활용체제</li>
            <li className="cursor-pointer">고객정보활용방침</li>
            <li className="cursor-pointer">사건사고</li>
          </ul>
        </nav>
        <div>
          <Logo />
        </div>
        <div>고객센터(유료) 국내 1800-11</div>
        <div>한국 폴리텍 대학 광명융합기술원</div>
        <div>Copyright 2024 KOPO GROUP.All rights Reserved</div>
      </div>
    </footer>
  );
};
