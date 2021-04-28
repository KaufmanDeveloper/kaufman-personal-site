---
title: "Thoughts on Mocking API Data in the Front End"
date: "2021-04-27"
---

When I had a stronger focus on full stack development, I naturally discovered that when I was developing new features or apps, taking a UI first approach helped me experiment with creating the best user experience possible before I had to take steps to try to abstract the data I'd need.

Reading Dan Abramov's blog, it seems he came to a similar conclusion [here](https://overreacted.io/what-are-the-react-team-principles/#ui-before-api).

Thankfully, when I moved to React from Ember and became a full time Front End developer, Sam Selikoff was developing a version of [Mirage](https://miragejs.com/) that could be used for any front end framework. That way, I could use client side mocking to prove out features in the UI that were using API definitions I could iterate on.

Mocking is also super useful for feature flagging to develop a feature in the app that's not yet ready on the API side after proving out its viability. I've also used the timing features Mirage exposes to debug race conditions.

It's also great for automated tests and Test Driven Development, because it can intercept requests in your testing environment, allowing asynchronous data fetching in the same way it would be doing so with an API, allowing you to properly isolate your tests to the UI portion of the code.

### Be careful though...

Mirage is client side, so you can deploy it to prove out features to business folks. This is great because it lets you show progress and allows you to get feedback on what you've built on your end.

However, I highly recommend making it very obvious that it's mock data that's being used. Red text at the top of the screen saying `THIS IS MOCK DATA` would probably be a good way in a remote environment to ensure all parties are aware that there is no API backing the UI. Overall I'd say it's probably best to avoid including Mirage in deployment environments at all, and keeping it to development environments and potentially PR builds.
