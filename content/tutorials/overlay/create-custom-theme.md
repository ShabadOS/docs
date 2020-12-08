---
title: Create a Custom Overlay Theme
sidebar_label: Create a Custom Theme
---

This tutorial is for users wishing to customize the appearance of the overlay. This tutorial will go through an example of copying and modifying an existing theme.

## Concept

The overlay endpoint can be manipulated by styling the html with CSS. This customization is done in a markup language similar to HTML. The layout, colors, and fonts can all be described in various ways using CSS. With advanced mastery of CSS, one could even add content to the HTML using CSS.

## Practical

The style files end in extension `.css` (e.g. `default.css`). These files are located in the `overlay` folder based on the operating system of the device running Shabad OS:

- Windows: `%appdata%\Shabad OS\overlay`
- macOS: `~/Library/Application Support/Shabad OS/overlay`

:::tip
Use a file manager to see the `.css` files. For Windows type in the address bar of File Explorer. For macOS use the global menu item _Go > Go To Folder_ (_cmd+shift+g_) in the Finder.
:::

:::tip
By default the OS hides file extensions like `.txt`, `.exe`, and `.css`. It is helpful to see these file extensions when working with CSS files, especially on macOS which will sometimes change the file extension to something like `.txt` or `.html` on it's own.
:::

### Step 1: Open an existing CSS file

Any plain text editor can open CSS files. On Windows there is _Notepad_ and on macOS there is _Text Edit_. Once you've opened one of the Shabad OS Overlay Theme CSS files, you will see lines of code such as:

```css
:root {
  --background-color: #19203c;
}

.app {
  width: 100vw;
  text-align: center;
}

.overlay {
  padding: 1vh 1vw;
  background-color: var(--background-color);
  min-height: 9vh;
}
```

At a higher level there are descriptions for root, app, and overlay. Inside root there is a variable defined as "background-color". Inside the overlay class we've given it this background color via the variable. There are units of measure for width and padding in percentages of viewport (i.e. 100% viewport width, 1% viewport height, 1% viewport width), where the viewport is the usable space of the browser window.

### Step 2: Modifying CSS files

First copy any of the existing themes that you would like to modify. The file name will be used as the name of the theme in Shabad OS. Select the newly copied overlay theme from the dropdown in _Shabad OS > Settings > Overlay_.

Open the CSS file in a text editor. Colors and their opacity are defined by values outlined [here](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

:::tip
Try using a color picker or a website like [DuckDuckGo](https://duckduckgo.com/?q=color+picker&t=ffab&ia=answer) to change the background color of the overlay theme.
:::

There are tutorials to learn CSS without any prior experience from Mozilla's handy developer docs: https://developer.mozilla.org/en-US/docs/Web/CSS.

### Step 3: Inspect the Overlay URL

Open the overlay url in Google Chrome or Mozilla Firefox (see [endpoints](./../url-endpoints.md) for help). Both browsers have an inspect tool that lets you see the html and modify the CSS in a sandbox. If you've found something you like, you can add it to your CSS file for persistence. Otherwise if you've made a mistake and need to start over, simply refresh the page.

See how to inspect the overlay url in your browser:

- "[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)" for Google Chrome
- "[Open the Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Open_the_Inspector)" for Mozilla Firefox

This inspector can show you what your CSS theme file is changing. Choosing a color from within the inspect tool can show how it impacts the rest of the theme.
