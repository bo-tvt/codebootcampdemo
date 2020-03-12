# Code bootcamp demo project
## Setup
### Requirements
 * Node 12
 * Visual Studio Code
### Init the React frontend 
Following the guide at https://create-react-app.dev/docs/getting-started/

npx create-react-app frontend
cd frontend
npm install react-router-dom http-proxy-middleware --save
cd..

#### Clean up the samples
* Clear everything else except .App {} from App.css
* Remove logo.svg
* Clean App.js to look like this 
  //Add code
* Components/Home.js
* Components/NavBar.js
* Components/NavBar.css
* src/setupProxy.js

## Init the Backend
* Create folder backend
* cd backend
* npm init
* Press enter to all
* npm install express body-parser --save
* npm install nodemon --save-dev 
* index.js
* Edit package.json and add to scripts
    "start": "node .",
    "start-dev": "nodemon .",

##Starting development
 cd frontend
 npm install
 npm start

 cd backend
 npm install
 npm run start-dev


