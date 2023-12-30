import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"
import "./Services.css";

const Services = () => {
    return (
        <>
            <div className='services-container'>
                <div className="container">
                    <div className='service-div'>
                        <TbTruckDelivery className='icon' />
                        <p className='abc'>Super Fast and Free Delivery</p>
                    </div>
                    <div className='service-div'>
                        <MdSecurity className='icon' />
                        <p className='abc'>Non-contact Shipping</p>
                    </div>
                    <div className='service-div'>
                        <GiReceiveMoney className='icon' />
                        <p className='abc'>Money-back Guaranteed</p>
                    </div>
                    <div className='service-div'>
                        <RiSecurePaymentLine className='icon' />
                        <p className='abc'>Super Secure Payment System</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services