import {IImage} from "./IImage";

export interface IEvent {
    name: string,
    startTime: number,
    endTime: number,
    location: string,
    coverImageUrl: string,
    content: object[]
}