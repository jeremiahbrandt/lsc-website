import InformationPageData from "./InformationPageData";
import NavigationData from "./NavigationData";

interface Proxy {
    getNavigationLinks: NavigationData
    getInformationPageData: InformationPageData
}

export default Proxy