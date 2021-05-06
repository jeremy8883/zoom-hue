# Zoom Hue

Automatically turn on a philips hue light when you have the Zoom application open.

I've created this app for personal use. I didn't want family talking to me whilst I was in an online meeting. I have a Philips Hue light strip attached to my desk. If it's red, I'm in DND mode.

## Getting started

```
mkdir .private
cp ./config.example.js ./.private/config.js
yarn install
```

Update the config file with your Philips Hue information. More information on generating credentials [here](https://developers.meethue.com/develop/get-started-2/).

```
yarn run start
```
