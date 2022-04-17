const express = require('express');

const router = express.Router();

// first endpoint
router.get('/', (req,res) => {
const user = req.query.user;
res.send(user + "!");
})

const users = [];

router.post('/create_user', (req, res) => {
   // console.log(req.body);

    const { user } = req.body;

    // testing purpose - hash it and store it otherwise
    users.push({ username: user.username, password: user.password});

    //console.log(users);
    
    res.json({ loggedIn: true, status: 'Status everything went well'});

})

router.get('/users', (req,res) => {
    res.json(users);
})

router.delete('/delete', (req,res) => {
 const {username, password} = req.body;

 const existingUser = users.find(user => user.username === username && user.password === password)

 console.log(existingUser);

 if(!existingUser) {
   res.statusCode(401).json({ errorStatus: 'Credentials did not match' });
 }

 //get rid of user:
 users.splice(users.indexOf(existingUser), 1);
 res.json(users);
});


module.exports = router;