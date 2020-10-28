import Footer from "./Footer"
import Navigation from "./Navigation"
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout