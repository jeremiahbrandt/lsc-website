import {IBiography} from "../interfaces/IBiography";
import client from "./client";
import {IEvent} from "../interfaces/IEvent";

export async function getAllBiographies(): Promise<IBiography[]> {
    return await client.fetch(`
        *[_type=="bio"]{
            ...,
            "imageUrl": image.asset->url
        }`
    )
}

export async function getSlideshowImageUrls(): Promise<{imageUrl: string}> {
    return await client.fetch(`
        *[_type=="slideshowImages"]{
          "imageUrl": slideshowImage.asset->url
        }`
    )
}

export async function getEvents(): Promise<{events: IEvent[]}> {
    return await client.fetch(`
        *[_type=="event"] {
          ...,
          "coverImageUrl": coverImage.asset->url
        }
    `)
}
