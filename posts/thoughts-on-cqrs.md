---
title: 'Thoughts on CQRS with NestJS'
date: '2021-08-08'
---

When learning about methods to wrangle a complex API structure, CQRS through [NestJS](https://nestjs.com) was one that stood out. Using Command Query Responsibility Segregation with Nest involves using `rxjs` to manage concepts of a Query, Command, and Event Bus. Domain code calls these buses with the appropriate shape for querying data, changing data, or publishing asynchronous events that handle side effects so that these "handlers" are understood to have single responsibilities. In theory, this can help tame a complex system by ensuring each bit of logic is neatly contained.

But on CQRS, Martin Fowler states: "beware that for most systems CQRS adds risky complexity." When you replace service files holistically with CQRS, the amount of boilerplate required becomes a lot to handle. As well, when processing logic that's specific to the domain in question, it seems pretty unnecessary to use CQRS when logic can just be performed in one place that's easy to keep track of.

So where can CQRS fit in with complex API structures?

One of the more "out of the box" useful portions of Nest's CQRS tools is the Event Bus. By simply publishing that events ocurred to the event bus, you can say, "This thing happened, I don't care if there are emails that need to be sent as a side effect, etc". It reminds me of the concept of signals in the Godot game engine. If you for example lose all your health during an instance of a "Battle", you can just emit a signal that says "battle lost", and whatever contains that battle instance will know how to handle that event.

The idea of using queries and commands for fetches and updates can also be used for encapsulating logic for separate entities. This allows logic that's custom to a particular query or command to be perfectly packaged within a handler, and any massaging of data that's necessary as well.

### In conclusion...

CQRS is probably best used minimally if at all in most APIs. Internet of things seems a perfect fit due to the sheer amount of side effects, but most APIs are likely best off by using solid standardized patterns like REST without worrying about CQRS. For APIs that require a deeper complexity however, CQRS can neatly package logic that otherwise can get very unwieldy.
