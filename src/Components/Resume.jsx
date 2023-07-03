import { useEffect, useState } from "react";
import Card from "./Card";
import Range from "./Range";
import { FaDownload } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {


    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(()=>{
        AOS.init();
    },[])

    useEffect(() => {
        fetch('education.json')
            .then(res => res.json())
            .then(data => setEducation(data))
    }, []);

    useEffect(() => {
        fetch('experience.json')
            .then(res => res.json())
            .then(data => setExperience(data))
    }, []);

    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <div className="px-4 py-10 bg-gray-700 text-white">
            <h1 className="text-3xl font-bold text-center underline underline-offset-8 py-10">Resume</h1>
            <div>
                <div className="md:flex">
                    <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-duration='2000'>
                        <h3 className="text-2xl font-bold md:ms-3">My Education</h3>
                        <div className="gap-3">
                            {
                                education.map(edu => <Card
                                    key={edu.id}
                                    edu={edu}
                                ></Card>)
                            }
                        </div>
                    </div>
                    <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-duration='2000'>
                        <h3 className="text-2xl font-bold md:ms-3">My Experience</h3>
                        <div className="ms-3">
                            {
                                experience.map(edu => <Card
                                    key={edu.id}
                                    edu={edu}
                                ></Card>)
                            }
                        </div>
                    </div>
                </div>
                <d3iv>
                    <h3 className="text-2xl font-bold my-5 md:ms-3">My Skills</h3>
                    <div className="grid md:grid-cols-2 gap-1 mx-3">
                      {
                      skills.map(skill => <Range
                      key={skill.skillName}
                      skill={skill}
                      ></Range>)
                        }
                    </div>
                </d3iv>
            </div>
            <div className="text-center mt-12">
                <a href="resumeofmasum.pdf" download={true}>
                <button className="btn btn-outline btn-accent px-5 rounded-3xl">Download Resume <FaDownload></FaDownload></button>
                </a>
            </div>
        </div>
    );
};

export default Resume;