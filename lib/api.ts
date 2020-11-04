import client from "./client";
import {IConfig} from "../interfaces/IConfig";
import {IHomePageContent} from "../interfaces/IHomePageContent";
import {IAboutPageContent} from "../interfaces/IAboutPageContent";
import {IContactPageContent} from "../interfaces/IContactPageContent";

export async function getSiteConfig(): Promise<IConfig> {
    return await client.fetch(`
        *[_type=="site-config"][0] {
          siteTitle,
          phoneNumber,
          emailAddress,
          address,
          "socialMediaLinks": socialMediaLinks[] {
            url,
            "image": image.asset->url
          },
        }
    `)
}

export async function getHomePageContent(): Promise<IHomePageContent> {
    return await client.fetch(`
        *[_type == "homePage"][0] {
            eventsSectionTitle,
            "events": events[]{
                name,
                startTime,
                endTime,
                location,
                content,
                "coverImage": coverImage.asset->url
            },
            "slideshowImages": slideshowImages[].asset->url
        }
    `)
}

export async function getAboutPageContent(): Promise<IAboutPageContent> {
    return await client.fetch(`
        *[_type == "aboutPage"][0] {
            aboutPageTitle,
            "biographies": biographies[]{
                name,
                position,
                "image": image.asset->url,
                blockContent
            }
        }
    `)
}

export async function getContactPageContent(): Promise<IContactPageContent> {
    return await client.fetch(`
        *[_type == "contactPage"][0] {
            sectionTitle,
            "daysOfOperation": daysOfOperation[]{
                dayOfWeek,
                hoursOfOperation
            }
        }
    `)
}
