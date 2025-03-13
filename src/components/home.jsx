import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className="row">
                <h1>Travis Jewers</h1>
                <p className='lead'>Hello there! My name is Travis, I am a fourth year Bachelor of Computer Science (and Co-op) student at Dalhousie University. <br/>
                On this website you will find a digital portfolio of my academic and professional experience. 
                </p>
            </div>
            <div className="row">
                <div className="col-6">
                    <section className='bg-light p-5 border'>
                        <h6 className='mb-5 lead'>On the About page you can find information about my education, work experience, skills and overall career goals.</h6>
                        <Link to="/about">
                            <button className='custom-btn'>About</button>
                        </Link>
                    </section>
                </div>
                <div className="col-6">
                    <section className='bg-light p-5 border'>
                        <h6 className='mb-5 lead'>On the Projects page you can find information about my past/current projects and technologies used in each project.</h6>
                        <Link to="projects">
                            <button className='custom-btn'>Projects</button>
                        </Link>
                    </section>
                </div>
            </div>

        </div>
    );
}

export default Home;