Note: anything after a colon (:) is a terminal command

Prequisities:

1. Install nodejs and npm: (see https://nodejs.org/en/download/)

2. Install yarn package manager: npm install --global yarn 

3. Install expo-cli: npm install --global expo-cli 

Run Application:

1. cd into root directory

2. create node_modules folder: yarn

3. start app: expo start 

4. A browser window will open. Click "run in web browser". After a couple minutes, the app should load.
   (Note: the app is supposed to run on mobile, but currently some code does not work on mobile. We are working on this.)

5. Click on "Join in as Guest" to view current screens 



App structure:

App.js loads Redux, Firebase and `src/auth` screens for initial login.

App.js then loads RoboRamsay.js (the main app)

RoboRamsay.js loads `navigation/MenuStack` and `navigation/OrderStack`

The two `navigation` files create a Stack Navigator.

- MenuStack: links Menu (head), ItemViewer, Checkout
- OrderStack: links OrderDashboard (head), EditOrder

All pages are in `screens/test/views`.

The menu utilizes an ItemCell
