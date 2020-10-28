import InformationPageData from "./InformationPageData";
import NavigationData from "./NavigationData";
import {slideshowItem} from "./SlideshowItem";
import {IEventData} from "./EventData";

interface Proxy {
    getNavigationLinks: () => NavigationData
    getInformationPageData: () => InformationPageData
    getSlideshowFiles: () => slideshowItem[]
    getEventData: () => IEventData[]
}

export default Proxy