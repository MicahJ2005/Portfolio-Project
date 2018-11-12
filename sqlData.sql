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

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Micah Johnson', 'Pizza Project', 'thumbnail', 'https://github.com/MicahJ2005/redux-pizza-parlor', 'https://github.com/MicahJ2005', '11-2-2018', '5');

SELECT * FROM projects ;

UPDATE projects SET thumbnail='https://media-cdn.tripadvisor.com/media/photo-s/11/8f/20/d6/food-track-chennai-pizza.jpg' WHERE thumbnail=thumbnail;

SELECT tags.name, tags.id FROM tags
JOIN projects ON projects.tag_id=tags.id
GROUP BY tags.name, tags.id;