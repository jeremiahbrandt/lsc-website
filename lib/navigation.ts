import {INavigationLink} from "../interfaces/INavigationLink";

export function getNavigationLinks(): INavigationLink[] {
    return [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Contact",
            url: "/contact"
        },
    ]
}