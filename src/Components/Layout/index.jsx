import { Whatsapp } from "../Whatsapp";
import Menu from "../Menu";

const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <Menu/>
            <Whatsapp />
        </div>
    )
}

export default Layout;