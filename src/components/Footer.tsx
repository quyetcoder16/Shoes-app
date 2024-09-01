import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {

}
export default function Footer(prop: Props) {
    return (
        <footer className='footer container-fluid w-100'>
            <div className='row justify-content-around'>
                <div className='col-3 p-0' style={{ transform: 'translateX(30%)' }}>
                    <h3>GET HELP</h3>
                    <nav className='d-flex flex-column'>
                        <NavLink to="">Home</NavLink>
                        <NavLink to="">Nike</NavLink>
                        <NavLink to="">Adidas</NavLink>
                        <NavLink to="">Contact</NavLink>
                    </nav>
                </div>
                <div className='col-3 p-0' style={{ transform: 'translateX(30%)' }}>
                    <h3>GET HELP</h3>
                    <nav className='d-flex flex-column'>
                        <NavLink to="">Home</NavLink>
                        <NavLink to="">Nike</NavLink>
                        <NavLink to="">Adidas</NavLink>
                        <NavLink to="">Contact</NavLink>
                    </nav>
                </div>
                <div className='col-3 p-0' style={{ transform: 'translateX(30%)' }}>
                    <h3>GET HELP</h3>
                    <nav className='d-flex flex-column '>
                        <NavLink to="">Home</NavLink>
                        <NavLink to="">Nike</NavLink>
                        <NavLink to="">Adidas</NavLink>
                        <NavLink to="">Contact</NavLink>
                    </nav>
                </div>
            </div>
            <div className='row bg-dark text-white text-center'>
                <footer>© 2022  All Rights Reserved | Design Theme by .....</footer>
            </div>
        </footer>
    )
}
