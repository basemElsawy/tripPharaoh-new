import React from 'react'
import './footer.css'
import Logo from './image/Logo.png'
const footer = () => {
    return (
        <div className='bg-footer-content'>
            <div className="logo-about">
                <img src={Logo} width='350' height='230' alt="" />
                <p>Trip pharaoh is a genuine place for genuine landmarks in egypt if you want to be updated with all the new trips and fun in egypt make sure you follow us on social media.</p>
                <ul className='icons'>
                    <li> <a href=""> <i class="fa-brands fa-facebook"></i></a>  </li>
                    <li> <a href=""> <i class="fa-brands fa-square-instagram"></i> </a>  </li>
                    <li> <a href=""> <i class="fa-brands fa-square-twitter"></i></a> </li>
                </ul>
            </div>
            <div className="services-contact">
                <table>
                    <tr><th>Services</th></tr>
                    <tr><td> <a href="">About us</a> </td></tr>
                    <tr><td> <a href="">Our services</a> </td></tr>
                    <tr><td> <a href="">Top Reviewed</a> </td></tr>
                </table>
                <table>
                    <tr><th>Contact</th></tr>
                    <tr><td>TripPharaoh29@gmail.com</td></tr>
                    <tr><td>Fax: 123345452</td></tr>
                    <tr><td>Number: +20103433532</td></tr>
                </table>
            </div>
            <div className='rights'>
                <div className='regs'>
                    <span><a href="">Privacy </a> </span>
                    <div className='vert'></div>
                    <span> <a href="">Terms of Service</a> </span>
                </div>
                <div>
                    <span>Trip Pharaoh © 2022 All Right Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default footer
