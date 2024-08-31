import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='header'>
            <section className='logo-header'>
                <div className='logo'>
                    <NavLink className={'logo-link'} to={"/"}>
                        <img src='./img/logo.png' alt='' />
                    </NavLink>
                </div>
                <div className='nav-bar-search'>
                    <div className='search flex-item'>
                        <NavLink to={'search'} className={'search-link'}>
                            <i className='fa fa-search'></i> Search
                        </NavLink>
                    </div>
                    <div className='carts flex-item'>
                        <NavLink to={'/carts'} className={'carts-link'}>
                            <i className='fa fa-cart-plus'></i> (1)
                        </NavLink>
                    </div>
                    <div className='login flex-item'>
                        <NavLink to={'/login'} className={'login-link'}>
                            Login
                        </NavLink>
                    </div>
                    <div className='register flex-item'>
                        <NavLink to={'/register'} className={'register-link'}>
                            Register
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className='menu'>
                <nav className='nav-menu'>
                    <NavLink className='mx-2' to={""} >Home</NavLink>
                    <NavLink className='mx-2' to={""} >Men</NavLink>
                    <NavLink className='mx-2' to={""} >woman</NavLink>
                    <NavLink className='mx-2' to={""} >Kid</NavLink>
                    <NavLink className='mx-2' to={""} >Sport</NavLink>


                </nav>
            </section>
        </div>
    )
}