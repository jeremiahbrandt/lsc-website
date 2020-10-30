import IInformationPageData from "./IInformationPageData";
import INavigationData from "./INavigationData";
import {IImage} from "./IImage";
import {IEventData} from "./IEventData";
import {IContactPageData} from "./IContactPageData";

interface Proxy {
    getNavigationLinks: () => INavigationData
    getInformationPageData: () => IInformationPageData
    getSlideshowFiles: () => IImage[]
    getContactPageData: () => IContactPageData
    getEventData: () => IEventData[]
}

export default Proxy