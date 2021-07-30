## Table of contents

- [The Sponsokit Search UI](#the-sponsokit-search-ui)
- [Building](#building)
- [Available Scripts](#available-scripts)
- [How to Start Locally](#how-to-start-locally)
- [Deployment](#deployment)
- [Layout](#layout)

# The Sponsokit Search UI
This is a simple web application to fetching influencers data.
It has a single page with a table, and a search form for enabling user to find her/his target influencer
using two text and follower counts fields.
Also, the user can see the details of each influencer by clicking on any rows of table.

The main URL of the application is:
> [host]/influencer/list

It automatically redirects ["/", "/influencer] to "/influencer/list".

![Demo](https://user-images.githubusercontent.com/4962803/127638871-c08d8d32-3b52-465f-947d-c7015e24b24b.gif)

## Building

Building The Sponsokit Search UI requires the following tools:

- Git (obviously)
- Node.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

All scripts that are available in create-react-app.

> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
>
> To learn React, check out the [React documentation](https://reactjs.org/).

## How to Start Locally
For starting the project locally, after cloning the project, go to the project dicretory and run the following command:
> npm install

It takes some times, after it finishes, run the below command:
>npm start

The project automatically runs on **localhost:3000**, if the specified port is busy, it asks you to run it
on another port.

## Deployment

For local deployment (the steps for the server deployment are the same in most cases),
you can use nginx as web server.

- First create the production build with this command:

  > npm run build

- Then download the [Nginx](https://nginx.org/en/download.html) and place extracted
  folder somewhere like: _C:/nginx_.

- After that, we must change the configuration file for serving the static files
  generated in step one.
  For this, Open the nginx.conf file located in: extractedPath/conf
  like: _C:/nginx/conf_.

Now assuming our application build folder is the following path:

_D:/projects/the-sponsokit-search-ui/build_

- In the conf file, change server part like below:

```text
server {

    listen       5050;  #or any other ports
    server_name  localhost;

    location / {
        root   "D:/projects/the-sponsokit-search-ui/build";    #the application build folder
        try_files  $uri /index.html;
    }
}
```

Done. Start the Nginx.

The application is accessible from the following location:
> localhost:5050

## Layout
**Web**

![Demo](https://user-images.githubusercontent.com/4962803/127640967-4de6d77a-2a99-45ec-addc-0860b625b104.PNG)
![Demo](https://user-images.githubusercontent.com/4962803/127640977-06cde7d2-1f73-40a3-8853-d13945e2255c.PNG)
![Demo](https://user-images.githubusercontent.com/4962803/127640981-427e8f7d-274b-495b-a350-15606090019b.PNG)

**Mobile**

![Demo](https://user-images.githubusercontent.com/4962803/127640972-3cd3e15d-be56-4e3b-9a5d-8c0491b26c72.PNG)