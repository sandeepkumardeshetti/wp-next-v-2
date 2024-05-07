import React from 'react'
import './Header.css'

import Link from 'next/link'

import { getMainMenu } from '@/app/lib/graphQlqueries/menuQueries/getMainMenu'
import { GiHamburgerMenu } from "react-icons/gi";

import Image from 'next/image'






async function getMainMenuItemsFunc() {
    const MainMenu = await getMainMenu();
    return MainMenu;
}


const Header = async () => {
    const MainmenuRes = await getMainMenuItemsFunc();


    return (
        <header id="mastheader" className="site-header">
            <div className="navbar-layout-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <a className="navbar-brand md d-none d-lg-block" href="/">
                                <Image width={200} height={100}  src="http://localhost/wpicms/wp-content/uploads/2024/02/logo-1.svg" alt="logo" className="logo md" />
                            </a>
                        </div>
                        <div className="col-lg-10">
                            <div className="top-header-sec">
                                <div className="row justify-content-end">
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <Image width={20} height={20} src="https://alfaplast.gclientdemo.com/wp-content/uploads/2024/01/phone.svg" alt="image-not-found" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h3 className="mb-2 font-size-16 ">Call Us</h3>
                                                <p className="mb-0 font-size-14 "><a className="font-size-14 " href="tel:+91-9823099834">+91-9876543210</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <Image width={20} height={20}  src="https://alfaplast.gclientdemo.com/wp-content/uploads/2024/01/message-Icon.svg" alt="image-not-found" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h3 className="mb-2 font-size-16 ">Mail Us</h3>
                                                <p className="mb-0 font-size-14 "><a className="font-size-14 font-family-ProductSans-regular text-black-primary" href="mailto:info@example.com">info@example.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <Image width={20} height={20} src="https://alfaplast.gclientdemo.com/wp-content/uploads/2024/01/location-Icon.svg" alt="image-not-found" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h3 className="mb-2 font-size-16 ">Location</h3>
                                                <p className="mb-0 font-size-14"><a className="font-size-14 font-family-ProductSans-regular text-black-primary" href="https://maps.app.goo.gl/SjYWBZMqJ6GQAGxM6" target="_blank">Pitamber Heights, 2nd floor, Sheela Vihar Colony, Erandwane, Pune, Maharashtra 411038</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav id="nav-main" className="navbar navbar-expand-lg">
                                <div className="container">
                                    {/* <!-- Navbar Brand for mobile--> */}
                                    <a className="navbar-brand xs d-lg-none" href="/">
                                        <Image width={200} height={100} src="http://localhost/wpicms/wp-content/uploads/2024/02/logo-1.svg" alt="logo" className="logo xs" />
                                    </a>
                                    {/* <!-- Offcanvas Navbar --> */}
                                    <div className="offcanvas offcanvas-end"  id="offcanvas-navbar">
                                        <div className="offcanvas-header">
                                            <span className="h5 offcanvas-title">Menu</span>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            {/* <!-- Bootstrap 5 Nav Walker Main Menu --> */}
                                            <ul id="gswptheme-navbar" className="navbar-nav ms-auto ">
                                                {
                                                    MainmenuRes.map((menuItem, index) => {
                                                        if (menuItem.node.childItems.edges && Array.isArray(menuItem.node.childItems.edges) && menuItem.node.childItems.edges.length > 0) {
                                                            return(
                                                                <li id="menu-item-761" key={menuItem.node.id} className="menu-item menu-item-has-children dropdown nav-item">
                                                                <a href="#" className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Industries We Serve</a>
                                                                <ul className="dropdown-menu  depth_0">
                                                                    {
                                                                     menuItem.node.childItems.edges.map((dropdoenItem) => {
                                                                        return (
                                                                        <li  className="menu-item  nav-item " key={dropdoenItem.node.id}>
                                                                            <Link href={dropdoenItem.node.path} className={`dropdown-item ${dropdoenItem.node.label}`}>{dropdoenItem.node.label}</Link>
                                                                        </li>
                                                                        )
                                                                     })   
                                                                    }
                                                                    
                                                                   
                                                                </ul>
                                                            </li>
                                                            )
                                                           
                                                        }else{
                                                        return (

                                                            <li  className="menu-item  nav-item " key={menuItem.node.id}>
                                                                <Link href={menuItem.node.path} className={`nav-link ${menuItem.node.label}`}>{menuItem.node.label}</Link>

                                                            </li>
                                                        )
                                                    }
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="header-actions d-flex align-items-center">
                                        {/* <!-- Top Nav Widget --> */}


                                        {/* <!-- Searchform large --> */}

                                        {/* <!-- Search toggler mobile --> */}
                                        {/* <!-- Navbar Toggler --> */}
                                        <button className="btn btn-outline-secondary d-lg-none ms-1 ms-md-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar"><p><GiHamburgerMenu /></p><span className="visually-hidden-focusable">Menu</span></button>
                                    </div>
                                    {/* <!-- .header-actions --> */}
                                </div>

                            </nav>
                            {/* <!-- .navbar --> */}
                        </div>
                    </div>

                    {/* <!-- Top Nav Search Mobile Collapse --> */}
                </div>
                {/* <!-- container -->
                <!-- Offcanvas User and Cart --> */}
            </div>
        </header>
    )
}

export default Header
