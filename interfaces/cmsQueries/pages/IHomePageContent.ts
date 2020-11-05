import {IEvent} from "../objects/IEvent";

export interface IHomePageContent {
    eventsSectionTitle: string,
    events: IEvent[],
    slideshowImages: string[]
}