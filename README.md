# React Redux with Sagas

For this weekend challenge, you'll be building a portfolio site to showcase your work. 

## Setup

1. Create a database table named `portfolio`
1. Run the following SQL using the `portfolio` database:

```SQL
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML')
```

1. `npm install`
1. `npm run server`
1. `npm run client`

## Feature List

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you.

For base mode, you should only include **one** tag per project. This gives you a one to many relationship. We'll cover many to many SQL queries next week. Do not implement image upload for base mode. You can include thumbnail images in the `public/images` folder. Take a screenshot of your project by using `Command-Shift-4` on your mac. It turns the cursor into a crosshair, which you can drag to select a portion of your screen to capture. The image will appear on your desktop.

### Project Page

- [ ] Client side route that display projects that are stored in the database
- [ ] Each project should conditionally render a name, description, thumbnail, website, date complete and a tag. Many of the fields are optional, only show properties that aren't null.
- [ ] Include a link to GitHub that opens in a new window
- [ ] Add your name at the top of the page
- [ ] Use Sagas for API requests to your server

### Admin Page

- [ ] Client side route that displays a form allowing you to add a new project to your portfolio
- [ ] Include a drop down menu with a list of tags
- [ ] Send data to the server and notify the user of success or failure
- [ ] List projects by name and allow the user to delete them
- [ ] Include a button that navigates to the project page

### General Tasks

- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Wireframes

> NOTE: Feel free to modify the styling and layout of content on the page. 

### Project Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/project_page.png" width="560">

### Admin Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/admin_page.png" width="560">

## Stretch Goals

- [ ] Use the GitHub API to get user information to display at the top of the page
- [ ] Improve styling on the page using Material UI
- [ ] Include a form on the admin page for adding new tags
- [ ] Implement additional features of the GitHub API
