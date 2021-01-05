---
title: Get started with Overlays
sidebar_label: Get started
---

import aboutUrl from "../images/shabados-about-url.png"
import taskManager from "../images/ip-address-windows-task-manager.png"

This tutorial is for users that want to show the currently activated line as livestream captions, video editing slides, and alternate displays (TV, Projector, Chromecast). This tutorial shows how to modify the overlay url in Shabad OS and how to access it through a browser.

## Concept

There is an html page containing the information related to the currently activated line in Shabad OS. This html page can be manipulated by styling called CSS. Users can also customize this page by customizing the CSS (i.e. [Create a Custom Overlay Theme](./create-custom-theme.md)). This html page requires javascript, which is supported by most modern web browsers.

Users can use Google Chrome to open the overlay URL and then cast it to a chromecast. Users could use built in web browsers in some smart TVs or modern consoles to accesss the overlay URL. Users could simply use the web browsers on their laptop/PC to make images to fit on their video editors as a captions slide. Mostly we have helped users integrate a web browser with their live streaming software for live captioning.

## Practical

### Step 1: Use the Overlay URL

The Overlay URL can be used in a browser. E.g. open and use a browser on a second projector or add a browser to live stream broadcast software. In both examples, the Overlay URL will point to the customized overlay.

### Step 2: Pick an Overlay

In _Shabad OS > Settings > Overlay_ there is a dropdown called _Overlay Name_. This allows users to change the appearance of an overlay. There are overlay themes for presentation, top captions, and subtitles.

:::tip
To give an idea of how flexible Overlays are, try the "Avani Conference" theme. This displays the information on the left hand side allowing a video or live presentation to play on the right.
:::

:::tip
Overlays are designed around filling the screen, but a broadcast element could resize or reposition the Shabad OS overlay in creative ways. If you took the Avani Presentation overlay and resized the element in OBS/Wirecast it would act similar to the Avani Conference theme. There are creative ways to manipulate these basic themes in other software.
:::

:::tip
[Customize](./create-custom-theme.md) an overlay with the provided example overlay.
:::

### Step 3: Toggle visible information

Similar to choosing what is available on the presenter, a user toggles fields for the overlay. If one were using the Shabad OS display on one projector they could use the overlay on another projector to show different fields when presenting on two projectors (i.e. gurbani + punjabi on left screen and gurbani + english translation and pronunciation on right screen).

## Troubleshooting

If you cannot find the URL in _Shabad OS > Settings > Overlay_ then continue reading the following two methods to manually find the device's URL. After you find the URL you need to append "/overlay" to the end of the URL in order to access the overlay as explained in [URL Endpoints](../url-endpoints.md).

The device running Shabad OS has an IP address. In production, Shabad OS is available from port 1699 of this IP address. This combination of IP address and port can be used in most web browsers.

If the same device is running Shabad OS, you may simply use `localhost` or `127.0.0.1` for the IP address (i.e. with port: `http://localhost:1699/` or `http://127.0.0.1:1699/`). If this is the case, you do not need to find the device's IP address on the network.

Otherwise, if you'd like to connect through the same network to Shabad OS being used on a different device, you may find the IP address of that device from _Shabad OS > Settings > About_ or _Shabad OS > Settings > Overlay_.

<img src={aboutUrl} alt="Settings About URL" width={500} />

Find the IP Address in Shabad OS

:::tip
Windows 10 users can view the _Task Manager_ (either right click the taskbar or use the hotkey ctrl+shift+esc) to find the IP address. Use the _Performance_ tab and select the Ethernet/Wi-Fi being used to connect to the network in the Task Manager.

<img src={taskManager} alt="Task Manager" width={500} />

Finding the IP Address on Windows 10
:::

:::tip
macOS users can view _System Preferences > Network_ (found from the apple icon in the menubar). Then select the Ethernet/Wi-Fi being used to connect to the network.
:::
