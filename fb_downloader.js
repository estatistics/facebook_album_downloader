// in "const id" please WRITE your USERNAME and PASS
// in "const ALBUM" please WRITE your FB ALBUM url
// in "--user-data-dir='"  write the PATH to save images
// in "executablePath:" write the path of YOUR browser - support for chromium
// you may or may not activate the extra tab key press in line 68 by removing "//"


const puppeteer = require('puppeteer');
const fs = require('fs'); //for working with files
const path = require('path');
const axios = require('axios');
const rimraf = require('rimraf');

const ID = {   login: 'USER',    pass: 'PASS'    };
const ALBUM = { url: 'https://www.facebook.com/media/set/?set=a.623000739855658&type=3' };
// TEST URL:  photo/?fbid=623000823188983&amp;set=a.623000739855658


(async () => {
   // declaring browser options
    const browser = await puppeteer.launch({headless: true,
    args: [
      '--start-maximized',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-default-browser-check',
      '--no-first-run',
      '--disable-default-apps',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-infobars',
      '--window-position=0,0',
      '--ignore-certifcate-errors',
      '--ignore-certifcate-errors-spki-list',
      // '--user-data-dir=' + rootDir,
       '--user-data-dir=' + '/home/USER/Downloads/'
    ],
     executablePath: 'chromium'});

// open the browser and the main fb page
const page = await browser.newPage();
const context = browser.defaultBrowserContext();
await page.waitForTimeout(1150);
context.overridePermissions("https://www.facebook.com", ["geolocation", "notifications"]);
await page.goto('https://www.facebook.com/', {waitUntil: 'networkidle0', timeout: 30000} );
await page.keyboard.press('Enter'); // Enter Key
console.log('main facebook page loaded')

// Type in the username and continue forward
await page.waitForTimeout(1150);
await page.keyboard.type(ID.login, {delay: 120});  // Types slower, like a user
//await page.keyboard.press('Tab'); // Enter Key
await page.keyboard.press('Tab'); // Enter Key
await page.keyboard.type(ID.pass, {delay: 120});  // Types slower, like a user
await page.keyboard.press('Enter'); // Enter Key
await page.waitForTimeout(7150);
// End LOGIN HEREs
console.log( ' facebook user/pass page OK if required - I hope :)' )


//Goes to album url
try {
     await page.goto(ALBUM.url, {waitUntil: 'networkidle0', timeout: 100000} );
      } catch {
     await page.goto(ALBUM.url, {waitUntil: 'networkidle0', timeout: 100000} );
      };
console.log(`Going to album url ${ALBUM.url} - try to reload if not loaded already`)


//How many photos exists ?
const photoLinks = await page.evaluate(() => {
   let links = [];
   let photos =document.querySelectorAll('a[href*="/photo/?fbid="]');
     for (let i = 0; i < photos.length; i++) {
        links.push(photos[i].href);
      }
      return links;
    });
    console.log(`Found a total of ${photoLinks.length} photos.`);


 const photosDir = './photos';
    if (!fs.existsSync(photosDir)) {s
      fs.mkdirSync(photosDir);
    }
console.log('making a ./photo dir to save photos in the current directory')


    const controller = new AbortController();
     // test for small loop  --> // photoLinks.length=3;
    for (let i = 0; i < photoLinks.length; i++) {
        const photoController = new AbortController();
        const photoSignal = photoController.signal;
        const imageSelector = '[data-visualcompletion="media-vc-image"]';

        try {
             await page.goto(photoLinks[i], {waitUntil: 'load', timeout: 100000} );
              } catch {
             await page.goto(photoLinks[i], {waitUntil: 'load', timeout: 100000} );
               };

        await page.waitForSelector(imageSelector);

        const fileUrl = await page.$eval(imageSelector, img => img.src);
        console.log(`urls: ${fileUrl}` );

        const filename = path.join(
        photosDir,
       `${path.basename(await page.$eval(imageSelector, img => img.src)).split('.jpg')[0]}.jpg`    );
        console.log(`urls name: ${filename} `);

        // const response = await axios.get( fileUrl, { responseType: 'stream' }    );

        const response = await axios.get(fileUrl, { responseType: 'stream',
          cancelToken: new axios.CancelToken(function executor(c) {
            // Cancel request with this controller when requested
            photoSignal.addEventListener('abort', () => {   c();   });
          }),
        });

        // Download album photos
        response.data.pipe(fs.createWriteStream(filename));
        console.log(`Downloading photo ${i + 1}/${photoLinks.length}...`);
        await page.waitForTimeout(1000);
        photoController.abort();

        };


  
/*
// pieces of code for debug options in console 

// how many photos found in album page?
lks = [];
res =document.querySelectorAll('a[href*="/photo/?fbid="]');
   for (let i = 0; i < res.length; i++) {
        lks.push(res[i].href);
      }
console.log(`Found a total of ${lks.length} photos.`);

// does it find large size photo link in each photo page ?
const imageSelector = '[data-visualcompletion="media-vc-image"]';
pp = document.querySelector(imageSelector, img => img.src)
console.log(pp.src)

//useful for headless mode debuging
//await page.screenshot({ path: 'facebook.png' });

*/


await page.waitForNavigation();
//  await browser.close();
})();




