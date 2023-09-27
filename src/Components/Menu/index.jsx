import { useContext } from "react";
import styles from "./styles.module.css";
import { SoinverContext } from "../../Context";
import Link from "next/link";
import { GrWaypoint } from "react-icons/gr";
import { HiOutlinePhoto, HiOutlineWrench } from "react-icons/hi2";
import { AiOutlineTeam } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Menu = () => {
  const context = useContext(SoinverContext);

  return (
    <div className={context.isMenuOpen ? styles.menuopen : styles.menuclose}>
      {context.isMenuOpen ? (
        <>
        <Link
        href="/#servicios"
        onClick={context.closeMenu}
        className={styles.menuitem}
      >
        <div className={styles.icon}><HiOutlineWrench/></div>
        <div className={styles.name}>Nuestros Servicios</div>
      </Link>
      <Link
        href="/#trayectoria"
        onClick={context.closeMenu}
        className={styles.menuitem}
      >
        <div className={styles.icon}>
          <GrWaypoint />
        </div>
        <div className={styles.name}>Trayectoria de nuestra compañia</div>
      </Link>
      <Link
        href="/#equipo"
        onClick={context.closeMenu}
        className={styles.menuitem}
      >
        <div className={styles.icon}><AiOutlineTeam/></div>
        <div className={styles.name}>Equipo Soinver</div>
      </Link>
      <Link href="/galeria" onClick={context.closeMenu} className={styles.menuitem}>
        <div className={styles.icon}><HiOutlinePhoto/></div>
        <div className={styles.name}>Galeria de Proyectos</div>
      </Link>
      <Link href="/" onClick={context.closeMenu} className={styles.menuitem}>
        <div className={styles.icon}><BsWhatsapp/></div>
        <div className={styles.name}>Contacto</div>
      </Link>
        </>
      ) : null}
      
    </div>
  );
};

export default Menu;
