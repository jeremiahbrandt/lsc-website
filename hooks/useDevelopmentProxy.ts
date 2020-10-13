import InformationPageData from '../interfaces/InformationPageData';
import NavigationData from '../interfaces/NavigationData';
import ProxyInterface from "../interfaces/ProxyInterface"

const Proxy = (): ProxyInterface => {
    const HOME_URL="localhost:8080"
    const getNavigationLinks = () => {
        const dummyData: NavigationData = [
            {
                name: "Home",
                url: HOME_URL
            }, 
            {
                name: "About",
                url: `${HOME_URL}/about`
            },
            {
                name: "Contact",
                url: `${HOME_URL}/contact`
            }
        ]

        return dummyData
    }

    const getInformationPageData = (): InformationPageData => {
        const phoneNumber = "(123) 456-7890"
        const email = "johndoe@example.com"

        return {phoneNumber, email}
    }

    return {getNavigationLinks, getInformationPageData}
}

export default Proxy