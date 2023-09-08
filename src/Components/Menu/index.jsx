import { useContext } from "react";
import styles from "./styles.module.css";
import { SoinverContext } from "../../Context";

const Menu = () => {
    const context = useContext(SoinverContext);

    return (      
        <div className={context.isMenuOpen ? styles.menuopen : styles.menuclose}>
            <ul>
                <li>
                    Nuestros Servicios
                </li>
                <li>
                    Trayectoria
                </li>
                <li>
                    Equipo Soinver
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

