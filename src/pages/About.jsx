import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur officiis, 
                        unde laborum at magni repellendus optio tempora iste a, 
                        nulla, quae harum perferendis accusamus in! Praesentium, maxime? Ducimus, quo!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Id mollitia consequatur accusantium distinctio illo voluptatibus neque doloremque eos provident maxime ad sequi, 
                        repudiandae voluptatum atque, nam magni similique aut delectus!</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div> 

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, voluptas ratione provident minima vitae quis ab, 
                    facere dolorum expedita non molestiae sunt nobis mollitia ipsum voluptatum? Ut eos, 
                    voluptate laboriosam consectetur asperiores reiciendis nulla voluptatum ex. 
                    Laudantium est pariatur blanditiis!</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>


            <div className='my-5' >
                <Reviews />
            </div>

        </div>
    )
}

export default About;