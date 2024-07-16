import styles from "./Spinner.module.css";
export const Spinner = () => {
  return (
    <div class={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
