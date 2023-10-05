<h3 align="center">
Another Facebook Album Downloader that was inspired and forked from </br> "https://github.com/yasinatesim/facebook-album-downloader" 
</h3>
<hr />

<p  align="center">A simple web application that allows users to download Facebook albums in full resolution.</p>
<p align="center">
  · <a href="https://github.com/estatistics/facebook-album-downloader/issues">Report Bug</a>
  · <a href="https://github.com/estatistics/facebook-album-downloader/issues">Request Feature</a>
</p>

## 📖 About

Facebook Album Downloader is a java (JS) file that allows users to download Facebook photo albums in full resolution. 

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
  <td><a href="https://reactjs.org/">React</a></td>
  <td>A JavaScript library for building user interfaces</td>
</tr>
</table>


### Features

The main feature of this application is to allow users to download Facebook albums after entering the album link. When users enter a Facebook album link and click the "download" button, the application uses a tool called Puppeteer to scrape the HTML of the album and then presents these files as a downloadable ZIP file. Additionally, the application also includes a feature that warns the user if they are leaving the page while the download process may not have been completed yet.

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

**For Development**

```bash
yarn dev
```

### For Docker

2. Change the directory

```bash
cd facebook-album-downloader
```

3. Run this command **without `yarn` or `yarn install`**

```bash
yarn setup
```

or

```bash
yarn && docker-compose up --build
```

App is running on [http://localhost:3000](http://localhost:3000)

**For Production Build &amp; Build Start**

```bash
yarn build
```

and

```bash
yarn start
```

**For Lint &amp; Format**

```bash
yarn lint
yarn format
```

## 🔑 License

- Copyright © 2023 - MIT License.

See [LICENSE](https://github.com/yasinatesim/facebook-album-downloader/blob/main/LICENSE) for more information.

---

_This README was generated with by [markdown-manager](https://github.com/yasinatesim/markdown-manager)_ 🥲
