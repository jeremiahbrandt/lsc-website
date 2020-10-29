import {IImage} from "./IImage";
import {IBioData} from "./IBioData";

interface IInformationPageData {
    phoneNumber: string
    email: string
    hoursOfOperation: string

    lscBio: IBioData
    pastorBio: IBioData
    presidentBio: IBioData
}

export default IInformationPageData