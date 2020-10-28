import InformationPageData from '../interfaces/InformationPageData';
import NavigationData from '../interfaces/NavigationData';
import ProxyInterface from "../interfaces/ProxyInterface"
import {slideshowItem} from "../interfaces/SlideshowItem";

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

    const getSlideshowFiles = (): slideshowItem[] => {
        return [
            {
                fileLocation: "/slideshow/1.png",
                default: "Slide 1"
            },
            {
                fileLocation: "/slideshow/2.png",
                default: "Slide 2"
            },
            {
                fileLocation: "/slideshow/3.png",
                default: "Slide 3"
            },
            {
                fileLocation: "/slideshow/4.png",
                default: "Slide 4"
            },
            {
                fileLocation: "/slideshow/5.png",
                default: "Slide 5"
            },
            {
                fileLocation: "/slideshow/6.png",
                default: "Slide 6"
            },
        ]
    }

    return {getNavigationLinks, getInformationPageData, getSlideshowFiles}
}

export default Proxy