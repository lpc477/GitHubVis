# GitHubVis
Liam Collins (17301097) for SWENG Project
## Usage
To use, make sure npm is installed and run code 
```
npm install
```
to install the dependancies.
Then run
```
npm start
```
to begin the react development server.
## Dependencies 
Dependencies include React as the framework, axios to aquire the json from GitHub, the components for the differnt visualisations of the program,lda for the keyword searching, dotenv for token storage, and optional frontend peices such as Bootstrap, Dash, or D3
- [React](https://reactjs.org/) 
- [Axios](https://github.com/axios/axios) 
- IDE i.e. [Atom](https://atom.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Bootstrap](https://getbootstrap.com/2.3.2/index.html)
## Backend
In order to display user information on this react app, we use Axios to pull the searched for username in the github user url. If it is found, the JSON file is sent to the app. It is then parsed using Axios to get the corresponding information sent to the differtn visualisations. It is important to note that one must use their own GitHub access token and add it to the project. For security, on a local machiene I suggesting adding a .env file and assigning the token to a variable there, like so:
### .env
```
ACCESS_TOKEN=XXXXX
```
Pass the token into the app with the following:
```
require ('dotenv').config('./.env');
export const token = process.env['ACCESS_TOKEN'];
```
The token can then be called in the HTTP Get commands with Axios like so:
```
axios.get('https://api.github.com/users/'+this.state.formData.username+'?'+ token).then//data parseing 
```
This way of getting the data is powerful, because it allows for a alot of flexibility for the programmer to do a lot with the massive amount of data GitHub has on each user. 

## Fontend
