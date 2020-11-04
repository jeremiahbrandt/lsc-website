import {IEvent} from "./IEvent";

export interface IHomePageContent {
    eventSectionTitle: string,
    events: IEvent[],
    slideshowImages: string[]
}