import {ISocialMediaLink} from "./ISocialMediaLink";
import {IAddress} from "./IAddress";

export interface IConfig {
    siteTitle: string,
    phoneNumber: string,
    emailAddress: string,
    address: IAddress,
    socialMediaLinks: ISocialMediaLink[]
}