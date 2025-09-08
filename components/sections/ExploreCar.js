import Link from 'next/link'
import { carImages } from '../../util/carImages'

export default function ExploreCar() {
    return (
        <>
            <div className="widget-explore-car">
                <div className="themesflat-container">
                    <div className="explore-car-wrap">
                        <div className="header-section-main mb-46">
                            <h2 className="title-section-main wow fadeInUp">Explore Our cars</h2>
                            <div className="btn-read-more wow fadeInUp">
                                <Link className="more-link" href="/#">
                                    <span>View More</span>
                                    <i className="icon-arrow-up-right2" />
                                </Link>
                            </div>
                        </div>
                        <div className="box-car-wrap">
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="https://images.unsplash.com/photo-1606220838315-056192d5e927?w=200&h=150&fit=crop" alt="Sedan" />
                                </div>
                                <span>Sedan</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=200&h=150&fit=crop" alt="SUV" />
                                </div>
                                <span>SUV</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&h=150&fit=crop" alt="Cabriolet" />
                                </div>
                                <span>Cabriolet</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&h=150&fit=crop" alt="Pickup" />
                                </div>
                                <span>Pickup</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=200&h=150&fit=crop" alt="Supercar" />
                                </div>
                                <span>Supercar</span>
                            </Link>
                            <Link href="/#" className="box-car-item">
                                <div className="image-car">
                                    <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=200&h=150&fit=crop" alt="Minivans" />
                                </div>
                                <span>Minivans</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
