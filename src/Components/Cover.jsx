import Navbar from "../Home/Pages/Navbar/Navbar";
import { Typewriter } from 'react-simple-typewriter'

const Cover = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{
                backgroundImage: `url('cover.jpg')`,
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h4 className="text-white text-center text-3xl font-semibold my-4">Welcome</h4>
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                            <span style={{ color: 'white', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['My Name is Masum', 'I’m a Full Stack Developer', 'Front End Developer', 'React Developer']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="mb-5 text-2xl">From Chattogram, Bangladesh</p>
                        <button className="btn btn-outline btn-success rounded-3xl px-9">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;