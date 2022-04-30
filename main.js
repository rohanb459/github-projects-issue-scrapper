const url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
// const getReposPage = require("./getReposPage");
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
        let fullLink = "https://github.com"+href;
        let topic = href.split("/").pop();
        // console.log(fullLink);
        // console.log("````````````````````````");
        getReposPageHtml(fullLink, topic);
    }
}

function getReposPageHtml(url, topic)
{
    request(url,cb);
    function cb(err, response, html)
    {
        if(err)
        console.log(err);
        else
        getReposLink(html, topic);
    }


    function getReposLink(html)
    {
        let $ = cheerio.load(html);
        let anchorsArr = $("h3 a");
        console.log(topic);
        for(let i =0; i<anchorsArr.length; i++)
        {
            if(i%2!=0)
            {
                let link = $(anchorsArr[i]).attr("href");
                // console.log(link);
                let fullLink = `https://github.com${link}/issues`;
                console.log(fullLink);
            }
        }
        console.log("``````````````````");
    }
}