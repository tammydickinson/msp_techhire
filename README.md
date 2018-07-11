## Project Title
MSP TechHire is an amazing program that partnered with several high-quality advanced learning programs and regional companies to train and hire a more diverse community in technology fields in the Saint Paul and Minneapolis area. MSP TechHire asked us to create a full-stack application to help track student success supported by the program from MSP TechHire's partner organizations. They also needed a way to transfer this data from their partners to the program quarterly. Finally, MSP TechHire wanted us to find a way to access the data uploaded by their partner organizations in order to show State Representatives ROI, efficient ways to access specific data for meetings, seamless ways to get data to see how they could improve the program for MSP TechHire and their partners, and quick ways to show potential sponsors how well the program is working in the community.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Create your database and tables using .mock-data/msp-mock-database.sql. The database in the code is named msp_techhire. If you would like to name your database something else, you will need to change msp_techhire to the name of your new database name in server/modules/pool.js  Start the server.

Run `npm install`

Create a .env file at the root of the project and paste this line into the file:

`SERVER_SESSION_SECRET=superDuperSecret`

While you're in your new .env file, take the time to replace superDuperSecret with some long random string like 25POUbVtx6RKVNWszd9ERB9Bb6 to keep your application secure. Here's a site that can help you: https://passwordsgenerator.net/. If you don't do this step, create a secret with less than eight characters, or leave it as superDuperSecret, you will get a warning.

Start postgres if not running already by using brew services start postgresql.

Run `npm run server` in your terminal.

Now that the server is running, open a new terminal tab with cmd + t and run `npm run client`

Navigate to `localhost:3000`

Prerequisites
What things you need to install the software and how to install them

Give examples
Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc