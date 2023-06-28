import { FaEnvelope, FaFacebook, FaGlobe, FaGoogle, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="bg-gray-600 text-white py-10 px-3">
            <h1 className="text-center font-bold text-4xl underline underline-offset-8 py-10">Get In Touch</h1>

            <div className="md:flex items-center">
                <div className="text-xl w-full md:w-1/3">
                    <h3>ADDRESS</h3>
                    <p className="my-2">Sandwip, Chattogram, Bangladesh</p>
                    <div className="text-xl space-y-2">
                        <h3 className="flex gap-2 items-center"><span><FaPhoneAlt className="text-green-500"></FaPhoneAlt></span> : <span>+8801748178232</span></h3>
                        <p className="flex gap-2 items-center"><FaPhoneAlt className="text-green-500"></FaPhoneAlt> : +8801568023121</p>
                        <p className="flex gap-2 items-center"><FaEnvelope className="text-green-500"></FaEnvelope> : masum.nextu@gmail.com</p>
                    </div>
                    <h3 className="my-4">FOLLOW ME</h3>
                    <div className="flex gap-2">
                        <a href=""><FaGlobe></FaGlobe></a>
                        <a href=""><FaFacebook></FaFacebook></a>
                        <a href=""><FaGoogle></FaGoogle></a>
                        <a href="https://www.linkedin.com/in/masumpost/"><FaLinkedin></FaLinkedin></a>
                    </div>
                </div>
                <form className="w-full md:w-2/3 py-5">
                    <div className="flex gap-3 text-black">
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered w-1/2 rounded-3xl" required />
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-1/2 rounded-3xl  shadow-slate-800" required />
                    </div>
                    <textarea className="textarea textarea-bordered w-full my-2 md:my-5 rounded-3xl text-black" placeholder="Your Message"></textarea>
                    <div className="text-center">
                        <input type="submit" value="Send Message" className="btn btn-success  rounded-3xl px-10" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;