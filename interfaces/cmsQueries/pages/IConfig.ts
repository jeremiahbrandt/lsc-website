import {ISocialMediaLink} from "../objects/ISocialMediaLink";
import {IAddress} from "../objects/IAddress";

export interface IConfig {
    siteTitle: string,
    phoneNumber: string,
    emailAddress: string,
    address: IAddress,
    socialMediaLinks: ISocialMediaLink[],
    logo: string
}