To simply use the app, GO TO https://robo-ramsay.web.app/. No need to run an executable.

The application is available on a hosted website https://robo-ramsay.web.app/ (port will close on 5/30/2021), so it is unecessary to install to run the app locally from your machine, but feel free to follow the guide below to run the repo.

If using the website option, be sure to follow the section [Change App Resolution](#change-app-resolution)

Note: anything after a colon (:) is a terminal command

## Prequisities:

Preface `--global` commands with `sudo` if running in non-permissioned shell.

1. Install git: (see https://git-scm.com/downloads)

2. Install nodejs and npm: (see https://nodejs.org/en/download/)

3. Install yarn package manager using terminal: `npm install --global yarn` 

4. Install expo-cli using terminal: `npm install --global expo-cli`

## Run Application:

1. clone repo into current directory: `git clone https://github.com/agc234/roboramsey_ui.git`

2. cd into root directory: `cd roboramsey_ui`

2. install dependencies with: `yarn install`

3. start app: `expo start`

4. A browser window will open (best if default is Chromium browsers). Click "run in web browser". After a couple minutes, the app should load.
   (Note: the app is supposed to run on mobile, but currently some code does not work on mobile.)

## Change App Resolution:

5. Open developer tools (`CTRL+SHIFT+I`) and change app resolution with the devices button at top or shortcut (`CTRL+SHIFT+M`)

6. Click on "Join in as Guest" to view current screens 

## App structure:

```
    |
    +-----> .expo-shared         // expo build configurations 
    |
    +-----> .firebase            // firebase hosting configuration
    |
    +--+--> assets               // project assets
       |
       +-------> images          // project images, splashscreen, icons
    |
    +-----> documentation        // contains project documentation
    |
    +--+--> src                  // main app
       |
       +---+---> components      // contains all app UI components
           |
           +-------> edit-order  // contains order editor page components
           |
           +-------> menu        // contains menu components
           |
           +-------> orders      // contains order dashboard components
           |
           +-------> test        // contains files for React component unit tests
       |
       +---+---> views           // contains all app UI screens
           |
           +-------> auth        // contains files for landing page UI and authentication
           |
           +-------> customer    // contains files for customer interface
 ```
 
## Running Unit Tests:
- Most unit tests are stored in `./src/components/test`. Simply load the component into another App.js file, renaming the previous one and compiling locally, or run on an Expo web compiler at https://snack.expo.io/.

## Running Integration Tests:
- These weren't completed from the app itself, but from Firebase Test Lab, a third party service. Only configured with private Firebase account. Not accessible to the public.
