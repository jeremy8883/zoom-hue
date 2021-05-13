# Zoom Hue

Automatically turn on a philips hue light when you have the Zoom application open.

I've created this app for personal reasons. I have a Philips Hue light strip attached to my desk. If it's turned on, and red, it warns others in the house that I'm on video.

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

## Other scripts

List all lights

```
yarn run list
```

Show detailed information for a single light

```
yarn run info
```

Turn a light on/off

```
yarn run toggle 1
```

Cycle through a list of pre-defined colours.

```
yarn run cycle 1
```
