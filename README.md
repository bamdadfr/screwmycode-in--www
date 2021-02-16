# <img width=25 src="https://raw.githubusercontent.com/screwmycode/screwmycode-www/master/src/assets/icons/SCRW_KSET.svg"> Front End

<p align=center>
    <a href="https://screwmycode.in/">
        <img width=100 src="https://raw.githubusercontent.com/screwmycode/screwmycode-www/master/src/assets/icons/SCRW_KSET.svg">
    </a>
</p>

<p align=center>
    Variable speed pitch control for <a href="https://www.youtube.com/">YouTube</a>
</p>

<p align=center>
    <a href="https://github.com/screwmycode/screwmycode-www">
        <img src="https://img.shields.io/github/stars/screwmycode/screwmycode-www?label=git">
    </a>
    <img src="https://img.shields.io/github/license/screwmycode/screwmycode-www">
</p>

<p align=center>
    <img src="https://img.shields.io/github/languages/count/screwmycode/screwmycode-www">
    <img src="https://img.shields.io/github/languages/top/screwmycode/screwmycode-www">
</p>

<p align=center>
    <img src="https://img.shields.io/github/v/release/screwmycode/screwmycode-www">
    <img src="https://api.codeclimate.com/v1/badges/43b9b1c5b6357b7a10fa/maintainability" />
</p>

<p align=center>
    <img src="https://img.shields.io/david/screwmycode/screwmycode-www">
    <img src="https://img.shields.io/david/dev/screwmycode/screwmycode-www">
    <img src="https://img.shields.io/snyk/vulnerabilities/github/screwmycode/screwmycode-www">
</p>

<p align=center>
    <img src="https://img.shields.io/badge/ci-github--actions-yellowgreen">
    <img src="https://img.shields.io/badge/cd-docker-yellowgreen">
</p>

## <img width="15px" src="src/assets/icons/SCRW_CHAMP.svg" /> Context

This project is a tribute to [DJ Screw](https://en.wikipedia.org/wiki/DJ_Screw), inventor of the
[chopped and screwed](https://en.wikipedia.org/wiki/Chopped_and_screwed) mixing style.

May he rest in peace.

<p align=center>
    <img src="https://upload.wikimedia.org/wikipedia/en/7/7d/DJ_Screw.jpeg">
</p>

## <img height=15 src="src/assets/icons/SCRW_SHARE_TXT.svg" /> How To

There are two ways of accessing the service:

- Directly paste the youtube URL into [screwmycode.in](https://screwmycode.in/).
- Append **iscrew** to your youtube URL:
    - `https://www.`**iscrew**`youtube.com/watch?v=ID`

## 🖊 Contribute

```bash
git clone https://github.com/screwmycode/screwmycode-www
cd screwmycode-www
yarn
yarn start
```

## 🐳 Docker

```bash
docker run -d --restart=always --name screwmycode-www -p 8080:80 docker.pkg.github.com/screwmycode/screwmycode-www/screwmycode-www:latest
```
