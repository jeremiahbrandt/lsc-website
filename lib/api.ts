import {IBiography} from "../interfaces/iBiography";
import client from "./client";

export async function getAllBiographies(): Promise<IBiography[]> {
    return await client.fetch(`
        *[_type=="bio"]{
            ...,
            "imageUrl": image.asset->url
        }`
    )
}