import InformationPageData from '../interfaces/InformationPageData';
import NavigationData from '../interfaces/NavigationData';
import ProxyInterface from "../interfaces/ProxyInterface"

const Proxy = (): ProxyInterface => {
    const PORT="3000"
    const HOME_URL=`localhost:${PORT}`
    const getNavigationLinks = () => {
        const dummyData: NavigationData = [
            {
                name: "Home",
                url: "/"
            }, 
            {
                name: "About",
                url: "/about"
            },
            {
                name: "Contact",
                url: "/contact"
            }
        ]

        return dummyData
    }

    const getInformationPageData = (): InformationPageData => {
        const phoneNumber = "(123) 456-7890"
        const email = "johndoe@example.com"
        const hoursOfOperation = ""

        return {phoneNumber, email, hoursOfOperation}
    }

    return {getNavigationLinks, getInformationPageData}
}

export default Proxy