import { useEffect, useState } from 'react'

import Link from 'next/link';

import { useRouter } from 'next/router'

const Header = () => {


    const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

    const [activeTheme, setActiveTheme] = useState('white');


    const router = useRouter();

    const mylangByRouter = router.route;

    //console.log(mylangByRouter);



    useEffect(() => {
        if (localStorage.getItem('theme-style') === null) {
            localStorage.setItem('theme-style', 'white');
        }
        setActiveTheme(localStorage.getItem('theme-style'));

        //console.log(myStoreLang);
    });


    useEffect(() => {
        // Always do navigations after the first render
        // router.push('/?tag=php')
        //console.log(router.query);
    }, [])



    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <header className="header">
                            <Link href="/">
                                <a className="header__link">
                                    <img src="/logo_header.svg" alt="" className="header__logo" width="93" height="29" />
                                </a>
                            </Link>

                            <div className="switch-theme">
                                <ul>
                                    <li className={activeTheme === "white" ? 'active' : ''}>
                                        <a
                                            onClick={() => {
                                                localStorage.setItem('theme-style', 'white');
                                                setActiveTheme('white');
                                            }}
                                        >Light</a>
                                    </li>
                                    <li className={activeTheme === "dark" ? 'active' : ''}>
                                        <a
                                            onClick={() => {
                                                localStorage.setItem('theme-style', 'dark');
                                                setActiveTheme('dark');
                                            }}
                                        >Dark</a>
                                    </li>

                                </ul>
                            </div>
                            <div id="menu-opener" className="menu-opener"
                                onClick={() => {
                                    setVisibleMobileMenu(true);
                                }}

                            >
                                <span className="menu-opener__line"></span>
                                <span className="menu-opener__line"></span>
                                <span className="menu-opener__line"></span>
                            </div>

                        </header>
                    </div>
                </div>
            </div>
            <div className={"header-modal-menu " + (visibleMobileMenu === true ? 'active' : '')}

                onClick={() => {
                    setVisibleMobileMenu(false);
                }}

            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="header-modal-menu__list">

                                <li className={"header-modal-menu__item " + (mylangByRouter === '/' ? 'active' : '')}>
                                    <Link href="/">
                                        <a className="header-modal-menu__link"
                                            onClick={() => {
                                                //setVisibleMobileMenu(false);
                                            }}
                                        > Home</a>
                                    </Link>
                                </li>

                                <li className={"header-modal-menu__item " + (mylangByRouter === '/projects' ? 'active' : '')}>
                                    <Link href="/projects">
                                        <a className="header-modal-menu__link"
                                            onClick={() => {
                                                //setVisibleMobileMenu(false);
                                            }}
                                        > Portfolio</a>
                                    </Link>
                                </li>

                                <li className={"header-modal-menu__item " + (mylangByRouter === '/ourcompany' ? 'active' : '')}>
                                    <Link href="/ourcompany">
                                        <a className="header-modal-menu__link">Our company</a>
                                    </Link>
                                </li>

                                <li className={"header-modal-menu__item " + (mylangByRouter === '/services' ? 'active' : '')}>
                                    <Link href="/services">
                                        <a className="header-modal-menu__link"
                                            onClick={() => {
                                                //setVisibleMobileMenu(false);
                                            }}
                                        > Services</a>
                                    </Link>
                                </li>

                                {/* <li className={"header-modal-menu__item "+ (mylangByRouter=== '/blog' ? 'active': '')}>
                                <Link href="/blog">
                                    <a  className="header-modal-menu__link">Blog</a>
                                </Link>
                            </li> */}

                                <li className={"header-modal-menu__item " + (mylangByRouter === '/contact' ? 'active' : '')}>
                                    <Link href="/contact">
                                        <a className="header-modal-menu__link"
                                            onClick={() => {
                                                //setVisibleMobileMenu(false);
                                            }}
                                        > Contact</a>
                                    </Link>
                                </li>



                                <span id="menu-close" className="close-button"

                                    onClick={() => {
                                        setVisibleMobileMenu(false);
                                    }}

                                ></span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;