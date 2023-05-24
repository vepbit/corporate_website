import { useRouter } from 'next/router'
import Link from 'next/link';

const Service = ({ data }) => {
    const router = useRouter()
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <Link href={'/service/' + data.id}>
                <a className="service">
                    <div className="service__header">
                        <img src={data.preview_image.url} alt="" className="service__img" width="86" height="86" />
                        <h3 className="service__title">{data.preview_title}</h3>
                    </div>

                    <div className="service__details">
                        <span className="service__separator"></span>
                        <p className="service__desc">{data.preview_desc}</p>
                    </div>
                    <div className="service__filter">
                    </div>
                    <div className="service__background">
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Service;