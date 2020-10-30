import {IImage} from "./IImage";

export interface IEventData {
    name: string,
    date: string,
    startTime: number,
    endTime: number,
    location: string,
    description: string[],
    image: IImage;
}