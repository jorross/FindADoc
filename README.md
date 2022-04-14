# Find-A-Doc

## Project Requirements

Our group used everything we’ve learned over the past six modules to create a real-world full-stack application that we’ll be able to showcase to potential employers. The user story and acceptance criteria for the project are listed below; however, the project had to fulfil the following requirements:

* Use Node.js and Express.js to create a RESTful API.

* Use Handlebars.js as the template engine.

* Use MySQL and the Sequelize ORM for the database.

* Have both GET and POST routes for retrieving and adding new data.

* Use at least one new library, package, or technology that we haven’t discussed.

* Have a folder structure that meets the MVC paradigm.

* Include authentication (express-session and cookies).

* Protect API keys and sensitive information with environment variables.

* Be deployed using Heroku (with data).

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## User Story - Patient

```md
AS A patient who is sick
I WANT to log in to my own portal
SO THAT I can pull up a doctor's schedule to find a doctor and create an appointment
```

## Acceptance Criteria - Patient

```md
GIVEN a CMS-style doctor/patient web portal
WHEN I visit the site for the first time
THEN I am presented with a homepage, which includes the option to log in using an email address and password if already registered, and the option to create a new account if this is the first time I am accessing the site
WHEN I click on the "Sign up here" link
THEN I am taken to a registration page where I can create an account
WHEN I click on any other links on the registration page
THEN I am prompted to either log in sign up
WHEN I log in
THEN I am presented with a scheduler where I can set up an appointment with a doctor from a list of available slots
WHEN I click on the signout link
THEN I am signed out of the application
```

## User Story - Doctor

```md
AS A doctor
I WANT to log in to my own portal
SO THAT I can set my appointment availability
```

## Acceptance Criteria - Doctor

```md
GIVEN a CMS-style doctor/patient web portal
WHEN I visit the site for the first time
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
THEN I am presented with the homepage, which includes the option to log in
WHEN I click on the profile option
THEN I am taken to the homepage
WHEN I click on the scheduler 
THEN I can edit or add new meetings
WHEN I am signed in to the site
THEN I see navigation links for the homepage, and the option to log out
```

## Technologies Used

* Node.js
* Express.js
* Nylas scheduler API
* Bootstrap.js
* Handlebars.js
* Sequelize
* MySQL DB
* JawsDB

## Presentation

Here is a *[Link to our Presentation](https://docs.google.com/presentation/d/1mn6J_7nnp4Pgume-fF4Xr6EI3VFb1WtJK0Juhu4Fpbc/edit?usp=sharing)*.

## Screenshots

Login:
![Find-A-Doc Login](/assets/images/FindADoc_Login.png "Find-A-Doc Login")

Registration:
![Find-A-Doc Registration](/assets/images/FindADoc_Registration.png "Find-A-Doc Registration")

Doctor View (Scheduler):
![Find-A-Doc Doctor View](/assets/images/FindADoc_Doctor.png "Find-A-Doc Doctor View")

Patient View (Doctor Selector):
![Find-A-Doc Patient View](/assets/images/FindADoc_Patient.png "Find-A-Doc Patient View")


## Links to Deployed Application

* [Heroku App](https://find-a-doc.herokuapp.com/login)

* [GitHub Repo](https://github.com/jorross/FindADoc)
