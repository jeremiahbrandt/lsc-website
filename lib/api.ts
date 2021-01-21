import client from "./client";
import {IConfig} from "../interfaces/cmsQueries/pages/IConfig";
import {IHomePageContent} from "../interfaces/cmsQueries/pages/IHomePageContent";
import {IAboutPageContent} from "../interfaces/cmsQueries/pages/IAboutPageContent";
import {IContactPageContent} from "../interfaces/cmsQueries/pages/IContactPageContent";
import {IEmailCredentials} from "../interfaces/cmsQueries/objects/IEmailCredentials";
import {IVideosPageContent} from "../interfaces/cmsQueries/pages/IVideosPageContent";
import videos from "../pages/videos";

export async function getSiteConfig(): Promise<IConfig> {
    return await client.fetch(`
        *[_type=="site-config"][0] {
          siteTitle,
          "logo": logo.asset->url,
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
export async function getVideosPageContent(): Promise<IVideosPageContent> {
    let res = await client.fetch(`
        *[_type == "vidoesPage"][0] {
            videosPageTitle,
            videos[] {
                name, 
                url
            }
        }
    `)

    res.videos.forEach(video => {
        video.id = video.url.substring(video.url.lastIndexOf('=')+1, video.url.length)
        delete video.url
    })

    return res
}

export async function getEmailCredentials(): Promise<IEmailCredentials> {
    return await client.fetch(`
        *[_type == "site-config"][0] {
            emailSenderAddress,
            emailSenderPassword
        }
    `)
}
