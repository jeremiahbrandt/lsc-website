import Footer from "./Footer"
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div className={"layout"}>
            <Header />
            <div className={"main-wrapper"}>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout