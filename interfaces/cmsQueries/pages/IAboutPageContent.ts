import {IBiography} from "../objects/IBiography";

export interface IAboutPageContent {
    aboutPageTitle: string,
    biographySections: {
        title,
        biographies: IBiography[]
    }
}