# 🐣 Gatsby Firebase Starter

[![Build Status](https://travis-ci.org/the-road-to-react-with-firebase/react-gatsby-firebase-authentication.svg?branch=master)](https://travis-ci.org/the-road-to-react-with-firebase/react-gatsby-firebase-authentication) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-react-with-firebase/react-gatsby-firebase-authentication.svg)](https://greenkeeper.io/)

Your minimal yet extensive authentication starter project in Gatsby.js with Firebase and plain React.

* Powered by [Gatsby](https://github.com/gatsbyjs/gatsby)
* [Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
* [Live Version of half of the Tutorial](https://react-firebase-authentication.wieruch.com/)

## Variations

* [Only React Version](https://github.com/the-road-to-react-with-firebase/react-firebase-authentication)
* [Redux Version](https://github.com/the-road-to-react-with-firebase/react-redux-firebase-authentication)
* [MobX Version](https://github.com/the-road-to-react-with-firebase/react-mobx-firebase-authentication)
* [Firestore Version](https://github.com/the-road-to-react-with-firebase/react-firestore-authentication)
* [Semantic UI Version](https://github.com/the-road-to-react-with-firebase/react-semantic-ui-firebase-authentication)

## Features

* uses:
  * only React (**Gatsby.js**)
  * firebase
* features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Password Change
  * Verification Email
  * Protected Routes with Authorization
  * Roles-based Authorization
  * Social Logins with Google, Facebook and Twitter
  * Linking of Social Logins on Account dashboard
  * Auth Persistence with Local Storage
  * Database with Users and Messages

## License

### Commercial license

If you want to use this starter project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Purchase an commercial license for different team sizes:

* [1 Developer](https://gum.co/react-with-firebase-starter-pack-developer)
* [Team of up to 8 Developers](https://gum.co/react-with-firebase-starter-pack-team)
* [Unlimited Developers of an Organization](https://gum.co/react-with-firebase-starter-pack-organization)

It grants you also access to the other starter projects in this GitHub organization.

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use this starter project under the terms of the GPLv3.

## Installation

* `git clone https://github.com/the-road-to-react-with-firebase/react-gatsby-firebase-authentication.git`
* `cd react-gatsby-firebase-authentication`
* `npm install`
* save the [Firebase credentials](#firebase-configuration)
* setup the [security rules](#security-rules)
* `npm start`
* visit http://localhost:8000

Get an overview of Firebase, how to create a project, what kind of features Firebase offers, and how to navigate through the Firebase project dashboard in this [visual tutorial for Firebase](https://www.robinwieruch.de/firebase-tutorial/).

### Firebase Configuration

* copy/paste your configuration from your Firebase project's dashboard into one of these files
  * *src/components/Firebase/firebase.js* file
  * *.env* file
  * *.env.development* and *.env.production* files

The *.env* or *.env.development* and *.env.production* files could look like the following then:

```
GATSBY_API_KEY=AIzaSyBtxZ3phPeXcsZsRTySIXa7n33NtQ
GATSBY_AUTH_DOMAIN=react-firebase-s2233d64f8.firebaseapp.com
GATSBY_DATABASE_URL=https://react-firebase-s2233d64f8.firebaseio.com
GATSBY_PROJECT_ID=react-firebase-s2233d64f8
GATSBY_STORAGE_BUCKET=react-firebase-s2233d64f8.appspot.com
GATSBY_MESSAGING_SENDER_ID=701928454501
```

### Activate Sign-In Methods

![firebase-enable-google-social-login_640](https://user-images.githubusercontent.com/2479967/49687774-e0a31e80-fb42-11e8-9d8a-4b4c794134e6.jpg)

* Email/Password
* [Google](https://www.robinwieruch.de/react-firebase-social-login/)
* [Facebook](https://www.robinwieruch.de/firebase-facebook-login/)
* [Twitter](https://www.robinwieruch.de/firebase-twitter-login/)
* [Troubleshoot](https://www.robinwieruch.de/react-firebase-social-login/)

### Activate Verification E-Mail

* add a redirect URL for redirecting a user after an email verification into one of these files
  * *src/components/Firebase/firebase.js* file
  * *.env* file
  * *.env.development* and *.env.production* files

The *.env* or *.env.development* and *.env.production* files could look like the following then (excl. the Firebase configuration).

**Development:**

```
GATSBY_CONFIRMATION_EMAIL_REDIRECT=http://localhost:3000
```

**Production:**

```
GATSBY_CONFIRMATION_EMAIL_REDIRECT=https://mydomain.com
```

### Security Rules

In the Firebase console, go to Database, select "Realtime Database" -> Rules, and paste the rules below:

```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])",
        ".write": "$uid === auth.uid || root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])"
      },
      ".read": "root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])",
      ".write": "root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])"
    },
    "messages": {
      ".indexOn": ["createdAt"],
      "$uid": {
        ".write": "data.exists() ? data.child('userId').val() === auth.uid : newData.child('userId').val() === auth.uid"
      },
      ".read": "auth != null",
      ".write": "auth != null",
    },
  }
}
```

## Setup via Gatsby CLI

* `gatsby new react-gatsby-firebase-authentication https://github.com/the-road-to-react-with-firebase/react-gatsby-firebase-authentication.git`
* `cd react-gatsby-firebase-authentication`
* `npm install`
* `gatsby develop`
* visit http://localhost:8000
