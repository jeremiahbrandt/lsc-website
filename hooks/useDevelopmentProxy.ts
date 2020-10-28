import InformationPageData from '../interfaces/InformationPageData';
import NavigationData from '../interfaces/NavigationData';
import ProxyInterface from "../interfaces/ProxyInterface"
import {slideshowItem} from "../interfaces/SlideshowItem";
import {IEventData} from "../interfaces/EventData";

const Proxy = (): ProxyInterface => {
    const PORT="3000"
    const HOME_URL=`localhost:${PORT}`
    const getNavigationLinks = () => {
        const dummyData: NavigationData = [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "Events",
                url: "/events"
            },
            {
                name: "About",
                url: "/about"
            },
            {
                name: "Contact",
                url: "/contact"
            }
        ]

        return dummyData
    }

    const getInformationPageData = (): InformationPageData => {
        const phoneNumber = "(123) 456-7890"
        const email = "johndoe@example.com"
        const hoursOfOperation = ""

        return {phoneNumber, email, hoursOfOperation}
    }

    const getSlideshowFiles = (): slideshowItem[] => {
        return [
            {
                fileLocation: "/slideshow/1.png",
                default: "Slide 1"
            },
            {
                fileLocation: "/slideshow/2.png",
                default: "Slide 2"
            },
            {
                fileLocation: "/slideshow/3.png",
                default: "Slide 3"
            },
            {
                fileLocation: "/slideshow/4.png",
                default: "Slide 4"
            },
            {
                fileLocation: "/slideshow/5.png",
                default: "Slide 5"
            },
            {
                fileLocation: "/slideshow/6.png",
                default: "Slide 6"
            },
        ]
    }

    const getEventData = (): IEventData[] => {
        return [
            {
                name: "Dinner and Bible Study",
                location: "Lutheran Student Center",
                startTime: 1700,
                endTime: 1900,
                description: "\n" +
                    "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus eget dui quis convallis. Maecenas in velit eget dolor laoreet sollicitudin. Phasellus ut elementum purus. Aliquam quis auctor magna. Nullam viverra velit purus, vel commodo odio feugiat quis. Donec id pellentesque purus, et volutpat libero. Mauris sodales, nunc ut faucibus cursus, dui diam congue urna, vel molestie nulla tellus at sem. Ut accumsan erat vitae nibh malesuada consequat. Etiam congue sed odio a tempus.\n" +
                    "\n" +
                    "Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vestibulum ante a dolor sollicitudin, at tincidunt nulla eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In odio elit, rutrum vel mattis posuere, sollicitudin vel purus. Quisque in ornare arcu. Duis magna dui, pharetra at nisi at, interdum condimentum justo. Sed eu nulla tincidunt, rutrum arcu at, volutpat eros. Etiam porta erat magna, in sollicitudin sem placerat in. Duis vestibulum maximus sollicitudin. Nunc vestibulum magna dictum, ornare lorem in, commodo urna. Proin risus urna, congue sed auctor sed, commodo ut enim. Nunc venenatis tellus nec felis placerat hendrerit. Proin pulvinar est lectus, in mattis sapien tincidunt eget. Sed porttitor, ligula vitae commodo convallis, arcu sem tincidunt urna, nec dignissim nulla orci nec arcu.",
                date: "2020-10-29"
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03"
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04"
            },
            {
                name: "Dinner and Bible Study",
                location: "Lutheran Student Center",
                startTime: 1700,
                endTime: 1900,
                description: "\n" +
                    "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus eget dui quis convallis. Maecenas in velit eget dolor laoreet sollicitudin. Phasellus ut elementum purus. Aliquam quis auctor magna. Nullam viverra velit purus, vel commodo odio feugiat quis. Donec id pellentesque purus, et volutpat libero. Mauris sodales, nunc ut faucibus cursus, dui diam congue urna, vel molestie nulla tellus at sem. Ut accumsan erat vitae nibh malesuada consequat. Etiam congue sed odio a tempus.\n" +
                    "\n" +
                    "Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vestibulum ante a dolor sollicitudin, at tincidunt nulla eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In odio elit, rutrum vel mattis posuere, sollicitudin vel purus. Quisque in ornare arcu. Duis magna dui, pharetra at nisi at, interdum condimentum justo. Sed eu nulla tincidunt, rutrum arcu at, volutpat eros. Etiam porta erat magna, in sollicitudin sem placerat in. Duis vestibulum maximus sollicitudin. Nunc vestibulum magna dictum, ornare lorem in, commodo urna. Proin risus urna, congue sed auctor sed, commodo ut enim. Nunc venenatis tellus nec felis placerat hendrerit. Proin pulvinar est lectus, in mattis sapien tincidunt eget. Sed porttitor, ligula vitae commodo convallis, arcu sem tincidunt urna, nec dignissim nulla orci nec arcu.",
                date: "2020-10-29"
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03"
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04"
            },
            {
                name: "Dinner and Bible Study",
                location: "Lutheran Student Center",
                startTime: 1700,
                endTime: 1900,
                description: "\n" +
                    "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus eget dui quis convallis. Maecenas in velit eget dolor laoreet sollicitudin. Phasellus ut elementum purus. Aliquam quis auctor magna. Nullam viverra velit purus, vel commodo odio feugiat quis. Donec id pellentesque purus, et volutpat libero. Mauris sodales, nunc ut faucibus cursus, dui diam congue urna, vel molestie nulla tellus at sem. Ut accumsan erat vitae nibh malesuada consequat. Etiam congue sed odio a tempus.\n" +
                    "\n" +
                    "Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vestibulum ante a dolor sollicitudin, at tincidunt nulla eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In odio elit, rutrum vel mattis posuere, sollicitudin vel purus. Quisque in ornare arcu. Duis magna dui, pharetra at nisi at, interdum condimentum justo. Sed eu nulla tincidunt, rutrum arcu at, volutpat eros. Etiam porta erat magna, in sollicitudin sem placerat in. Duis vestibulum maximus sollicitudin. Nunc vestibulum magna dictum, ornare lorem in, commodo urna. Proin risus urna, congue sed auctor sed, commodo ut enim. Nunc venenatis tellus nec felis placerat hendrerit. Proin pulvinar est lectus, in mattis sapien tincidunt eget. Sed porttitor, ligula vitae commodo convallis, arcu sem tincidunt urna, nec dignissim nulla orci nec arcu.",
                date: "2020-10-29"
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03"
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04"
            },
            {
                name: "Dinner and Bible Study",
                location: "Lutheran Student Center",
                startTime: 1700,
                endTime: 1900,
                description: "\n" +
                    "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus eget dui quis convallis. Maecenas in velit eget dolor laoreet sollicitudin. Phasellus ut elementum purus. Aliquam quis auctor magna. Nullam viverra velit purus, vel commodo odio feugiat quis. Donec id pellentesque purus, et volutpat libero. Mauris sodales, nunc ut faucibus cursus, dui diam congue urna, vel molestie nulla tellus at sem. Ut accumsan erat vitae nibh malesuada consequat. Etiam congue sed odio a tempus.\n" +
                    "\n" +
                    "Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vestibulum ante a dolor sollicitudin, at tincidunt nulla eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In odio elit, rutrum vel mattis posuere, sollicitudin vel purus. Quisque in ornare arcu. Duis magna dui, pharetra at nisi at, interdum condimentum justo. Sed eu nulla tincidunt, rutrum arcu at, volutpat eros. Etiam porta erat magna, in sollicitudin sem placerat in. Duis vestibulum maximus sollicitudin. Nunc vestibulum magna dictum, ornare lorem in, commodo urna. Proin risus urna, congue sed auctor sed, commodo ut enim. Nunc venenatis tellus nec felis placerat hendrerit. Proin pulvinar est lectus, in mattis sapien tincidunt eget. Sed porttitor, ligula vitae commodo convallis, arcu sem tincidunt urna, nec dignissim nulla orci nec arcu.",
                date: "2020-10-29"
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03"
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04"
            },
        ]
    }

    return {getNavigationLinks, getInformationPageData, getSlideshowFiles, getEventData}
}

export default Proxy