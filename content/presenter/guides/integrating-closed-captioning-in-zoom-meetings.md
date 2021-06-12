---
title: Integrating closed captioning in Zoom Meetings
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import zoomSettingsClosedCaptioning from '@site/static/img/zoom-settings-closed-captioning.png'
import zoomMeetingControlsClosedCaption from '@site/static/img/zoom-meeting-controls-closed-caption.png'
import shabadosZoomPanel from '@site/static/img/shabados-zoom-panel.png'

<p class="lead">As a meeting host, you can add closed captions to Zoom meetings by providing Shabad OS Presenter with the caption URL.</p>

## Enabling closed captioning in the Zoom web portal

Closed captions can be provided by the host of a Zoom meeting. Before beginning the Zoom meeting, the host should enable closed captions from the online Zoom web portal.

[See the official Zoom article about closed captioning >](https://support.zoom.us/hc/en-us/articles/207279736)

1. Open the [**Zoom web portal Settings**](https://zoom.us/profile/setting).
2. In the **Meeting** tab, enable **Closed captioning**.

<img src={zoomSettingsClosedCaptioning} width={500} />

## Starting closed captioning in a Zoom meeting

1. In a Zoom meeting that you are hosting, move your mouse in the Zoom window to display the **in-meeting controls** at the bottom.
2. Click **Closed Caption** from the in-meeting controls. You may have to use the **More** menu (...) to find it.
3. Under "Use a 3rd party CC service", click the **Copy the API token** button.

<img src={zoomMeetingControlsClosedCaption} width={500} />

## Sharing the Zoom API token with Shabad OS

1. In the Shabad OS controller, click the cog/gear to open the **Settings** window.
2. Select **Closed Captioning** in the left pane.
3. Where it says **Zoom API Token**, paste the URL from Zoom.
4. Click anywhere outside the **Zoom API Token** text input to save changes. You will see a checkmark as an indication that the input was saved.

<img src={shabadosZoomPanel} width={500} />

## Teaching participants to use closed captioning

<Tabs
defaultValue="winmac"
values={[
{label: 'Windows / macOS', value: 'winmac'},
{label: 'Android / iOS', value: 'andios'},
]}>
<TabItem value="winmac">

**Viewing Closed Captions**

1. After joining a meeting, you will see a notification in the meeting controls above **Closed Caption**.
2. Click **Closed Caption** to start viewing closed captioning.

:::note
The subtitles can be moved by clicking and dragging them in the meeting window. The caption size can also be adjusted in Video Settings > Accessibility.
:::

**Opening the Full Transcript**

From the **Closed Caption** menu, click "View Full Transcript".

</TabItem>
<TabItem value="andios">

**Viewing Closed Captions**

1. Tap the **Settings** icon (cog/gear).
2. Tap **Meeting**, then enable **Closed Captioning**.

**Opening the Full Transcript**

1. Tap the **More** menu (...).
2. Tap **View Full Transcript**.

</TabItem>
</Tabs>

## Troubleshooting

If you cannot find **Closed Caption** in the in-meeting controls, make sure you checked the **More** (...) menu.

[Read more about in-meeting controls >](https://support.zoom.us/hc/en-us/articles/201362603)
