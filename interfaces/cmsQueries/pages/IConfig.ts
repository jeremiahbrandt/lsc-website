import {ISocialMediaLink} from "../objects/ISocialMediaLink";
import {IAddress} from "../objects/IAddress";
import { IOg } from "../../IOg";

export interface IConfig {
    siteTitle: string,
    phoneNumber: string,
    emailAddress: string,
    address: IAddress,
    socialMediaLinks: ISocialMediaLink[],
    logo: string,
    emailSenderAddress: string
    emailSenderPassword: string,
    og? : IOg
}
