import Navigation from "./Navigation";
import Link from "next/link";
import React, {FC} from "react";

const Header:FC<{logo: string}> = ({logo}) => {
    return (
        <div className={"header-wrapper"}>
            <header>
                <Link href={"/"}><img src={logo} alt={"logo"} /></Link>
                <Navigation />
            </header>
        </div>
    )
}

export default Header