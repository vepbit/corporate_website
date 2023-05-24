import Link from 'next/link';
const Breadcrumbs = ({ title, supbreadcrumb }) => {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <Link href="/">
                        <a className="breadcrumbs__link"> Home</a>
                    </Link>
                </li>

                {supbreadcrumb != null && supbreadcrumb != ""

                    ?

                    <li className="breadcrumbs__item">
                        <Link href="/projects">
                            <a className="breadcrumbs__link">{supbreadcrumb}</a>
                        </Link>
                    </li>
                    :
                    ''
                }


                <li className="breadcrumbs__item">
                    <a href="#" className="breadcrumbs__link">{title}</a>
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumbs;