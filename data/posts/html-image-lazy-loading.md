---
title: 'HTML Image Lazy Loading'
excerpt: 'Images affect the load speed of webpages and contribute to data-usage which can have a negative impact on performance, user experience and google ranking.'
date: 'Apr 04 2022 11:10:39 GMT+0300'
---

Using images on a website helps capture the attention of users, increases user dwell time which is a key factor for google ranking, visually conveys message to the users (Studies show that people remember 80% what they see and only 20% what they read), e.t.c

However, images affect the load speed of webpages and contribute to data-usage. Some images are not immediately on the devise's viewport when the webpage loads, which means that the user has to scroll down the page to be able to view them. 

Since these images are not on the devise's viewport, there's no need to waste data and sacrifice load speed loading them. It would be great if they could be loaded when the user scrolls near them. This is called <b>lazy loading.</b>

Fortunately, the HTML <b>img</b> element has a <b>loading</b> attribute which allows us to achieve this. This attribute has 3 supported values:

<br>

> - <b>auto</b> -> Browser's default loading. Loads the images normally. Same behavior as when no loading specified.

> - <b>lazy</b> -> Instructs the Browser to defer loading of off-screen images until the user scrolls near them.

> - <b>eager</b> -> Loads the images immediately, regardless of where their location on the webpage.

With lazy loading, you can ensure that images are loaded only when needed to be shown. This improves the website's performance, saves data costs, ensures a better user experience and also contributes to ranking higher on google.

Even though lazy loading is great, it should <b>NOT</b> be used on all images. Images that are immediately on device's viewport should be loaded normally.
All images that are immediately on the viewport without scrolling load normally. Those that are far below the device viewport are only fetched when the user scrolls near them.
