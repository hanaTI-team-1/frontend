export const Footer = () => {
  return (
    <footer className="h-48 text-sm md:text-md flex items-center justify-center bg-zinc-700 text-white">
      <div className="space-y-1">
        <nav>
          <ul className="flex flex-wrap gap-2 md:gap-3">
            <li className="cursor-pointer">개인정보처리방침</li>
            <li className="cursor-pointer">신용정보활용체제</li>
            <li className="cursor-pointer">고객정보활용방침</li>
            <li className="cursor-pointer">사건사고</li>
          </ul>
        </nav>
        <div>문의 국내 010-8433-3792</div>
        <div>한국 폴리텍 대학 광명융합기술원</div>
        <div>Copyright 2024 KOPO GROUP.All rights Reserved</div>
      </div>
    </footer>
  );
};
