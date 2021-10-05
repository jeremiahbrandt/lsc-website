import { IEvent } from "../objects/IEvent";

export interface IHomePageContent {
  eventsSectionTitle: string;
  firstSection: {
    name: string;
    articles: IEvent[];
  };
  secondSection: {
    name: string;
    articles: IEvent[];
  };
  events: IEvent[];
  slideshowImages: string[];
  welcomeVideo: {
    enabled: boolean;
    video: {
      id: string;
      name: string;
    };
  };
}
