import IInformationPageData from "./IInformationPageData";
import INavigationData from "./INavigationData";
import {IImage} from "./IImage";
import {IEvent} from "./IEvent";
import {IContactPageContent} from "./IContactPageContent";
import {IFooterProps} from "./IFooterProps";

interface Proxy {
    getNavigationLinks: () => INavigationData
    getInformationPageData: () => IInformationPageData
    getSlideshowFiles: () => IImage[]
    getContactPageData: () => IContactPageContent
    getEventData: () => IEvent[]
    getFooterProps: () => IFooterProps
}

export default Proxy