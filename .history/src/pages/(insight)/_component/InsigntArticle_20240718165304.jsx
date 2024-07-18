export const InsightArticle = ({ title, children, className }) => {
  return (
    <article className="opacity-90 flex flex-col items-center">
      <h3 className={`w-full text-xl font-medium mb-10 ${className}`}>{title}</h3>
      {children}
    </article>
  );
};
