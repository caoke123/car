'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    observer: true,
    roundLengths: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
}

// Car data
const carData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
        title: "BMW 3 Series 2024",
        subtitle: "Luxury Sedan",
        price: "$45,000",
        year: "2024",
        fuel: "Petrol",
        mileage: "25k km",
        transmission: "Auto"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        title: "Mercedes-Benz C-Class",
        subtitle: "Executive Car",
        price: "$52,000",
        year: "2024",
        fuel: "Hybrid",
        mileage: "15k km",
        transmission: "Auto"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        title: "Audi A4 2024",
        subtitle: "Premium Sedan",
        price: "$48,000",
        year: "2024",
        fuel: "Petrol",
        mileage: "20k km",
        transmission: "Auto"
    }
];

export default function BestSellingSliderDemo() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper tf-sw-mobile">
                {carData.map((car) => (
                    <SwiperSlide key={car.id} className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                </div>
                                <span>{car.year}</span>
                            </div>
                            <div className="listing-images">
                                <img src={car.image} alt={car.title} />
                            </div>
                        </Link>
                        <div className="content">
                            <div className="text-address">
                                <p className="sub-title">{car.subtitle}</p>
                            </div>
                            <h5 className="link-style-1">
                                <Link href="/listing-details">{car.title}</Link>
                            </h5>
                            <div className="money fs-20 fw-5 lh-25 text-color-3">{car.price}</div>
                            <div className="description">
                                <ul>
                                    <li className="listing-information fuel">
                                        <i className="icon-gasoline-pump-1" />
                                        <div className="inner">
                                            <span>Fuel type</span>
                                            <p>{car.fuel}</p>
                                        </div>
                                    </li>
                                    <li className="listing-information size-engine">
                                        <i className="icon-speedometer" />
                                        <div className="inner">
                                            <span>Mileage</span>
                                            <p>{car.mileage}</p>
                                        </div>
                                    </li>
                                    <li className="listing-information transmission">
                                        <i className="icon-gearbox" />
                                        <div className="inner">
                                            <span>Transmission</span>
                                            <p>{car.transmission}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom-btn-wrap">
                                <div className="btn-read-more">
                                    <Link className="more-link" href="/listing-details">
                                        <span>View details</span>
                                        <i className="icon-arrow-right2" />
                                    </Link>
                                </div>
                                <div className="btn-group">
                                    <Link href="/#" className="icon-service">
                                        <i className="icon-heart-1-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}