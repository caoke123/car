
import Link from 'next/link'

export default function CarBannerV1() {
    return (
        <>
            <div className="widget-car-banner pt-60">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-car-banner car-bg-red">
                                <video 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                    className="hero-video"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        zIndex: -1
                                    }}
                                >
                                    <source src="/assets/images/hero1.mp4" type="video/mp4" />
                                </video>
                                <div className="group-content">
                                    <h3 className="heading">Are you looking for buy a new car</h3>
                                    <div className="btn-read-more">
                                        <Link className="more-link" href="/#">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="group-image">
                                    <div className="shape" />
                                    <img src="./assets/images/banner/c2.png" alt="car01" className="car" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tf-car-banner car-bg-black">
                                <video 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                    className="hero-video"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        zIndex: -1
                                    }}
                                >
                                    <source src="/assets/images/hero1.mp4" type="video/mp4" />
                                </video>
                                <div className="group-content">
                                    <h3 className="heading">Are you looking for buy a new car</h3>
                                    <div className="btn-read-more">
                                        <Link className="more-link" href="/#">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="group-image">
                                    <div className="shape1" />
                                    <img src="./assets/images/banner/c1.png" alt="car01" className="car" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
