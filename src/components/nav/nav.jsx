import React, { useEffect, useState } from 'react'
import './nav.css'
function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return() => {
            window.removeEventListener('scroll')
        }
    }, [])

    function netflix(){
        window.location.reload()
    }
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            onClick={netflix}
            className='nav__logo'
            src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'
            alt='netflix logo'
        />
        <a className='nav__portfolio' href='https://terenciomartins.netlify.app/' target={'_blank'} rel="noreferrer"> Portfólio </a>
        <img
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='netflix logo'
            />
    </div>
  )
}

export default Nav;