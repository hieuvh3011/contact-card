# hieuvh3011/contact-card-application

## Introduction

Hi guys, as you already known, this application is made for the technical assessment of Affinidi. So I will try to make this document as short as possible. The only purpose of this document is to show you how to build and test the application in both Android and iOS

## I don't want to build

If you don't want to build the app, that's fine. Let's check 2 app that I already deployed here. I cannot push the app into store because I do not have enough of time, so I will deploy both of them into Diawi

## I want to build app to check the source code

In that case, please follow these steps
Step 1: clone project from git

```bash
$ git clone https://github.com/hieuvh3011/contact-card.git
```

Step 2: install all dependencies:

```bash
$ yarn install
```

or

```bash
$ npm install
```

Step 3: run on Android or iOS device

```bash
$ npm run android
```

or

```bash
$ npm run ios
```

Step 4: build an APK or AAB file

```bash
$ npm run android:package:release
```

to build APK file, or

```bash
$ npm run android:bundle:release
```

to build AAB file

Step 5: build .ipa file
For this step, please read this article

## Folder structure

This part will describe the folder structure

- `src`: This folder is the main container of all the code inside of the application
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Components folder contains all your application components.
    - `commons`: Folder to store any common component that you use through your app (such as a generic button, text fields, etc).
    - `components`: Each component should be stored inside it's own folder.
      - `some_components.ts`: is a file code for main UI on screen.
      - `component`: is a folder that contain all small components in `some_components` screen. I split it so it make `some_components.js` shorter, easy to read, and we can reuse the components later.
  - `i18n`: Folder that contain localization texts
  - `redux`: contain the logic of redux. I used the redux toolkit, so the redux files will not too much
  - `repository`: Folder to handle all the business logic of the application
  - `route`: folder that contain all of navigation in your application.
  - `util`: helper folder, will contain some helpers, such as color, theme, validation, etc.
- `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.
