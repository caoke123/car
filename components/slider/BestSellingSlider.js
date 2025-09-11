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

export default function BestSellingSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper new-cars mybest-selling">
                <div className="swiper-wrapper">
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>

                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car14.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                <div className="overlay-limit">
                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                    <p>2 more photos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bullet-hover-listing">
                                            <div className="bl-item active" />
                                            <div className="bl-item" />
                                            <div className="bl-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
                            <div className="description">
                                <ul>
                                    <li className="listing-information fuel">
                                        <i className="icon-gasoline-pump-1" />
                                        <div className="inner">
                                            <span>Fuel type</span>
                                            <p>Petrol</p>
                                        </div>
                                    </li>
                                    <li className="listing-information size-engine">
                                        <i className="icon-Group1" />
                                        <div className="inner">
                                            <span>Mileage</span>
                                            <p>90 k.m</p>
                                        </div>
                                    </li>
                                    <li className="listing-information transmission">
                                        <i className="icon-gearbox-1" />
                                        <div className="inner">
                                            <span>Transmission</span>
                                            <p>Auto</p>
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
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                <div className="overlay-limit">
                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                    <p>2 more photos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bullet-hover-listing">
                                            <div className="bl-item active" />
                                            <div className="bl-item" />
                                            <div className="bl-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
                            <div className="description">
                                <ul>
                                    <li className="listing-information fuel">
                                        <i className="icon-gasoline-pump-1" />
                                        <div className="inner">
                                            <span>Fuel type</span>
                                            <p>Petrol</p>
                                        </div>
                                    </li>
                                    <li className="listing-information size-engine">
                                        <i className="icon-Group1" />
                                        <div className="inner">
                                            <span>Mileage</span>
                                            <p>90 k.m</p>
                                        </div>
                                    </li>
                                    <li className="listing-information transmission">
                                        <i className="icon-gearbox-1" />
                                        <div className="inner">
                                            <span>Transmission</span>
                                            <p>Auto</p>
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
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car13.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                <div className="overlay-limit">
                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                    <p>2 more photos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bullet-hover-listing">
                                            <div className="bl-item active" />
                                            <div className="bl-item" />
                                            <div className="bl-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
                            <div className="description">
                                <ul>
                                    <li className="listing-information fuel">
                                        <i className="icon-gasoline-pump-1" />
                                        <div className="inner">
                                            <span>Fuel type</span>
                                            <p>Petrol</p>
                                        </div>
                                    </li>
                                    <li className="listing-information size-engine">
                                        <i className="icon-Group1" />
                                        <div className="inner">
                                            <span>Mileage</span>
                                            <p>90 k.m</p>
                                        </div>
                                    </li>
                                    <li className="listing-information transmission">
                                        <i className="icon-gearbox-1" />
                                        <div className="inner">
                                            <span>Transmission</span>
                                            <p>Auto</p>
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
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car14.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                <div className="overlay-limit">
                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                    <p>2 more photos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bullet-hover-listing">
                                            <div className="bl-item active" />
                                            <div className="bl-item" />
                                            <div className="bl-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
                            <div className="description">
                                <ul>
                                    <li className="listing-information fuel">
                                        <i className="icon-gasoline-pump-1" />
                                        <div className="inner">
                                            <span>Fuel type</span>
                                            <p>Petrol</p>
                                        </div>
                                    </li>
                                    <li className="listing-information size-engine">
                                        <i className="icon-Group1" />
                                        <div className="inner">
                                            <span>Mileage</span>
                                            <p>90 k.m</p>
                                        </div>
                                    </li>
                                    <li className="listing-information transmission">
                                        <i className="icon-gearbox-1" />
                                        <div className="inner">
                                            <span>Transmission</span>
                                            <p>Auto</p>
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
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                <div className="overlay-limit">
                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                    <p>2 more photos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bullet-hover-listing">
                                            <div className="bl-item active" />
                                            <div className="bl-item" />
                                            <div className="bl-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
                            <div className="description">
                                <ul>
                                    <li className="listing-information fuel">
                                        <i className="icon-gasoline-pump-1" />
                                        <div className="inner">
                                            <span>Fuel type</span>
                                            <p>Petrol</p>
                                        </div>
                                    </li>
                                    <li className="listing-information size-engine">
                                        <i className="icon-Group1" />
                                        <div className="inner">
                                            <span>Mileage</span>
                                            <p>90 k.m</p>
                                        </div>
                                    </li>
                                    <li className="listing-information transmission">
                                        <i className="icon-gearbox-1" />
                                        <div className="inner">
                                            <span>Transmission</span>
                                            <p>Auto</p>
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
                    <SwiperSlide className="tf-car-service swiper-slide">
                        <Link href="/listing-details" className="image">
                            <div className="stm-badge-top">
                                <div className="feature">
                                    <span>Featured</span>
                                </div>
                                <span>2023</span>
                            </div>
                            <div className="listing-images">
                                <div className="hover-listing-image">
                                    <div className="wrap-hover-listing">
                                        <div className="listing-item active" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car13.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                            </div>
                                        </div>
                                        <div className="listing-item view-gallery" title="Lexus LC Hybrid 2024">
                                            <div className="images">
                                                <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                <div className="overlay-limit">
                                                    <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                    <p>2 more photos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bullet-hover-listing">
                                            <div className="bl-item active" />
                                            <div className="bl-item" />
                                            <div className="bl-item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="content">
                            <span className="sub-title">Mini Cooper 3 Similar</span>
                            <h6 className="title"><Link href="/#">Chevrolet Suburban 2021 mo</Link></h6>
                            <span className="price">$27,000</span>
                            <div className="description">
                                <ul>
                                    <li className="listing-information fuel">
                                        <i className="icon-gasoline-pump-1" />
                                        <div className="inner">
                                            <span>Fuel type</span>
                                            <p>Petrol</p>
                                        </div>
                                    </li>
                                    <li className="listing-information size-engine">
                                        <i className="icon-Group1" />
                                        <div className="inner">
                                            <span>Mileage</span>
                                            <p>90 k.m</p>
                                        </div>
                                    </li>
                                    <li className="listing-information transmission">
                                        <i className="icon-gearbox-1" />
                                        <div className="inner">
                                            <span>Transmission</span>
                                            <p>Auto</p>
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
                </div>
                <div className="swiper-pagination" />
            </Swiper>
        </>
    )
}
