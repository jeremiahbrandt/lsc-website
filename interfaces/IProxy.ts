import IInformationPageData from "./IInformationPageData";
import INavigationData from "./INavigationData";
import {IImage} from "./IImage";
import {IEventData} from "./IEventData";
import {IContactPageData} from "./IContactPageData";
import {IFooterProps} from "./IFooterProps";

interface Proxy {
    getNavigationLinks: () => INavigationData
    getInformationPageData: () => IInformationPageData
    getSlideshowFiles: () => IImage[]
    getContactPageData: () => IContactPageData
    getEventData: () => IEventData[]
    getFooterProps: () => IFooterProps
}

export default Proxy