import { useRouter } from 'next/router';
import Link from 'next/link';

const PortfolioProject = ({ data }) => {
    const router = useRouter();

    return (
        <>
            <div className="col-12  col-md-6 col-lg-4">
                <div className="full-portfolio-item" >
                    <div className="full-portfolio-item__content" >
                        <div className="full-portfolio-item__description-inner">
                            <span className="full-portfolio-item__title" dangerouslySetInnerHTML={{ __html: data.projects_page_title }}></span>
                            <span className="full-portfolio-item__description" dangerouslySetInnerHTML={{ __html: data.projects_page_desc }}></span>
                        </div>
                        <ul className="full-portfolio-item__list" dangerouslySetInnerHTML={{ __html: data.projects_page_list }}></ul>

                        <Link href={`project/${data.id}`}>
                            <a className="full-portfolio-item__details">Get to know</a>
                        </Link>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .full-portfolio-item {
                    background-image: url(${data.projects_page_image.url})
                }
            `}</style>
        </>
    )
}

export default PortfolioProject;