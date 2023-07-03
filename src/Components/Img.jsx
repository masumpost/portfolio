import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Img = ({ work }) => {
    const { img, git, live } = work;

    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className="hover:animate-pulse">
            <div className="card w-full h-60 md:w-96 bg-base-100 shadow-lg image-full" data-aos="zoom-in" data-aos-duration='2000'>
                <figure><img src={img} alt="project" /></figure>
                <div className="card-body">
                    <div className="flex gap-3 justify-center mt-20">
                        <a href={git} target="_">
                            <button className="btn btn-primary px-6 btn-sm">Git</button>
                        </a>
                        <a href={live} target="_">
                            <button className="btn btn-neutral btn-sm px-6">Live</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Img;