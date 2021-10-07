import {INavigationLink} from "../interfaces/INavigationLink";

export function getNavigationLinks(): INavigationLink[] {
    return [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Videos",
            url: "/videos"
        },
        {
            name: "About Us",
            url: "/about",
            dropdown: [
                {
                    name: "Our Beliefs",
                    url: "/about#beliefs"
                },
                {
                    name: "History",
                    url: "/about#history"
                },
                {
                    name: "Staff",
                    url: "/about#staff"
                },
            ]
        },
        {
            name: "Contact",
            url: "/contact"
        },
    ]
}