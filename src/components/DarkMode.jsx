import styles from './DarkMode.module.css'

const DarkMode = () => {
  return (
    <div className={styles.darkmode}>
        <label className={styles.darkmode_label}>
            <input type="checkbox" name="" id="" className={styles.darkmode_input}/>
            <span className={styles.darkmode_span}></span>
        </label>
    </div>
  )
}

export default DarkMode