const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM projects';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

  router.get('/tags', (req, res) => {
    const queryText = 'SELECT tags.name FROM tags JOIN projects ON projects.tag_id=tags.id GROUP BY tags.name';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });


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