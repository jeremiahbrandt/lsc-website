import IInformationPageData from "./IInformationPageData";
import INavigationData from "./INavigationData";
import {IImage} from "./IImage";
import {IEventData} from "./IEventData";

interface Proxy {
    getNavigationLinks: () => INavigationData
    getInformationPageData: () => IInformationPageData
    getSlideshowFiles: () => IImage[]
    getEventData: () => IEventData[]
}

export default Proxy