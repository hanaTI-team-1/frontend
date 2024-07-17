export const SeparatorFull = ({ margin, mt, mb }) => {
  return (
    <div
      className="my-10 w-full border-t flex justify-center"
      style={{
        marginTop: mt || margin || 20,
        marginBottom: mb || margin || 20,
      }}
    ></div>
  );
};
