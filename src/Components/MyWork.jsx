import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Img from './img';

const MyWork = () => {
    const [works, setWorks] = useState([]);
    const workss = works.filter(work => work.type == "javascript");
    const rworks = works.filter(work => work.type == "react");

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])


    return (
        <div className='bg-slate-950 text-white px-3 md:px-5'>
            <h1 className="text-3xl font-bold text-center py-10">Completed Projects</h1>
            <div className='text-center decoration-neutral-focus'>
                <Tabs>
                    <div className='my-3'>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>JavaScript</Tab>
                            <Tab>React</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-5 items-center py-10'>
                            {
                                works.map(work => <Img
                                    key={work.id}
                                    work={work}
                                ></Img>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mx-auto py-10'>
                            {
                                workss.map(work => <Img
                                    key={work.id}
                                    work={work}
                                ></Img>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mx-auto py-10'>
                            {
                                rworks.map(work => <Img
                                    key={work.id}
                                    work={work}
                                ></Img>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MyWork;