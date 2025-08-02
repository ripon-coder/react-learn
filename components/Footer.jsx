import styles from "./Footer.module.css";
export default function Footer({totalCount, completedCount}) {
  return (
    <>
    <div className={styles.footer}>
        <p>Total Todo: {totalCount}</p>
        <p>Completed Todo: {completedCount}</p>
    </div>
    </>
  );
}
