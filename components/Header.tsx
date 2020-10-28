import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className={"header-wrapper"}>
            <header>
                <img src={"vercel.svg"} alt={"logo"} />
                <Navigation />
            </header>
        </div>
    )
}

export default Header