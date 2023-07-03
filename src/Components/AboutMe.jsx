const AboutMe = () => {
    return (
        <div className="bg-black text-white py-10 px-3 md:px-5">
            <h2 className="text-3xl font-bold text-center py-10 underline underline-offset-8">Know About Me</h2>

            <div className="md:flex items-center gap-4">
                <div className="w-full md:w-2/3 my-3">
                    <h1 className="text-3xl font-bold">I’m Masum . A web Developer</h1>
                    <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> <br />

                    <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry is standard dummy text ever when an unknown printer took a galley.</p>
                </div>
                <div className="flex flex-col w-full md:w-1/3 my-3 space-y-3">
                    <h4 className="underline underline-offset-8 "><span className="text-xl font-semibold">Name</span>: Masum</h4>
                    <h4 className="underline underline-offset-8 "><span className="text-xl font-semibold">Email</span>: masum.nextu@gmail.com</h4>
                    <h4 className="underline underline-offset-8 "><span className="text-xl font-semibold">Age</span>: 23</h4>
                    <h4><span className="text-xl font-semibold">From</span>: Chattogram, Bangladesh</h4>
                    <a href="resumeofmasum.pdf" download={true} className="btn btn-success px-10 font-bold rounded-3xl w-3/5">Download Resume</a>
                </div>
            </div>
            <div className="my-4 md:my-10">
                <div className=" stat justify-around grid-cols-2 md:grid-cols-4 shadow bg-transparent text-white text-center">

                    <div className="">
                        <div className="stat-value text-4xl md:text-6xl">1 +</div>
                        <div className="stat-desc text-white my-3 text-xl font-semibold">Year Experience</div>
                    </div>

                    <div className="">
                        <div className="stat-value text-4xl md:text-6xl">25 +</div>
                        <div className="stat-desc text-white my-3 text-xl font-semibold">Projects Done</div>
                    </div>

                    <div className="">
                        <div className="stat-value text-4xl md:text-6xl">10 +</div>
                        <div className="stat-desc text-white my-3 text-xl font-semibold">Happy Clients</div>
                    </div>

                    <div className="">
                        <div className="stat-value text-4xl md:text-6xl">10 +</div>
                        <div className="stat-desc text-white my-3 text-xl font-semibold">Happy Clients</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;