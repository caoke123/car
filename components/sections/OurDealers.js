
import Link from 'next/link'

export default function OurDealers() {
    return (
        <>
            <div className="widget-our-ealers">
                <div className="themesflat-container">
                    <div className="our-ealers">
                        <div className="header-section-main mb-46">
                            <h2 className="title-section-main wow fadeInUp">Our Dealers</h2>
                            <div className="btn-read-more wow fadeInUp">
                                <Link className="more-link" href="/#">
                                    <span>More Members</span>
                                    <i className="icon-arrow-up-right2" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
                                <div className="tf-widget-team t-al-center">
                                    <div className="team-image">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Cameron Williamson" />
                                        <Link href="/#" className="btn-team">
                                            <svg width={29} height={28} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 25.48L25.0125 3.4675M3 2H26.48V25.48" stroke="#DF2818" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <h5><Link href="/#">Cameron Williamson</Link></h5>
                                    <span>Sales Manager</span>
                                    <ul className="social-team">
                                        <li><Link href="/#"><i className="icon-6" /></Link></li>
                                        <li><Link href="/#"><i className="icon-4" /></Link></li>
                                        <li><Link href="/#"><i className="icon-8" /></Link></li>
                                        <li><Link href="/#"><i className="icon-11" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
                                <div className="tf-widget-team t-al-center">
                                    <div className="team-image">
                                        <img src="https://images.unsplash.com/photo-1494790108755-2616c4e73dfe?w=300&h=300&fit=crop&crop=face" alt="Sarah Johnson" />
                                        <Link href="/#" className="btn-team">
                                            <svg width={29} height={28} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 25.48L25.0125 3.4675M3 2H26.48V25.48" stroke="#DF2818" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <h5><Link href="/#">Sarah Johnson</Link></h5>
                                    <span>Finance Specialist</span>
                                    <ul className="social-team">
                                        <li><Link href="/#"><i className="icon-6" /></Link></li>
                                        <li><Link href="/#"><i className="icon-4" /></Link></li>
                                        <li><Link href="/#"><i className="icon-8" /></Link></li>
                                        <li><Link href="/#"><i className="icon-11" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
                                <div className="tf-widget-team t-al-center">
                                    <div className="team-image">
                                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" alt="Michael Chen" />
                                        <Link href="/#" className="btn-team">
                                            <svg width={29} height={28} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 25.48L25.0125 3.4675M3 2H26.48V25.48" stroke="#DF2818" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <h5><Link href="/#">Michael Chen</Link></h5>
                                    <span>Service Advisor</span>
                                    <ul className="social-team">
                                        <li><Link href="/#"><i className="icon-6" /></Link></li>
                                        <li><Link href="/#"><i className="icon-4" /></Link></li>
                                        <li><Link href="/#"><i className="icon-8" /></Link></li>
                                        <li><Link href="/#"><i className="icon-11" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-3">
                                <div className="tf-widget-team t-al-center">
                                    <div className="team-image">
                                        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=300&h=300&fit=crop&crop=face" alt="Emma Davis" />
                                        <Link href="/#" className="btn-team">
                                            <svg width={29} height={28} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 25.48L25.0125 3.4675M3 2H26.48V25.48" stroke="#DF2818" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <h5><Link href="/#">Emma Davis</Link></h5>
                                    <span>Customer Relations</span>
                                    <ul className="social-team">
                                        <li><Link href="/#"><i className="icon-6" /></Link></li>
                                        <li><Link href="/#"><i className="icon-4" /></Link></li>
                                        <li><Link href="/#"><i className="icon-8" /></Link></li>
                                        <li><Link href="/#"><i className="icon-11" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
