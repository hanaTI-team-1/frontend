import { motion } from "framer-motion";
export const Separator = ({ margin }) => {
  return (
    <div
      className="my-10 w-full flex justify-center"
      style={{ marginTop: margin, marginBottom: margin }}
    >
      <motion.div
        initial={{ scaleX: 0, opacity: 0.2 }}
        viewport={{ once: true }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
          transition: { duration: 0.2, delay: 0.2, ease: "easeInOut" },
        }}
        className="w-4/5 border-t"
      />
    </div>
  );
};
