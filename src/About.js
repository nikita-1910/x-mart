import React, { useContext } from 'react';
import "./About.css";

const About = () => {
    return (
        <>
            <div className='outer-box'>
                <div className='model'>
                    <div className='cardd'>
                        <img className="imagee" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PlOhxCcbtsifptVXKiSNO0nJr-JtVaEEYA&usqp=CAU' alt='simple image'></img>
                        
                    </div>
                    <div className='description'>
                        <h3 className='about-us-heading'>ABOUT US</h3>
                        <p className='about-us-description'>Welcome to X-Mart, where you can find <strong className='boldd'>"Tech Essentials for Every Lifestyle"</strong>. We take pride in offering high-quality products that are carefully curated to meet the diverse needs of our customers. Our commitment to quality is unwavering, ensuring that every item you purchase from us is a testament to our dedication.</p>
                    </div>

                </div>
            </div>
        </>

    )
}

export default About