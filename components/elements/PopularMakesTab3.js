'use client'
import Link from "next/link"
import { useState } from "react"
export default function PopularMakesTab3() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="header-section tab-car-service">
                <div className="heading-section">
                    <span className="sub-title mb-6 wow fadeInUp">Trusted Car DeAler Service</span>
                    <h2 className="title wow fadeInUp">Explore all Vehicles</h2>
                </div>
                <ul className="nav nav-pills justify-content-end" id="pills-tab-service" role="tablist">
                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                        <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                            All Status</button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                        <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>New Cars</button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                        <button className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Used Cars</button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                    {/* Widget Car Service */}
                    <div className="car-list-item">
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car1.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details" /><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                <h6 className="title"><Link href="/listing-details" /><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car3.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details" /><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car4.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details" /><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details" /><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car6.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Widget Car Service */}
                </div>
                <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                    {/* Widget Car Service */}
                    <div className="car-list-item">
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car1.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car3.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car4.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car6.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Widget Car Service */}
                </div>
                <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                    {/* Widget Car Service */}
                    <div className="car-list-item">
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car1.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car3.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car4.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car5.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
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
                                                    <img src="./assets/images/car-list/car6.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/listing-details">Chevrolet Suburban 2021 mo</Link></h6>
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
                                        <a className="more-link" href="/listing-details">
                                            <span>View details</span>
                                            <i className="icon-arrow-right2" />
                                        </a>
                                    </div>
                                    <div className="btn-group">
                                        <a href="#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </a>
                                        <a href="#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Widget Car Service */}
                </div>
            </div>

        </>
    )
}
