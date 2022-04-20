---
title: 'HTML Image Lazy Loading'
excerpt: 'Using images on a website comes with a number of advantages: Helps capture the attention of users, increases user dwell time which is a key factor for google ranking, visually conveys message to the users (Studies show that people remember 80% what they see and only 20% what they read), e.t.c'
date: 'Apr 04 2022 11:10:39 GMT+0300'
---



However, images affect the load speed of webpages and contribute to data-usage which in turn can hurt your site's ranking on google and give your visitors a bad user experience. Therefore, the need to control how images are loaded to ensure optimal performance and great user experience.

Some images are not immediately on the devise's viewport when the webpage loads, which means that the user has to scroll down the page to be able to view them. 

Since these images are not on the devise's viewport, there's no need to waste data and sacrifice load speed loading them. It would be great if they could be loaded when the user scrolls near them. This is called <b>lazy loading.</b>

Fortunately, the HTML <b>img</b> element has a <b>loading</b> attribute which allows us to achieve this. This attribute has 3 supported values:

<br>

> - <b>auto</b> -> Browser's default loading. Loads the images normally. Same behavior as when no loading specified.

> - <b>lazy</b> -> Instructs the Browser to defer loading of off-screen images until the user scrolls near them.

> - <b>eager</b> -> Loads the images immediately, regardless of where their location on the webpage.

With lazy loading, you can ensure that images are loaded only when needed to be shown. This improves the website's performance, saves data costs, ensures a better user experience and also contributes to ranking higher on google.

![Image Lazy loading](/images/posts/image-lazy-loading.jpeg)

Even though lazy loading is great, it should <b>NOT</b> be used on all images. Images that are immediately on device's viewport without scrolling should be loaded normally. Those that are far below the device's viewport can be fetched only when the user scrolls near them with lazy loading.

<br>

Thanks for reading!