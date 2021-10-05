import client from "./client";
import { IConfig } from "../interfaces/cmsQueries/pages/IConfig";
import { IHomePageContent } from "../interfaces/cmsQueries/pages/IHomePageContent";
import { IAboutPageContent } from "../interfaces/cmsQueries/pages/IAboutPageContent";
import { IContactPageContent } from "../interfaces/cmsQueries/pages/IContactPageContent";
import { IEmailCredentials } from "../interfaces/cmsQueries/objects/IEmailCredentials";
import { IVideosPageContent } from "../interfaces/cmsQueries/pages/IVideosPageContent";
import { IEvent } from "../interfaces/cmsQueries/objects/IEvent";
import groq from "groq";

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
    `);
}

export async function getHomePageContent(): Promise<IHomePageContent> {
  let res = await client.fetch(`
        *[_type == "homePage"][0] {
            firstSection {
              name,
              "articles": articles[] {
                name,
                slug,
                startTime,
                endTime,
                location,
                content,
                "coverImage": coverImage.asset->url
              }
            },
            secondSection {
              name,
              "articles": articles[] {
                name,
                slug,
                startTime,
                endTime,
                location,
                content,
                "coverImage": coverImage.asset->url
              }
            },
            "slideshowImages": slideshowImages[].asset->url,
            "welcomeVideo": welcomeVideo {
                enabled,
                "video": video {
                    name,
                  url
              }
            }
        }
    `);

  res.welcomeVideo.video.id = getVideoId(res.welcomeVideo.video.url);
  delete res.welcomeVideo.video.url;

  return res;
}

export async function getEvent(slug: string): Promise<IEvent> {
  const content = await client.fetch(groq`
  *[_type == "homePage"] {
  	"article": 
      coalesce(
      	firstSection.articles[slug == $slug] {
          name,
          slug,
          startTime,
          endTime,
          location,
          content,
          "coverImage": coverImage.asset->url,
          description
        }[0],
        secondSection.articles[slug == $slug] {
          name,
          slug,
          startTime,
          endTime,
          location,
          content,
          "coverImage": coverImage.asset->url,
          description
        }[0]
			)
}[0]
`, {
    slug: slug
  });

  if(content === null || content === undefined) {
    throw new Error("Event not found");
  }

  return content.article;
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
    `);
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
    `);
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
    `);

  res.videos.forEach((video) => {
    video.id = getVideoId(video.url);
    delete video.url;
  });

  return res;
}

export async function getEmailCredentials(): Promise<IEmailCredentials> {
  return await client.fetch(`
        *[_type == "site-config"][0] {
            emailSenderAddress,
            emailSenderPassword
        }
    `);
}

function getVideoId(url: string): string {
  return url.substring(
    (url.lastIndexOf("=") + 1) || (url.lastIndexOf("/") + 1),
    url.length,
  );
}
