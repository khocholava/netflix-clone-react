import React, {useEffect, useState} from 'react';
import './Nav.css'

export const Nav = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
               handleShow(true)
            } else {
                handleShow(false)
            }
             return () => {
                window.removeEventListener('scroll')
             }
        })
    })

    return (
        <>
            <div className={`nav ${show && 'nav-black'}`}>
                <img
                    className='nav-logo'
                    src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                    alt="Netflix logo"
                />
                <img
                    className='nav-avatar'
                    src="https://occ-0-3467-1490.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbqwY6v7TE-IjaCYdyvZM2rMTG7P3RXPLtr0xXkZSS052pUSbkPq02dONLLciBX4pdtWnOZuKa5ptaqSwFG-mK8.png?r=f71"
                    alt="Avatar"
                />
            </div>
        </>
    )
}