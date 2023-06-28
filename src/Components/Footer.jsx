import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center px-4 py-10 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <img className="w-10 h-10 rounded-full" src="masumlogo.png" alt="" />
                    <p>Copyright © 2023 - All right reserved by <span className="text-blue-200">Masum</span></p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p><Link>Trams & Condition</Link></p>
                    <p><Link>Disclaimer</Link></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;