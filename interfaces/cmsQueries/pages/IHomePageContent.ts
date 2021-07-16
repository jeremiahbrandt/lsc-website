import { IEvent } from "../objects/IEvent";

export interface IHomePageContent {
  eventsSectionTitle: string;
  events: IEvent[];
  slideshowImages: string[];
  welcomeVideo: {
    video: {
      id: string;
      name: string;
    };
  };
}
