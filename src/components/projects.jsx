import React from 'react';

const Projects = () => {
    return (
        <div className='container'>
            <h1>Projects</h1>
            <div className="row my-3">
                <div className="col-6 d-flex align-items-stretch">
                    <section className="card w-100">
                        <div className="card-body">
                            <h4 className="card-title text-start">Barbell Buddy Workout Tracker</h4>
                            <h6 className='card-subtitle mb-2 text-muted text-start'>Winter 2025</h6>
                            <p className="card-text text-start">Cross-Platform Mobile Workout Tracker designed for weight training built on React Native.</p>
                            <h5>Technologies Used</h5>
                            <ul className="list-group list-group-flush">
                                <li className='list-group-item'>React Native</li>
                                <li className='list-group-item'>Firebase</li>
                                <li className='list-group-item'>FirestoreDB</li>
                                <li className='list-group-item'>JavaScript</li>
                                <li className='list-group-item'>HTML5/CSS3</li>
                                <li className='list-group-item'>Google Maps APIs</li>
                                <li className='list-group-item'>Gemini API</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="col-6 d-flex align-items-stretch">
                    <section className="card w-100">
                        <div className="card-body">
                            <h4 className="card-title text-start">Cloud Network Simulator</h4>
                            <h6 className='card-subtitle mb-2 text-muted text-start'>Winter 2025</h6>
                            <p className="card-text text-start">Cloud-Based Network Simulator built on Python and React using AWS Lambda.</p>
                            <h5>Technologies Used</h5>
                            <ul className="list-group list-group-flush">
                                <li className='list-group-item'>Python</li>
                                <li className='list-group-item'>React</li>
                                <li className='list-group-item'>JavaScript</li>
                                <li className='list-group-item'>AWS Lambda</li>
                                <li className='list-group-item'>AWS RDS(SQL)</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-6 d-flex align-items-stretch">
                    <section className="card w-100">
                        <div className="card-body">
                            <h4 className="card-title text-start">Dalhousie Social Network</h4>
                            <h6 className='card-subtitle mb-2 text-muted text-start'>Summer 2024</h6>
                            <p className="card-text text-start">Full Stack Social Networking application built on React and Spring.</p>
                            <h5>Technologies Used</h5>
                            <ul className="list-group list-group-flush">
                                <li className='list-group-item'>React</li>
                                <li className='list-group-item'>Spring/Spring Boot</li>
                                <li className='list-group-item'>JavaScript</li>
                                <li className='list-group-item'>Java</li>
                                <li className='list-group-item'>MySQL</li>
                                <li className='list-group-item'>HTML5/CSS3</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="col-6 d-flex align-items-stretch">
                    <section className="card w-100">
                        <div className="card-body">
                            <h4 className="card-title text-start">Network Switch Monitor</h4>
                            <h6 className='card-subtitle mb-2 text-muted text-start'>Winter 2024</h6>
                            <p className="card-text text-start">Real-time Network Switch Interface Monitor built on Python with Flask and Ansible.</p>
                            <h5>Technologies Used</h5>
                            <ul className="list-group list-group-flush">
                                <li className='list-group-item'>Flask</li>
                                <li className='list-group-item'>Python</li>
                                <li className='list-group-item'>Ansible</li>
                                <li className='list-group-item'>JavaScript</li>
                                <li className='list-group-item'>NGINX</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Projects;