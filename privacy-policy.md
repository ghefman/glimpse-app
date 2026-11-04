[← Glimpse](index.md)

# Privacy Policy — Glimpse

_Last updated: 2026-11-04_

Glimpse ("the app") is published by **DeltaWebOS**. This page explains what data the app handles and what it does with it.

## Short version

**Glimpse does not collect, transmit, store, or share any data about you with us or with anyone else.**

The game runs on your local Wi-Fi network (or the host phone's Personal Hotspot): the other players' phones connect directly to the host phone, and nothing goes through a server of ours or of anyone else. The app's only connection to the internet is a check for app updates, described below; it carries no photos, nicknames, scores, or anything else about you or your game.

## How the game works on your network

When you start a game, the host phone runs a small web server that can be reached only on your local network (your Wi-Fi). Players open its address, shown on screen and as a QR code, in their phone's browser.

- The game, including the photos you added, is shown only to devices on the same network that open that address.
- Nothing from the game is sent to the internet. The app contains no analytics, no advertising, and no crash reporting.
- When you close the app, the game server stops.

Anyone on the same Wi-Fi who opens the game address can see the photos in the game, just like anyone in the room can see the TV. Only add photos you are happy to show the people you are playing with.

## Your photos

You choose which photos join the game, using the system photo picker. The app:

1. Copies each photo you pick into its own private storage, resized to a smaller size for the game.
2. Keeps the photo's original file name, date, and size, so you can sort the list.
3. Never changes or deletes anything in your photo library.

Removing a photo in the app (✕ or **Clear all**) deletes the app's copy only. If the photo is on the table in the round being played, its copy is kept until the next time the app starts, so the round can finish. Deleting the app deletes all of its copies.

## What stays on the devices

**On the host phone:** the game copies of your photos, your sort setting, and the current game (players' nicknames and scores), so a game can resume if the app is closed by accident. A saved game older than 3 hours is not resumed. This data never leaves the phone.

**On each player's phone:** the browser remembers the nickname the player typed and a random player number, so they can rejoin the game after a refresh. This is stored in the browser's own storage for the game address and is not sent anywhere else. Clearing the browser's website data removes it.

## Permissions we request

- **Photos:** to let you choose photos for the game. The system photo picker shows your library (on iPhone, iPad and Android), and only the photos you pick are shared with the app.
- **Local Network:** so players' phones on your Wi-Fi (or the host phone's Personal Hotspot) can reach the game.

The app **does not** request access to the camera, microphone, location, contacts, calendars, or health data, and it does not use notifications or background activity.

## App update check

Glimpse is built with the Expo framework, which can deliver bug-fix updates to the app without a new download from the App Store or Google Play. To find them, the app contacts Expo's update server (`u.expo.dev`):

- when the app starts, if the phone is connected to the internet, and
- when you tap **Check for updates** in ☰ → **About**.

The request includes only technical information about the app:

- the app's project identifier on Expo's build service;
- the app's runtime version and update channel (which updates fit this build);
- the platform and its version (for example iOS 26 or Android 16);
- a random install identifier created by the framework on the phone. It is not the Apple or Google advertising identifier, it is not linked to your Apple or Google account, and it is replaced if you reinstall the app.

It never includes your photos, nicknames, scores, or anything you typed. The answer is either "no update" (the usual case) or a new version of the app's code, which the app offers to restart into.

Without internet access the check simply fails, and the game works as before.

## Third-party services

The app contains no third-party analytics, advertising, crash-reporting, or tracking services. The only third party it contacts is Expo, for the update check above. Expo's privacy policy is at <https://expo.dev/privacy>.

## Children

Glimpse is a family game, and anyone may play. The app does not collect any information from anyone, including children under 13.

## Changes to this policy

If we ever change how the app handles data, we will publish an updated policy here with a new "Last updated" date and release a new version of the app.

## Contact

Questions or concerns:

- Email: **<ghefetz@gmail.com>**

---

## Verifying these claims yourself

Privacy promises are easy to make. You can check this one: turn off mobile data on the host phone and disconnect your Wi-Fi router from the internet (or play on a Wi-Fi network with no internet access). The whole game keeps working, because it never needed the internet in the first place; only the update check fails, silently.

---

- [Home](index.md)
- [Support](support.md)
- [Get the app](get/)
