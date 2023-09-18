import {joLix} from "./libs/ts-library";
import {DOMAIN} from "./libs/links/domains";
import {Link} from "./libs/links/short-link.entity";

export async function generateShortLink(originalUrl:string) {
    const shortId = joLix(6)
    // Return the short link
    const shortLink = `${DOMAIN(shortId)}`;
    let link = await Link.create({shortUrl:shortLink,originalUrl:originalUrl})
     await Link.save(link)
    return shortLink
}