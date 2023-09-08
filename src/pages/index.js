import styles from "../styles/Home.module.css";
import { FaHandshake, FaTools, FaGears } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsGearFill, BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import Layout from "../Components/Layout";
import Image from "next/image";
import CardService from "../Components/CardService";
import CardServiceRight from "../Components/CardServiceRight";
import { VscTools } from "react-icons/vsc";
import { BsPcDisplay } from "react-icons/bs";
import { GiModernCity } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then(it => it.Animator),
  { ssr: false },
);

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

export default function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <Layout>
      <>
        {/* First Section */}
        <div className={styles.homeBackground}>
          <ScrollContainer style={{ width: 600 }}>
            {/*titulo*/}
            <ScrollPage>
              <Animator animation={FadeUp} style={{ width: 500 }}>
                <h1 className={styles.homeTittle}>
                  <Image
                    src="/logos/logo-soinver.png"
                    width="1442"
                    height="288"
                    alt="LogoSoinver"
                    layout="responsive"
                  />
                </h1>
                <h1 className={styles.homeTittle2}>
                  El mejor servicio en equipos de transporte vertical
                </h1>
              </Animator>
            </ScrollPage>

            {/*nuestros servicios*/}
            <ScrollPage className={styles.homeBackground1}>
              <div className={styles.ssHeader}>
                <h1>Nuestros Servicios</h1>
                <div className={styles.ssImage}>
                  <Image
                    src="https://soinverjip.s3.amazonaws.com/mobile/imagenes/mrupper.jpeg"
                    width="1240"
                    height="656"
                    alt="LogoSoinver"
                    layout="responsive"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "initial",
                  height: "100%",
                  width: "600px",
                }}
              >
                <span style={{ width: 600 }}>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <CardService
                      service="Instalación de Equipos Nuevos"
                      description="Elevadores<br />
              Escaleras electrícas<br />
              Rampas electrícas<br />
              Entre otros<br />"
                      icon={
                        <VscTools
                          style={{ color: "yellow", fontSize: "60px" }}
                        />
                      }
                    />
                  </Animator>
                  <Animator animation={MoveIn(1000, 0)}>
                    <CardServiceRight
                      service="Ajuste Electromecánico"
                      description="Puesta en marcha<br />
              Ajuste<br />
              Pruebas de seguridad<br />
              Llave en mano<br />"
                      icon={
                        <BsPcDisplay
                          style={{ color: "yellow", fontSize: "60px" }}
                        />
                      }
                    />
                  </Animator>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <CardService
                      service="Mantenimiento Preventivo y Correctivo"
                      description="Rutinas de mantenimiento<br />
                        Reparaciones<br />
                        Overhaul<br />
                        Entre otros<br />"
                      icon={
                        <MdEngineering
                          style={{ color: "yellow", fontSize: "60px" }}
                        />
                      }
                    />
                  </Animator>
                  <Animator animation={MoveIn(1000, 0)}>
                    <CardServiceRight
                      service="Modernizaciones"
                      description="Adecuación de sistemas de control, botoneras, variadores de frecuencia, y demás elementos que brinden funcionalidades y estética moderna a sus equipos."
                      icon={
                        <GiModernCity
                          style={{ color: "yellow", fontSize: "60px" }}
                        />
                      }
                      textAlign="justify"
                    />
                  </Animator>
                </span>
              </div>
            </ScrollPage>

            {/* Trayectoria */}
            <ScrollPage className={styles.homeBackground1}>
              <div className={styles.ssHeader}>
                <h1>Trayectoria</h1>
                <div className={styles.ssImage}>
                  <Image
                    src="https://soinverjip.s3.amazonaws.com/mobile/imagenes/izajeAIT.jpg"
                    width="1240"
                    height="656"
                    alt="LogoSoinver"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className={styles.homeMenus}>
                <Animator animation={MoveIn(-1000, 0)}>
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
                </Animator>
                <Animator animation={MoveIn(1000, 0)}>
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
                </Animator>
                <Animator animation={MoveIn(-1000, 0)}>
                  <div className={styles.homeM1}>
                    <p className={styles.homeLogos}>
                      <MdEngineering size={50} />
                    </p>
                    <p className={styles.homeM4}>
                      Personal altamente calificado y con amplia experiencia
                    </p>
                  </div>
                </Animator>
                <Animator animation={MoveIn(1000, 0)}>
                  <div className={styles.homeM1}>
                    <p className={styles.homeLogos}>
                      <FaHandshake size={50} />
                    </p>
                    <p className={styles.homeM4}>
                      El mejor servicio en equipos de transporte vertical
                    </p>
                  </div>
                </Animator>
              </div>
            </ScrollPage>

            {/*nuestro equipo*/}
            <ScrollPage className={styles.homeBackground1}>
              <div className={styles.ssHeader}>
                <h1>Equipo SOINVER</h1>
                <div className={styles.ssImage}>
                  <Image
                    src="https://soinverjip.s3.amazonaws.com/fotos/20230808_132434.jpg"
                    width="1240"
                    height="656"
                    alt="LogoSoinver"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className={styles.contenedorFotos}>
                <Animator animation={MoveIn(-1000, 0)}>
                  <div className={styles.fotopersonal}>
                    <Image
                      src="https://soinverjip.s3.amazonaws.com/mobile/imagenes/GinaBR.PNG"
                      width="1240"
                      height="656"
                      alt="LogoSoinver"
                      layout="responsive"
                      className={styles.foto}
                    />
                    <div className={styles.texto}>Ing. Gina Ruiz</div>
                  </div>
                </Animator>
                <Animator animation={MoveIn(1000, 0)}>
                  <div className={styles.fotopersonal}>
                    <Image
                      src="https://soinverjip.s3.amazonaws.com/mobile/imagenes/IvanBR.PNG"
                      width="1240"
                      height="656"
                      alt="LogoSoinver"
                      layout="responsive"
                      className={styles.foto}
                    />
                    <div className={styles.texto}>Ing. Jorge Ivan Puyo</div>
                  </div>
                </Animator>
                <Animator animation={MoveIn(-1000, 0)}>
                  <div className={styles.fotopersonal}>
                    <Image
                      src="https://soinverjip.s3.amazonaws.com/mobile/imagenes/PuyoBR.PNG"
                      width="1240"
                      height="656"
                      alt="LogoSoinver"
                      layout="responsive"
                      className={styles.foto}
                    />
                    <div className={styles.texto}>Jorge Enrique Puyo</div>
                  </div>
                </Animator>
                <Animator animation={MoveIn(1000, 0)}>
                  <div className={styles.fotopersonal}>
                    <Image
                      src="https://soinverjip.s3.amazonaws.com/mobile/imagenes/LizethBR.PNG"
                      width="1240"
                      height="656"
                      alt="LogoSoinver"
                      layout="responsive"
                      className={styles.foto}
                    />
                    <div className={styles.texto}>Psic. Lizeth Puyo</div>
                  </div>
                </Animator>
              </div>
              <div className={styles.contacto}>
                Contacto
                <ul className={styles.listaContacto}>
                  <li>
                    <AiOutlineMail style={{ color: "white", fontSize: "40px" }} className={styles.icon}/>
                    <p>soinversas@gmail.com</p>
                  </li>
                  <li>
                    <BsInstagram style={{ color: "white", fontSize: "40px" }} className={styles.icon}/>
                    <p>Instagram</p>
                  </li>
                  <li>
                    <BsWhatsapp style={{ color: "white", fontSize: "40px" }} className={styles.icon}/>
                    <p>Whastapp PTY</p>
                  </li>
                  <li>
                    <BsWhatsapp style={{ color: "white", fontSize: "40px" }} className={styles.icon}/>
                    <p>Whatsapp COL</p>
                  </li>
                  <li>
                    <BsLinkedin style={{ color: "white", fontSize: "40px" }} className={styles.icon}/>
                    <p>LinkedIn</p>
                  </li>
                </ul>
              </div>
            </ScrollPage>
          </ScrollContainer>
        </div>
      </>
    </Layout>
  );
}
