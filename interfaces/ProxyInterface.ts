import InformationPageData from "./InformationPageData";
import NavigationData from "./NavigationData";
import {slideshowItem} from "./SlideshowItem";

interface Proxy {
    getNavigationLinks: () => NavigationData
    getInformationPageData: () => InformationPageData
    getSlideshowFiles: () => slideshowItem[]
}

export default Proxy