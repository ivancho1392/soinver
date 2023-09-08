import { useContext } from "react";
import styles from "./styles.module.css";
import { SoinverContext } from "../../Context";
import Link from "next/link";

const Menu = () => {
    const context = useContext(SoinverContext);

    return (      
        <div className={context.isMenuOpen ? styles.menuopen : styles.menuclose}>
            <ul>
                <li>
                    <Link href="/#servicios" onClick={context.closeMenu}>Nuestros Servicios</Link>
                </li>
                <li>
                    <Link href="/#trayectoria" onClick={context.closeMenu}>Trayectoria de nuestra compañia</Link>       
                </li>
                <li>
                    <Link href="/#equipo" onClick={context.closeMenu}>Equipo Soinver </Link>       
                </li>
                <li>
                    Galeria de Proyectos
                </li>
                <li>
                    Contacto
                </li>
            </ul>
        </div>
    )
}

export default Menu;

