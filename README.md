<h3 align="center">
Another Facebook Album Downloader that was inspired and forked from </br> "https://github.com/yasinatesim/facebook-album-downloader" 
</h3>
<hr />

<p  align="center">A simple application that allows users to download Facebook albums in full resolution for linux users.</p>
<p align="center">
  · <a href="https://github.com/estatistics/facebook-album-downloader/issues">Report Bug</a>
  · <a href="https://github.com/estatistics/facebook-album-downloader/issues">Request Feature</a>
</p>

## 📖 About 
!!! It is still in development - multipage albums are not still downloaded - folder is not renamed after album title and much more !!!
Facebook Album Downloader is a java (JS) file that allows users to download Facebook photo albums in full resolution in linux. 

### 📚 Tech Stack

<table>
</tr>
  <tr>
  <td><a href="https://pptr.dev/">Puppeteer</a></td>
  <td>A Node library for controlling headless Chrome or Chromium browsers</td>
  </tr>
  <tr>
  <td><a href="https://axios-http.com/">Axios</a></td>
  <td>A promise-based HTTP client for the browser and Node.js</td>
  </tr>
  <tr>
  <td><a href="https://nodejs.org/api/fs.html">Fs</a></td>
  <td>A JavaScript library for working with files</td>
  </td>
  <tr>
  <td><a href="https://nodejs.org/api/path.html">Path</a></td>
  <td>A JavaScript library for working with paths</td>
  </td>
</tr>
</table>


### Features

The main feature of this javascript (JS) is to allow users to download Facebook albums after providing USER,PASSWORD,Facebook ALBUM url that they have access. The javascript uses mainly a tool called Puppeteer to scrape the HTML of the album.

## File information

The directory contains the following:

- `fb_downloader.js` - The main app that contains the code to download photos of full resolution from facebook albums that you have access
- README.md - An information file that includes the information that is presented here
- package.json - A file that contains all the packages that may need to be installed in your system in order fb_downloader.js to work.

## Getting Started

### 📦 Prerequisites

- Node (v17.0.0+)
- Npm (v8.1.0+)

### ⚙️ How To Use

1.  Clone this repository
```bash
git clone https://github.com/estatistics/facebook-album-downloader.git
```

2. Install the project dependencies
```bash
npm install or yarn install 
```
### Before running
When you fork this repository in your disk, open and edit `fb_downloader.js` as follows: 

1. in "const id" please WRITE your USERNAME and PASS of your facebook profile
2. in "const ALBUM" please WRITE facebook ALBUM URL that you like to download. It is provided an example of a public fb album url. 
3. in "--user-data-dir='"  write the PATH to save images. There, it will be created a folder named "photos".
4. in "executablePath:" write the path of YOUR browser - Currently, support is provided only for chromium 
5. you may or may not activate the extra tab key press in line 68 by removing "//"

# Optional - debuging
1. If you like you may change `headless` mode from `true` to `false` in order to see what happens

### How to run 
1. open a terminal 
2. Go to the folder that you forked this repository, for example: `cd /home/USER/Downloads/facebook_album_downloader/`
3. Run inside that folder `node fb_downloader.js` 

## 🔑 License

- Copyright © 2023 - MIT License.

See [LICENSE](https://github.com/yasinatesim/facebook-album-downloader/blob/main/LICENSE) for more information.

---
