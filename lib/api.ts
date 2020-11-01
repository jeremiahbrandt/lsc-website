import {IBiography} from "../interfaces/iBiography";
import client from "./client";

export async function getAllBiographies(): Promise<IBiography[]> {
    const biographies = await client.fetch(`*[_type=="bio"]`)
    return biographies
}