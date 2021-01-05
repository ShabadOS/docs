---
title: Proofreading
---

import differenceBrowser from "../images/proofreading-difference-example-browser.png"
import differencePdf from "../images/proofreading-difference-example-pdf.png"
import copySnipAndSketch from "../images/proofreading-example-copy-snip-and-sketch.png"
import insertCursorGhIssue from "../images/proofreading-example-insert-cursor-gh-issue.png"
import pasteImageGhIssue from "../images/proofreading-example-paste-image-gh-issue.png"

This tutorial is for users that would like to learn how to improve the digital accuracy of the Shabad OS database. This tutorial will show how to proofread and publicly log differences between different sources and the Shabad OS database.

## Concept

The Shabad OS database contains bani (hymns) from the Sikh Gurus and various writers of the time and place. Upon this there are translations, expositions, and descriptions from various authors whose work is potentially copyrighted.

:::note
Our proofreading effort is to accurately capture these works as they were written without modification.
:::

It is difficult to choose one "correct version" with multiple saroops of Sri Guru Granth Sahib ji having slight differences from one another. As such we are currently logging these differences and setting a "basic truth" upon which future discussions can take place.

The Shabad OS [database viewer](https://database.shabados.com) helps submit differences between bani that is digitally stored and physically printed or electronically published.

:::note
Proofreaders cannot change the Shabad OS database.

- Proofreaders can create issues (i.e. reference tickets)
- Proofreaders can take zero responsibility to fact check sources.
- Proofreaders can easily compare two passages.

Proofreaders cannot modify bani — whether accidentally or maliciously. Proofreaders cannot spoof sources — images and publishing details of sources are required. Proofreaders cannot act alone — our process requires a second, trusted party to verify and enact changes.

:::
Anyone can note deviations between two passages, safely and easily, helping improve the accuracy of Shabad OS.

## Practical

### Checklist

To proofread, you need two things:

1. Source (e.g. PDF of Sri Guru Granth Sahib published on SGPC's website). Here are some [proofs](https://github.com/ShabadOS/database-viewer#proofs-for-bani) that can be used as a source.
2. [GitHub account](https://github.com/join).

:::note
Any verifiable source can be used if given proper attribution of it's publishing. (i.e. edition, author, publisher, website origin, etc).
:::

### View the Proof

We are calling, for example, the PDF document consisting of physical page images showing what was actually published in print a "proof". For this example tutorial we will use [Kabit Sawaiye Bhai Gurdas Ji Steek 3](http://sikhbookclub.com/Book/Kabit-Sawaiye-Bhai-Gurdas-Ji-Steek3).

### Use the Database Viewer

The database viewer shows what is digitally saved and is shown on projectors or mobile phones with Shabad OS. Conversion mistakes caused by human error or computer OCR (optical character recognition) are some of the reasons we must do proofreading. The goal is to make sure the digital version is accurate.

1. Go to https://database.shabados.com.
2. Click on "Kabit Savaiye Bhai Gurdaas Jee".
3. Use the left and right arrows or the "seekbar/trackbar" at the bottom of the page to choose a "page" or, in this case, a kabit pauri.
4. Use the `<Tab>` key to highlight the next line, and `<Shift+Tab>` to highlight the previous line.
5. Click a line (or hit enter) to open an issue on GitHub.

### Use GitHub

As you can see from the last step, we use GitHub to submit any proofreading differences. See an [example issue](https://github.com/ShabadOS/database/issues/1218).

In this example there is a link to the database viewer and an image of the physical proof. This lets others see how the bani is digitally displayed in Shabad OS and also see what is physically printed in the published volume.

Furthermore, the image of the physical proof highlights the relevant area to help others quickly spot the difference. And captures the page number and contextual bani to help others fact check the proof with other printed sources.

### Compare the Database and the Proof

It may help to dock both the web browser containing the database viewer and the pdf reader containing the proof on both halves of your screen.

### Open an Issue (Reference Ticket)

The short version is to document any differences and open an issue on GitHub for reference. Here is an example difference spotted between the database (browser) and the proof (PDF reader).

<img alt="Example of line not matching in browser" src={differenceBrowser} width="500" />

<img alt="Example of line not matching in PDF reader" src={differencePdf} width="500" />

1. Take a screenshot of the PDF reader containing the printed page number and difference.

:::tip
Windows 10 users can open “Snip & Sketch” from the start menu or with the Win+Shift+S hotkey to capture images. See [​here​](https://support.microsoft.com/en-us/help/4488540) for more help.
:::

:::tip
macOS users can read [this​](https://support.apple.com/en-us/HT201361) article to get help on capturing images.
:::

2. Click the thumbnail of the screenshot which briefly appears in the corner of your screen.

3. Highlight the difference.

4. Copy the marked up image.

   <img alt="The copy button in Snip & Sketch for Windows 10" src={copySnipAndSketch} width="200" />

5. In the database viewer (Figure 1), click the highlighted line or hit enter.

6. Click the last empty line in the textbox (after the words ​*Add details & attach image(s) below*), so that the blinking text cursor is at the very end.

   <img src={insertCursorGhIssue} width={500} />

7. Paste the marked up image.

   <img src={pasteImageGhIssue} width={500} />

8. Click the green button "Submit new issue".
