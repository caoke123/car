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
                    <Link href="/#">Car</Link>
                    <ul>
                        <li className={pathname == "/car-list" ? "current" : ""}><Link href="/car-list">New Car</Link></li>
                        <li className={pathname == "/car-list" ? "current" : ""}><Link href="/car-list">Used Car</Link></li>
                    </ul>
                </li>
                <li className={pathname == "/about-us" ? "current" : ""}>
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className={pathname == "/blog" ? "current" : ""}><Link href="/blog">News</Link>
                </li>
                <li className={pathname == "/contact-us" ? "current" : ""}><Link href="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
