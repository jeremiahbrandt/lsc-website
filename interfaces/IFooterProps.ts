import {ISocialMedia} from "./ISocialMedia";

export interface IFooterProps {
    email: string
    phone: string
    address: {
        addressNumber: number
        street: string
        city: string
        state: string
        zip: number
    }
    socialMedia: ISocialMedia
}