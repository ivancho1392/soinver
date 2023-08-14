import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.homeBackground}>
        <h1 className={styles.homeTittle}>Elevadores y Escaleras Eléctricas</h1>
        <div className={styles.homeMenus}>
          <div className={styles.homeM1}>
            <div className={styles.homeM2}>
              <p>logo</p>
              <p className={styles.homeM3}>+400</p>
            </div>
            <div className={styles.homeM4}>Equipos instalados y/o ajustados</div>
            <div className={styles.homeM3}>Colombia</div>
          </div>
          <div className={styles.homeM1}>
            <div className={styles.homeM2}>
              <p>logo</p>
              <p className={styles.homeM3}>+100</p>
            </div>
            <div className={styles.homeM4}>Equipos instalados y/o ajustados</div>
            <div className={styles.homeM3}>Panamá</div>
          </div>
          <div className={styles.homeM1}>
            <p>logo</p>
            <p className={styles.homeM4}>Personal altamente calificado y con amplia experiencia</p>
          </div>
          <div className={styles.homeM1}>
            <p>logo</p>
            <p className={styles.homeM4}>El mejor servicio en equipos de transporte vertical</p>
          </div>
        </div>
      </div>
      <div>Seccion siguiente</div>
    </>
  );
}
