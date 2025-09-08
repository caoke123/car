import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const pathname = usePathname()

    return (
        <>
            <ul className="navigation clearfix">
                <li className={pathname == "/" ? "current" : ""}>
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown2">
                    <Link href="/#">Cars</Link>
                    <ul>
                        <li className={pathname == "/car-list" ? "current" : ""}><Link href="/car-list">Car Listings</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">Listings Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown2">
                    <Link href="/#">Page</Link>
                    <ul>
                        <li className={pathname == "/dashboard" ? "current" : ""}><Link href="/dashboard">Dashboard</Link></li>
                        <li className={pathname == "/my-inventory" ? "current" : ""}><Link href="/my-inventory">My Inventory</Link></li>
                        <li className={pathname == "/addcart" ? "current" : ""}><Link href="/addcart">Add car</Link></li>
                        <li className={pathname == "/seller-profile" ? "current" : ""}><Link href="/seller-profile">Seller Profile</Link></li>
                        <li className={pathname == "/dealer-details" ? "current" : ""}><Link href="/dealer-details">Dealer Detail</Link></li>
                        <li className={pathname == "/404" ? "current" : ""}><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown2"><Link href="/#">News </Link>
                    <ul>
                        <li className={pathname == "/blog" ? "current" : ""}><Link href="/blog">Blog List</Link></li>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">Blog Detail</Link></li>
                    </ul>
                </li>
                <li className={pathname == "/contact-us" ? "current" : ""}><Link href="/contact-us">Contact us </Link>
                </li>
            </ul>
        </>
    )
}
