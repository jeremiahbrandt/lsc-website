import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
    return (
        <div className={"header-wrapper"}>
            <header>
                <Link href={"/"}><img src={"vercel.svg"} alt={"logo"} /></Link>
                <Navigation />
            </header>
        </div>
    )
}

export default Header