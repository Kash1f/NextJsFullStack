import Link from "next/link";

const Navbar = () => {
    return (
        <div>
        <div>Logo</div>
        <div>
            <Link href="/">HomePage</Link>
            <Link href="/About">About</Link>
        </div>
        </div>
    )
}

export default Navbar;