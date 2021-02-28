---
title: "Using React Beautiful Drag n Drop"
date: "2020-02-27"
---

[React Beautiful Drag n Drop](https://github.com/atlassian/react-beautiful-dnd) is a fantastic tool for implementing Kanban tools in your application. It supports cross column drag and drop, though it doesn't support x and y coordinate drag and drop like a library like [react-draggable](https://github.com/STRML/react-draggable).

Detecting if element is currently being dragged or dragged over is built in and makes conditional styling simple. Having built in methods for defining drag handles also reduces the complexity of implementing those.

### API considerations

- Optimistic updates are probably best, with toast messages for reporting API errors
- It may be simplest to use ordered lists of items within `Column` objects, though this would require two API calls per move action
