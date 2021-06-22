This is a test project for vacancy.

----------------------------------------------------------
Forex Live Wall
----------------------------------------------------------

Forex is a decentralized global market where all the world’s currencies trade. For this exercise, what
we need is a simple live wall for tracking currencies. For free keyless and real time API you may use
https://financialmodelingprep.com/api/v3/forex

Requirements:
1. The project should use npm/yarn package manage r to manage dependencies.
2. The client application should be a single page application with 3 components:
	a. an input field to accept the currency pair (E.g. USD/EUR) as a query string
	b. the search button to submit data
	c. the live wall which should show the query results and live updates
3. You can use Vanilla JS, Angular 8+, React or any other JavaScript UI framework de jour.
4. No strict guidelines for styling - you may use vanilla CSS, any methodology or preprocessor.
5. Business functionality:
	a. The page by default should show the wall empty.
	b. When the user inputs a query string and presses the search button the application should fetch the latest data for the currency pair.
	c. It should poll data on configurable (UI or code, your call) time frame and update the wall with forex changes in real-time.
6. Unit tests using Jasmine, Jest or any other testing framework
7. To simplify things, it is OK to only support Chrome browser.
8. Deliver the code either in git or as a zip file.
9. Make sure to document your project in a simple README file so it would be easier for us to set up, run and test your application.

Guidelines and Tips
● Implement best practices on how you see fit.
● Using typescript is a plus.
● Design the page in such a way that it is user-friendly and responsible. Layout-wise, device-wise, etc.
● The minimum business requirements are defined in step 5 above. But feel free to add components to make the application easier to use (charts, help links, tooltips, etc.).
● Be resourceful. The internet is at your disposal.
● The more you put in the more we can appreciate your time and effort.
● Bring out your inner Da Vinci! Be creative, innovative and original. Make this your masterpiece.


Implementation
----------------------------------------------------------

FOLDERS STRUCTURE
----------------------------
ForexWall\Source\ForexWall				- full application package, .NET 5 solution + React.
ForexWall\Source\ForexWall\ClientApp	- React application.


PREPARATION
----------------------------
1. Install Node.js if not installed: https://nodejs.org/en/
2. Navigate 'ForexWall\Source\ForexWall\ClientApp'
3. Run command line console cmd.exe under administrative privileges.
4. Run batch installation install.cmd
or:
4. npm install
5. npm install --save react-router
6. npm install --save react-router-dom
7. npm install --save bootstrap
8. npm install --save reactstrap react react-dom
9. npm install --save react-chartjs-2 chart.js


HOW TO RUN Forex Live Wall APPLICATION
----------------------------
1. Navigate application folder \ClientApp.
2. Run command line console cmd.exe.
3. npm start
4. Press Enter to run the app in development mode.
5. Open http://localhost:3000 to view it in the browser.

Alternative run (with .NET 5 interaction):
1. Open ForexWall.sln in Visual Studio 2019.
2. Run project.

If you want to test using dummy data (in the case if exchange rate request from API have limits):
1. In the file 'ForexLiveWall.js' change line
	const response = await fetch('https://financial[...]
 to 
	const response = await fetch('forex');

Note: 'forex' is endpoint of .NET 5 MVC controller method with random dummy data.


FINANCIAL MODELING PREP API
----------------------------
Documentation: https://financialmodelingprep.com/developer/docs/
API key: c768145b6c9849a8304f4538df1bb2fc


FEATURES
----------------------------
1. Update interval can be changed on demand without submit.
2. Rate changes indicates with background colors: lower - red, higher - green, no changes - grey.

