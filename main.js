const url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");

request(url,cb);

function cb(err, response, html)
{
    if(err)
    console.log(err);
    else
    extractHtml(html);
}

function extractHtml(html)
{
    let $ = cheerio.load(html);

    let linkEleArr = $(".topic-box.position-relative.hover-grow.height-full.text-center.border.color-border-muted.rounded.color-bg-default.p-5 a")
    // console.log(linkEleArr);
    for(let i=0; i<linkEleArr.length; i++)
    {
        let href = $(linkEleArr[i]).attr("href");
        console.log(href);
    }
}