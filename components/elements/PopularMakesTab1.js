'use client'
import Link from 'next/link'
import { useState } from "react"


export default function PopularMakesTab1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <ul className="nav nav-pills tab-car-service-v2 justify-content-center mb-30" id="pills-tab-service-v2" role="tablist">
                <li className="nav-item" onClick={() => handleOnClick(1)}>
                    <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}> Cadilliac</button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                    <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Audi</button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(3)}>
                    <button className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Bmw</button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(4)}>
                    <button className={activeIndex == 4 ? "nav-link active" : "nav-link"}>Mercedez</button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(5)}>
                    <button className={activeIndex == 5 ? "nav-link active" : "nav-link"}>Haundai </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent-v2">
                <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <div className="car-list-item">
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <div className="image">
                                <div className="stm-badge-top">
                                    <div className="feature">
                                        <span>Featured</span>
                                    </div>
                                    <span>2023</span>
                                </div>
                                <div className="listing-images">
                                    <div className="hover-listing-image">
                                        <div className="wrap-hover-listing">
                                            <div className="listing-item " title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item view-gallery active" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                    <div className="overlay-limit">
                                                        <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                        <p>2 more photos</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bullet-hover-listing">
                                                <div className="bl-item" />
                                                <div className="bl-item" />
                                                <div className="bl-item active" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <span className="sub-title">Mini Cooper 3 Similar</span>
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car10.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <div className="car-list-item">
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <div className="image">
                                <div className="stm-badge-top">
                                    <div className="feature">
                                        <span>Featured</span>
                                    </div>
                                    <span>2023</span>
                                </div>
                                <div className="listing-images">
                                    <div className="hover-listing-image">
                                        <div className="wrap-hover-listing">
                                            <div className="listing-item " title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item view-gallery active" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                    <div className="overlay-limit">
                                                        <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                        <p>2 more photos</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bullet-hover-listing">
                                                <div className="bl-item" />
                                                <div className="bl-item" />
                                                <div className="bl-item active" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <span className="sub-title">Mini Cooper 3 Similar</span>
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car10.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <div className="car-list-item">
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <div className="image">
                                <div className="stm-badge-top">
                                    <div className="feature">
                                        <span>Featured</span>
                                    </div>
                                    <span>2023</span>
                                </div>
                                <div className="listing-images">
                                    <div className="hover-listing-image">
                                        <div className="wrap-hover-listing">
                                            <div className="listing-item " title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item view-gallery active" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                    <div className="overlay-limit">
                                                        <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                        <p>2 more photos</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bullet-hover-listing">
                                                <div className="bl-item" />
                                                <div className="bl-item" />
                                                <div className="bl-item active" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <span className="sub-title">Mini Cooper 3 Similar</span>
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car10.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <div className="car-list-item">
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <div className="image">
                                <div className="stm-badge-top">
                                    <div className="feature">
                                        <span>Featured</span>
                                    </div>
                                    <span>2023</span>
                                </div>
                                <div className="listing-images">
                                    <div className="hover-listing-image">
                                        <div className="wrap-hover-listing">
                                            <div className="listing-item " title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item view-gallery active" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                    <div className="overlay-limit">
                                                        <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                        <p>2 more photos</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bullet-hover-listing">
                                                <div className="bl-item" />
                                                <div className="bl-item" />
                                                <div className="bl-item active" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <span className="sub-title">Mini Cooper 3 Similar</span>
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car10.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <div className="car-list-item">
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car8.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <div className="image">
                                <div className="stm-badge-top">
                                    <div className="feature">
                                        <span>Featured</span>
                                    </div>
                                    <span>2023</span>
                                </div>
                                <div className="listing-images">
                                    <div className="hover-listing-image">
                                        <div className="wrap-hover-listing">
                                            <div className="listing-item " title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car2.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                </div>
                                            </div>
                                            <div className="listing-item view-gallery active" title="Lexus LC Hybrid 2024">
                                                <div className="images">
                                                    <img src="./assets/images/car-list/car9.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                    <div className="overlay-limit">
                                                        <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                        <p>2 more photos</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bullet-hover-listing">
                                                <div className="bl-item" />
                                                <div className="bl-item" />
                                                <div className="bl-item active" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <span className="sub-title">Mini Cooper 3 Similar</span>
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-car-service">
                            <Link href="/#" className="image">
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
                                                    <img src="./assets/images/car-list/car10.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
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
                                <h6 className="title"><Link href="/dealer-details">Chevrolet Suburban 2021
                                    mo</Link></h6>
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
                                    <div className="price-wrap">
                                        <span className="price-sale">$3958</span>
                                        <span className="price">$7894</span>
                                    </div>
                                    <div className="btn-group">
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-shuffle-2-11" />
                                        </Link>
                                        <Link href="/#" className="icon-service">
                                            <i className="icon-heart-1-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 t-al-center">
                    <div className="btn-main mt-45">
                        <a href="#" className="button_main_inner">
                            <span>More Listings</span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
