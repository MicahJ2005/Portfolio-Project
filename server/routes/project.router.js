const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

///router to get required data from SQL Database
router.get('/', (req, res) => {
    const queryText = 'SELECT projects.*, tags.name as tag FROM projects JOIN tags ON projects.tag_id = tags.id';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

  /// I was playing around with this router to see if there was another way of getting the Tag Names
  // router.get('/:id', (req, res) => {
  //   let reqId = req.params.id;
  //   console.log('GET TAGS request for id', reqId);
    
  //   const queryText = 'SELECT projects.*, tags.name as tag FROM projects JOIN tags ON projects.tag_id = tags.id';
  //   pool.query(queryText)
  //     .then((result) => { res.send(result.rows); })
  //     .catch((err) => {
  //       console.log('Error completing SELECT project query', err);
  //       res.sendStatus(500);
  //     });
  // });

/// Post Router for posting new projects to the Database
  router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                      VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.thumbnail,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((error) => {
        console.log('Error completing SELECT project query', error);
        res.sendStatus(500);
      });
  });

///Delete router is requesting a database row delete, based on the id that has been passed
  router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM projects WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

module.exports = router;