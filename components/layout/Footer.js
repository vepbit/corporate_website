import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <img className="footer__logo" src="/logo_footer2.svg" alt="footer logo" width="50" height="48" />
                <ul className="footer-menu">
                    <li className="footer-menu__item">
                        <Link href="/">
                            <a >Home</a>
                        </Link>
                    </li>

                    <li className="footer-menu__item">
                        <Link href="/projects">
                            <a >Portfolio</a>
                        </Link>
                    </li>

                    <li className="footer-menu__item">
                        <Link href="/ourcompany">
                            <a >Our company</a>
                        </Link>
                    </li>

                    <li className="footer-menu__item">
                        <Link href="/services">
                            <a >Services</a>
                        </Link>
                    </li>

                    {/* <li className="footer-menu__item">
                        <Link href="/blog">
                            <a >Blog</a>
                        </Link>
                    </li> */}



                    <li className="footer-menu__item">
                        <Link href="/contact">
                            <a >Contact</a>
                        </Link>
                    </li>
                </ul>
                <p className="footer__copyright">All Rights Reserved</p>
            </footer>
        </>
    )
}