import { Whatsapp } from "../Whatsapp";

const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <Whatsapp />
        </div>
    )
}

export default Layout;