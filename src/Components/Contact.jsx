import { FaEnvelope, FaFacebook, FaGlobe, FaGoogle, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_esr6dzu', 'template_92ribqr', form.current, '3IIFIn72Ut1L2XcYA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="bg-gray-600 text-white py-10 px-5 md:px-3">
            <h1 className="text-center font-bold text-4xl underline underline-offset-8 py-10">Get In Touch</h1>

            <div className="md:flex items-center">
                <div className="md:text-xl w-full md:w-1/3">
                    <h3>ADDRESS</h3>
                    <p className="my-2">Sandwip, Chattogram, Bangladesh</p>
                    <div className="md:text-xl space-y-2">
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
                <form ref={form} onSubmit={sendEmail} className="w-full py-5">
                    <div className="md:flex gap-3">
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full md:w-1/2 rounded-3xl mb-3 bg-transparent text-white" name="form_name" required {...register("name")} />
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full md:w-1/2 rounded-3xl mb-3 bg-transparent text-white" name="email" required {...register("email")} />
                    </div>
                    <input name="text" className="textarea textarea-bordered w-full h-16 md:h-24 mb-5 rounded-3xl bg-transparent text-white" placeholder="Your Message" {...register("text")}></input>
                    <div className="text-center">
                        <input type="submit" value="Send Message" className="btn btn-success  rounded-3xl px-10" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;