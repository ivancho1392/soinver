import styles from './styles.module.css'
import Image from 'next/image';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
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
                <FaBars size={30}/>
            </div>
        </nav>
    )
}

export default Navbar;