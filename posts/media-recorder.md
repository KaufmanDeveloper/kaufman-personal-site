---
title: "The MediaRecorder API"
date: "2022-01-09"
---

The [W3C MediaRecorder API](https://www.w3.org/TR/mediastream-recording/#mediarecorder-api) is an easy to use tool that provides flexible functionality for audio and video recording in front end applications. My first pass with using it to create an audio recording app that saves voice files to Azure was working great. There's some issues to keep in mind when using it however that I hope get addressed in the future.

Out of the box, you can make recordings with the mime type `webm`. You can save these audio files as blobs as an `ogg`, `wav`, `mp3`, or `m4a`. But these files don't seem to play back in Mac and iOS, which is a major issue. I spent a few days trying to figure out the reason these files wouldn't seem to play on Mac. One thing I did to try to gain more knowledge on what was going on was I tried to base64 encode the files through an online encoder, and got a warning saying the files were being recognized as a "video" type.

My best guess was that this translation from a `webm` audio file to a non `.webm` extension wasn't truly translating the file to another format. It was a file that could be played back on Windows and Android, but Mac operating systems were a no go.

### So what were my options?

I tried converting the file to another file format and playing that back on Mac operating systems. That worked. So one option I had was to try and figure out a way to convert the file format. I probably would have tried to do this in the API layer.

What I ended up doing was using an old tried and true Javascript library to record audio called [Recorderjs](https://github.com/mattdiamond/Recorderjs). It can record audio to `wav` that is encoded correctly, and `wav` files can play back in all operating systems without using an application specifically to play back the file. For usage with Ember, this meant using the `vendor` directory and adding an import to `ember-cli-build.js` to specify an import from a non-module JS dependency using the `import` directive. Doing this will also allow me to make changes to the dependency to allow me to compress the audio into a smaller file size, as the library makes pretty large files.

Using `Recorderjs` instead of the `MediaRecorder` API allowed me to keep the API logic that saves audio files to only having to save the blob to Azure instead of also having to convert the file format. I am hoping to be able to revert to using `MediaRecorder` in the future however, as it's a very simple way to record audio on the front end.

### What kind of stuff did I learn?

There are times when the best option is to rip out the tool you're using with another one. Though `Recorderjs` is an old dependency, and I will have to do some tweaking on it for my own purposes, it's one that does everything I need it to do. I also learned that there's a lot more that goes into encoding audio files than I initially thought! Hopefully as `MediaRecorder` matures, it will be a solid out of the box solution for video and audio recordings in web applications.