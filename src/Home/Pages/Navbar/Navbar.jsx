import {Link} from "react-scroll";

const Navbar = () => {
    const lis = <>
        <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Me</Link></li>
        <li><Link to="myworks" spy={true} smooth={true} offset={50} duration={500}>My Works</Link></li>
        <li><Link to="resume" spy={true} smooth={true} offset={50} duration={500}>Resume</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-transparent text-white fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {lis}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {lis}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost normal-case text-3xl font-bold">Ma<span className="animate-spin">s</span>um</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;