const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
function getIssuesPageHtml(url, topic, repoName)
{
    request(url, cb);
    function cb(err, response, html)
    {
        if(err)
        console.log(err);
        else
        getIssues(html,topic);
    }

    function getIssues(html)
    {
        let $ = cheerio.load(html);
        let anchorsArr = $('[data-hovercard-type="issue"]');
        // console.log(anchorsArr);
        console.log(anchorsArr.length);
        let arr=[];
        for(let i=0; i<anchorsArr.length; i++)
        {
            let link = $(anchorsArr[i]).attr("href")

            // console.log(link);
            arr.push(link);
            let folderPath = path.join(__dirname, topic);
            dirCreator(folderPath);
        }
        // console.log(topic, "         ", arr);

    }
}
module.exports = getIssuesPageHtml;
function dirCreator(folderPath)
{
    if(fs.existsSync(folderPath) == false)
    {
        fs.mkdirSync(folderPath);
    }
}