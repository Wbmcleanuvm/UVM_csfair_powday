import * as cheerio from 'cheerio';
import fetch from "node-fetch";

export async function jayGetData(url)
{
    try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const last24 = $('.SnowReport-measure dd').text();  
    // const baseDepth = $('selector-for-base-depth').text();

    // return { last24, baseDepth /*, ... */ };
    }
    
    catch (err) {
        console.error("Error scraping Jay Peak:", err);
        return { error: "Scrape failed" };
    }
}