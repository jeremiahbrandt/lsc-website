import IInformationPageData from '../interfaces/IInformationPageData';
import INavigationData from '../interfaces/INavigationData';
import ProxyInterface from "../interfaces/IProxy"
import {IImage} from "../interfaces/IImage";
import {IEventData} from "../interfaces/IEventData";
import {IBioData} from "../interfaces/IBioData";

const Proxy = (): ProxyInterface => {
    const PORT="3000"
    const HOME_URL=`localhost:${PORT}`
    const getNavigationLinks = () => {
        const dummyData: INavigationData = [
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

    const getInformationPageData = (): IInformationPageData => {
        const phoneNumber = "(123) 456-7890"
        const email = "johndoe@example.com"
        const hoursOfOperation = ""

        const lscBio: IBioData = {
            bio:
                [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur mattis tortor sit amet posuere. Quisque vulputate nisl eu nisi convallis pharetra. Nam sagittis orci eu velit euismod, ut rhoncus lorem faucibus. Quisque sit amet urna lectus. Integer tempus pharetra purus, ac pellentesque odio blandit consequat. Aenean nec ante ante. Vestibulum eget lectus in nisi tincidunt sagittis id nec tellus. Duis vulputate augue metus, nec dictum diam tempor sed. Nam vehicula ut turpis in pellentesque. Quisque sollicitudin mauris ut consequat mattis.",
                    "Maecenas imperdiet eros in purus mollis, vitae pretium lorem pretium. Cras non venenatis odio. Sed lobortis enim in malesuada ultricies. Praesent non turpis vitae felis interdum cursus. Vivamus elementum turpis non sem elementum aliquam. Ut imperdiet mi mauris, in egestas massa laoreet ut. Donec at facilisis tellus, blandit ullamcorper lacus. Integer diam est, elementum sed gravida rhoncus, convallis sit amet sem. Etiam dapibus faucibus pretium. Quisque at tempus arcu, eu venenatis lacus. Etiam posuere cursus sapien vel tempus. Nullam auctor leo justo, in porttitor ipsum laoreet eget. Phasellus non sapien non dolor consequat tincidunt sed in ligula. Donec eu commodo nisl. Cras orci libero, porta at lorem sed, auctor accumsan libero. Nulla sed venenatis elit, quis malesuada est.",
                    "Aenean lacinia augue vulputate egestas volutpat. Cras vitae viverra dolor. Sed vel augue a neque vestibulum efficitur posuere et nisi. Nulla et posuere ipsum, finibus mollis libero. Nunc massa velit, dapibus eu neque sit amet, pulvinar interdum ligula. Proin condimentum mi non sapien laoreet gravida. Aliquam scelerisque vitae nisl vitae imperdiet. Sed et dui nec odio pretium lobortis nec eget neque. Nulla facilisi. Nam elementum dictum neque nec volutpat. Donec a ornare leo.",
                    "Fusce pulvinar egestas urna. Nunc vehicula, massa sit amet iaculis pharetra, metus est mattis urna, at cursus diam est eu libero. Sed vel risus arcu. Praesent non turpis sit amet sem faucibus dapibus vel vel ipsum. Vivamus porta nunc ac mollis vestibulum. Vivamus lacus nisi, interdum eu pulvinar in, efficitur non diam. Duis volutpat ullamcorper enim quis vestibulum. Quisque dignissim tortor et leo bibendum mattis. Maecenas lacinia, massa vitae accumsan mollis, mi purus mattis mi, et ultricies odio lectus eget ligula. Quisque sagittis lectus ac felis gravida, id feugiat nulla porttitor. Aliquam tristique lectus non massa consectetur, tincidunt aliquam nunc varius. Nunc vel felis euismod, faucibus leo vel, auctor lectus. Etiam felis eros, fringilla a tellus aliquet, efficitur fringilla ex. Duis vestibulum orci arcu. Praesent congue elit vel dictum aliquam.",
                ],
            image: {
                src: "/about/about-lsc.jpg",
                alt: "The Lutheran Student Center building in Warrensburg, Missouri."
            }
        }

        const presidentBio: IBioData = {
            bio:
                [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae risus id felis lacinia tristique condimentum a erat. Aenean sed enim non eros facilisis lacinia. Duis nec lorem in felis mattis maximus in eget velit. Morbi sed nisl eget mi mollis molestie. Quisque sed sem quis metus imperdiet dignissim. Nullam commodo ut felis quis egestas. Morbi commodo sem ex, in tincidunt mi blandit vitae. Pellentesque laoreet fermentum augue id malesuada. Cras erat est, efficitur et gravida ac, aliquet vel diam. Maecenas vitae enim posuere, pulvinar augue a, venenatis nisl. Morbi ornare vel erat eget imperdiet. Donec in fringilla leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Etiam a feugiat orci, tempor gravida odio. Proin ut pellentesque ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Quisque nec dignissim libero. Donec mi nisi, varius quis rutrum vel, ultrices vehicula nibh. Nam sit amet interdum eros. Morbi non risus semper, elementum eros eget, consectetur eros. Ut eget metus dolor. In auctor, massa vel commodo finibus, quam mauris tincidunt dui, id venenatis nisl felis eget felis. Pellentesque molestie sodales aliquam. Donec porta dolor non lorem bibendum suscipit nec sed nisl. Duis erat dui, condimentum eu tristique eu, scelerisque mollis augue.",
                ],
            image: {
                src: "/about/about-president.jpg",
                alt: "The President of the Lutheran Student Center."
            }
        }

        const pastorBio: IBioData = {
            bio:
                [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, justo quis ultricies blandit, arcu magna fermentum urna, nec molestie felis ante vitae justo. Integer at lectus massa. Ut purus felis, commodo non augue sed, posuere dapibus ante. Duis tincidunt egestas diam, at viverra mi tincidunt consectetur. Suspendisse eu nisl et erat commodo imperdiet at eu orci. Donec iaculis mollis interdum. Praesent imperdiet magna a tincidunt pharetra. Praesent efficitur justo eget lacinia elementum. Sed auctor mauris ut nunc fringilla mattis. Duis eget efficitur enim. Duis at rutrum mi, at pellentesque arcu. Sed lorem quam, mattis nec accumsan quis, imperdiet vitae libero.",
                    "In hac habitasse platea dictumst. Donec ornare sapien imperdiet pellentesque molestie. Donec non pellentesque est, id egestas ante. Phasellus ut elit nec magna vestibulum posuere id id mauris. Duis faucibus tristique enim, id pharetra ex. Donec nunc arcu, suscipit eget dolor vitae, ultrices maximus nulla. Etiam et urna justo. Suspendisse sit amet tellus et mi lobortis condimentum ac sit amet lacus.",
                    "Cras a augue at nulla lacinia ultrices. Nunc rhoncus dignissim velit, nec vehicula eros dictum at. Ut sollicitudin tortor ut interdum porttitor. Donec vel varius metus. Duis id orci non diam sollicitudin interdum ac quis est. Cras fringilla vitae diam vel malesuada. Donec tempus, turpis quis rutrum ultricies, mauris ex aliquam metus, vel tincidunt enim ipsum ut urna. Donec sagittis dolor dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque lacinia lobortis nisi, vitae iaculis tellus volutpat nec. Aliquam vel pharetra neque. Duis tincidunt nisi eu orci tristique sodales."
                ],
            image: {
                src: "/about/about-pastor.jpg",
                alt: "The Pastor of the Lutheran Student Center."
            }
        }

        return {phoneNumber, email, hoursOfOperation, lscBio, pastorBio, presidentBio}
    }

    const getSlideshowFiles = (): IImage[] => {
        return [
            {
                src: "/slideshow/1.png",
                alt: "Slide 1"
            },
            {
                src: "/slideshow/2.png",
                alt: "Slide 2"
            },
            {
                src: "/slideshow/3.png",
                alt: "Slide 3"
            },
            {
                src: "/slideshow/4.png",
                alt: "Slide 4"
            },
            {
                src: "/slideshow/5.png",
                alt: "Slide 5"
            },
            {
                src: "/slideshow/6.png",
                alt: "Slide 6"
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
                date: "2020-10-29",
                image: {
                    src: "/events/event-meal.jpg",
                    alt: "People eating a meal."
                }
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03",
                image: {
                    src: "/events/event-worship.jpg",
                    alt: "A chapel service."
                }
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04",
                image: {
                    src: "/events/event-service-project.jpg",
                    alt: "A service event."
                }
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
                date: "2020-10-29",
                image: {
                    src: "/events/event-meal.jpg",
                    alt: "People eating a meal."
                }
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03",
                image: {
                    src: "/events/event-worship.jpg",
                    alt: "A chapel service."
                }
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04",
                image: {
                    src: "/events/event-service-project.jpg",
                    alt: "A service event."
                }
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
                date: "2020-10-29",
                image: {
                    src: "/events/event-meal.jpg",
                    alt: "People eating a meal."
                }
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03",
                image: {
                    src: "/events/event-worship.jpg",
                    alt: "A chapel service."
                }
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04",
                image: {
                    src: "/events/event-service-project.jpg",
                    alt: "A service event."
                }
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
                date: "2020-10-29",
                image: {
                    src: "/events/event-meal.jpg",
                    alt: "People eating a meal."
                }
            },
            {
                name: "Chapel",
                location: "Lutheran Student Center",
                startTime: 1600,
                endTime: 1700,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla euismod nisi nec accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in dui sit amet dui egestas auctor. Phasellus sit amet imperdiet erat, non feugiat nisi. Mauris ullamcorper maximus velit a consequat. Morbi ut lacus porttitor, sodales nunc id, facilisis massa. Donec et semper elit, laoreet consequat erat. Nullam cursus urna vel venenatis congue.\n" +
                    "\n" +
                    "In sodales pulvinar leo ut sodales. Nam sed libero sed tellus blandit bibendum. Morbi vitae neque magna. Nam dictum magna commodo, varius justo scelerisque, elementum eros. Vestibulum pellentesque urna vulputate leo lacinia, vel lacinia metus scelerisque. Integer porttitor pretium rhoncus. Quisque nibh tellus, tempus ac volutpat sit amet, efficitur sit amet quam. Donec interdum nulla ac massa dapibus consectetur. Etiam cursus risus sed leo fermentum, at lobortis erat finibus. Praesent efficitur nulla at tellus ornare dignissim et non diam.",
                date: "2020-11-03",
                image: {
                    src: "/events/event-worship.jpg",
                    alt: "A chapel service."
                }
            },
            {
                name: "Service Project",
                location: "Eliot Student Union",
                startTime: 1500,
                endTime: 1800,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu ligula eu rutrum. Pellentesque scelerisque magna ut ipsum tempor, eget placerat est dapibus. Sed id dapibus neque, vitae ornare mi. Vestibulum ut dictum enim, at tristique ex. Praesent vestibulum turpis ut maximus luctus. Etiam venenatis ipsum sit amet velit consectetur, non sodales turpis sagittis. Quisque porta id nulla non ultrices. Mauris pretium eu ipsum ac consectetur. Morbi a dui eget leo commodo semper. Pellentesque quam neque, molestie eget finibus sit amet, cursus et urna. In malesuada ut tellus at porttitor. Maecenas faucibus felis massa, at semper lectus luctus ut. Fusce non luctus odio, at rutrum enim. Nulla sed aliquet tellus, id laoreet dolor. Ut nibh eros, faucibus sed fermentum vitae, vestibulum ut dolor. Fusce vel tempor ex.",
                date: "2020-11-04",
                image: {
                    src: "/events/event-service-project.jpg",
                    alt: "A service event."
                }
            },
        ]
    }

    return {getNavigationLinks, getInformationPageData, getSlideshowFiles, getEventData}
}

export default Proxy