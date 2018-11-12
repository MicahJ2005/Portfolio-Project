# React Redux with Sagas

For this weekend challenge, I built a portfolio of previous projects

## Setup

I have created the below database and called it "portfolio"

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
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');
```


## Notes

### Tags

Each project is linked to a tag_id, which is joining two sparate forms in my SQL table

### Screenshots

I have taken a few screenshots of my previous projects. The current functioning mode allows the user to import a URL picture, which will display in the thumbnail section of the Project Page

**Do not implement image upload for base mode.**


## Feature List

To the best of my knowledge, the following basemode features have been completed and are functioning correctly.


### Project Page

- [ x ] Client side route that displays projects that are stored in the database
- [ x ] Each project should conditionally render a name, description, thumbnail, website, date complete and a tag. Many of the fields are optional, only show properties that aren't null.
- [ x ] Include a link to GitHub that opens in a new window
- [ x ] Add your name at the top of the page
- [ x ] Use Sagas for API requests to your server

### Admin Page

- [ x ] Client side route that displays a form allowing you to add a new project to your portfolio
- [ x ] Include a drop down menu with a list of tags
- [ x ] Send data to the server and notify the user of success or failure
- [ x ] List projects by name and allow the user to delete them
- [ x ] Include a button that navigates to the project page

### General Tasks

- [ x ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features. //**I committed often, but acknowledge I did not use branches as often as I intended **
- [ x ] Comment your code.
- [ x ] Update this README to include a description of the project in your own words.

## Wireframes

My projects looks much different than the wireframe provided, but the general functionality and layout is similar

### Project Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/project_page.png" width="560">


### Admin Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/admin_page.png" width="560">

## Stretch Goals

- [ ] Use the GitHub API to get user information to display at the top of the page
- [ x ] Improve styling on the page using Material UI
- [ ] Include a form on the admin page for adding new tags
- [ ] Implement additional features of the GitHub API
