App structure:

App.js loads Redux, Firebase and `src/auth` screens for initial login.

App.js then loads RoboRamsay.js (the main app)

RoboRamsay.js loads `navigation/MenuStack` and `navigation/OrderStack`

The two `navigation` files create a Stack Navigator.

- MenuStack: links Menu (head), ItemViewer, Checkout
- OrderStack: links OrderDashboard (head), EditOrder

All pages are in `screens/test/views`.

The menu utilizes an ItemCell
