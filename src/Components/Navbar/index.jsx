import styles from './styles.module.css'
import Image from 'next/image';
import { FaBars } from 'react-icons/fa6';
import { useContext } from 'react';
import { SoinverContext } from '../../Context';
import {AiOutlineCloseSquare} from 'react-icons/ai';

const Navbar = () => {
    const context = useContext(SoinverContext);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                src="/logos/logo-soinver.png"
                width="1442"
                height="288"
                alt="LogoSoinver"
                layout="responsive"
                />
            </div>
            <div className={styles.options}>
                {context.isMenuOpen ? <AiOutlineCloseSquare size={30} onClick={() => { context.toggleMenu();}}/> : <FaBars size={30} onClick={() => { context.toggleMenu();}}/>}
                
            </div>
        </nav>
    )
}

export default Navbar;