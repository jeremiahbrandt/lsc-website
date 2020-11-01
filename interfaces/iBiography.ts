import {IImage} from "./IImage";

export interface IBiography {
    name: string
    position: string
    bio: string[]
    image: IImage
    blockContent: object[]
}