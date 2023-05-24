import Link from 'next/link';
const Project = ({ data, index }) => {
    let random_class = Math.random().toString(36).slice(5);

    let class_reverse = (index === 1 ? "reverse " : "");
    let class_reverse_style = (index === 1 ? ".reverse " : "");
    return (
        <>
            <Link href={`project/${data.id}`}>
                <a className={"our-work-item " + (class_reverse) + random_class}>
                    <div className="our-work-item__box main_page_image_big" ></div>
                    <div className="our-work-item__box main_page_image_small"></div>
                    <div className="our-work-item__box our-work-item__content" dangerouslySetInnerHTML={{ __html: data.main_page_desc }}>
                    </div>
                    <div className="our-work-item__box our-work-item__content" dangerouslySetInnerHTML={{ __html: data.main_page_image_list }}>

                    </div>
                    <div className="our-work-item__box main_page_image_small-last"></div>
                </a>
            </Link>
            <style global>{`
                    .${random_class}.our-work-item${class_reverse_style} .main_page_image_big {
                        background-image: url(${data.main_page_image_big.url})
                    }
                    .${random_class}.our-work-item .main_page_image_small{
                        background-image: url(${data.main_page_image_small[0].url})
                    }
                    .${random_class}.our-work-item .main_page_image_small-last{
                        background-image: url(${data.main_page_image_small[1].url})
                    }
                `}
            </style>
        </>
    )
}

export default Project;