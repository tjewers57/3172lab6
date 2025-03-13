import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <h1>About</h1>
            <section className='row mb-3'>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Education</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text w-75 m-auto">I am currently in my fourth year of the Bachelor of Computer Science (Co-op) program at Dalhousie University.</p>
                        
                        <p className="card-text w-75 m-auto">I began my undergraduate degree in the Fall of 2021 and will be graduating at the end of this semester (Winter 2025).</p>
                        <p className="card-text w-75 m-auto">Outside of my degree/classes, I like to study emerging technologies, currently I am studying Kubernetes and preparing to take the Certified Kubernetes Administrator (CKA) exam.</p>
                    </div>
                </div>
            </section>
            <section className='row mb-3'>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Experience</h3>
                    </div>
                    <div className="card-body">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Service Desk Technician - Transport Canada</h4>
                                <p className="card-text w-75 m-auto">
                                    For my first Co-op work term, I worked as a Service Desk/Desktop Support Technician at Transport Canada. <br/>
                                    Most of my work consisted of troubleshooting software and hardware problems, in addition to preparing and deploying IT equipment to employees.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Network Programmer - Department of National Defence</h4>
                                <p className="card-text w-75 m-auto">
                                    For my second Co-op work term, I worked as a Network Programmer at the Department of National Defence. <br/>
                                    My work here consisted of stuyding and using different network devices like switches, routers, and firewalls. <br/>
                                    I also did a fair amount of network automation and scripting using tools like Python and Ansible.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">DevOps Programmer - Department of National Defence</h4>
                                <p className="card-text w-75 m-auto">
                                    For my third and final Co-op work term, I returned to National Defence, however my work this term was focused on DevOps, more specifically Kubernetes. <br/>
                                    During this term I worked on deploying applications in Kubernetes, leveraging different technologies for networking and storage in Kubernetes outside of a cloud environment. <br/>
                                    In addition to this, I continued to do some Python scripting with a focus on socket programming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='row mb-3'>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Overall Skills/Competencies</h3>
                    </div>
                    <div className="card-body">
                        <div className="row justify-content-around">
                            <div className="col-3 card">
                                <h4 className='card-title'>Programming Languages</h4>
                                <ul className='card-body list-group list-group-flush'>
                                    <li className='list-group-item'>Python</li>
                                    <li className='list-group-item'>JavaScript</li>
                                    <li className='list-group-item'>Java</li>
                                    <li className='list-group-item'>C</li>
                                    <li className='list-group-item'>HTML5/CSS3</li>
                                    <li className='list-group-item'>SQL</li>
                                </ul>
                            </div>
                            <div className="col-3 card">
                                <h4>Frameworks/Platforms</h4>
                                <ul className='card-body list-group list-group-flush'>
                                    <li className='list-group-item'>React</li>
                                    <li className='list-group-item'>React Native</li>
                                    <li className='list-group-item'>Spring/Spring Boot</li>
                                    <li className='list-group-item'>Flask</li>
                                    <li className='list-group-item'>Node.js</li>
                                    <li className='list-group-item'>Firebase</li>
                                    <li className='list-group-item'>Kubernetes</li>
                                    <li className='list-group-item'>AWS</li>
                                </ul>
                            </div>
                            <div className="col-3 card">
                                <h4>Developer Tools</h4>
                                <ul className='card-body list-group list-group-flush'>
                                    <li className='list-group-item'>Docker</li>
                                    <li className='list-group-item'>Ansible</li>
                                    <li className='list-group-item'>Bash (Scripting)</li>
                                    <li className='list-group-item'>Prometheus/Grafana</li>
                                    <li className='list-group-item'>Git/Github/GitLab</li>
                                    <li className='list-group-item'>JetBrains Tools (IntelliJ, PyCharm, CLion)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='row mb-3'>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Career Goals and Interests</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text w-75 m-auto">
                            There are a few different disciplines/fields I have interests in for future positions: building web and mobile applications with web technologies and frameworks like React and React Native; <br/>
                            working with cloud technologies like Docker, Kubernetes and AWS to build cloud-native applications with Python and frameworks like Flask or Django; <br/>
                            or working in a DevOps role where I can use my experience in containerization with Docker/Kubernetes, and configuration management with Ansible to automate and streamline software development and deployment processes. <br/>
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;