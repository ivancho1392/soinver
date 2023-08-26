import styles from "../styles/Home.module.css";
import { FaHandshake, FaTools, FaGears } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import Layout from "../Components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <>
        {/* First Section */}
        <div className={styles.homeBackground}>
          <h1 className={styles.homeTittle}>
            Elevadores y Escaleras Eléctricas
          </h1>
          <h1 className={styles.homeTittle2}>
            Soluciones de Ingeniería Vertical, el mejor servicio en equipos de
            transporte vertical
          </h1>
          <div className={styles.homeMenus}>
            <div className={styles.homeM1}>
              <div className={styles.homeM2}>
                <p className={styles.homeLogos}>
                  <FaTools size={35} />
                </p>
                <p className={styles.homeM3}>+400</p>
              </div>
              <div className={styles.homeM4}>
                Equipos instalados y/o ajustados
              </div>
              <div className={styles.homeM3}>Colombia</div>
            </div>
            <div className={styles.homeM1}>
              <div className={styles.homeM2}>
                <p className={styles.homeLogos}>
                  <BsGearFill size={35} />
                </p>
                <p className={styles.homeM3}>+100</p>
              </div>
              <div className={styles.homeM4}>
                Equipos instalados y/o ajustados
              </div>
              <div className={styles.homeM3}>Panamá</div>
            </div>
            <div className={styles.homeM1}>
              <p className={styles.homeLogos}>
                <MdEngineering size={50} />
              </p>
              <p className={styles.homeM4}>
                Personal altamente calificado y con amplia experiencia
              </p>
            </div>
            <div className={styles.homeM1}>
              <p className={styles.homeLogos}>
                <FaHandshake size={50} />
              </p>
              <p className={styles.homeM4}>
                El mejor servicio en equipos de transporte vertical
              </p>
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className={styles.secondSection}>
          <div className={styles.ssHeader}>
              <h1>Nuestros Servicios</h1>
            <div className={styles.ssImage}>
              <Image
                src="https://soinverjip.s3.amazonaws.com/mobile/imagenes/NuestrosServicios1240.png"
                width="1240"
                height="656"
                alt="LogoSoinver"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
