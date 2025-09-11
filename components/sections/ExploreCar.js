"use client";
import Link from 'next/link'
import { Card, Row, Col } from 'antd'
import 'antd/dist/reset.css'
import { carImages } from '../../util/carImages'

const { Meta } = Card

export default function ExploreCar() {
    const carData = [
        {
            image: "/assets/images/unsplash/photo-1606220838315-056192d5e927.jpeg",
            title: "Sedan",
            alt: "Sedan"
        },
        {
            image: "/assets/images/unsplash/photo-1580273916550-e323be2ae537.jpeg",
            title: "SUV",
            alt: "SUV"
        },
        {
            image: "/assets/images/unsplash/photo-1544636331-e26879cd4d9b.jpeg",
            title: "Cabriolet",
            alt: "Cabriolet"
        },
        {
            image: "/assets/images/unsplash/photo-1519641471654-76ce0107ad1b.jpeg",
            title: "Pickup",
            alt: "Pickup"
        },
        {
            image: "/assets/images/unsplash/photo-1550355291-bbee04a92027.jpeg",
            title: "Supercar",
            alt: "Supercar"
        },
        {
            image: "/assets/images/unsplash/photo-1565043666747-69f6646db940.jpeg",
            title: "Minivans",
            alt: "Minivans"
        }
    ]

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
                        <Row gutter={[24, 24]}>
                            {carData.map((car, index) => (
                                <Col key={index} xs={24} sm={12} md={8} lg={4}>
                                    <Link href="/#">
                                        <Card
                                            hoverable
                                            cover={<img alt={car.alt} src={car.image} />}
                                            style={{ height: '100%' }}
                                        >
                                            <Meta title={car.title} />
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}