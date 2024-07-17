export const InsightArticle = ({ title, children }) => {
  return (
    <article className="opacity-90 flex flex-col items-center">
      <h3 className="w-full text-xl font-medium mb-10">{title}</h3>
      {children}
    </article>
  );
};
