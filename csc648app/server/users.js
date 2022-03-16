const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://chris:hello123@cluster0.t2ipb.mongodb.net/todo-list?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var bcrypt = require('bcrypt');
const mongoose = require('mongoose');

//FOR THE TEAM:
//npm i express
//npm i bcrypt
//npm i mongoose
//npm bodyParser

client.connect(err => {
    const db = client.db('users')

    const port = process.env.PORT || 4003;
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    
    app.use(express.json());
    app.use(bodyParser.json())

    app.get('/api/register', (req, res) => {
        db.collection('user-list').find({}, {projection: {_id: 1, name: 1, email: 1, password: 1}}).toArray(function(err, result) {
            console.log(result)
            res.send(result)
        })
    })

    app.post('/api/register', (req, res) => {
        bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
            if (err) {
                res.json({
                    error: err
                })
            } 
            const user = db.collection('user-list').insertOne({
                _id: new ObjectId(req.body._id),
                name: req.body.name,
                email: req.body.email,
                password: hashedPass,
                userid: req.body.userid,
                friends: req.body.friends
            });
            user.then(data=>{
                res.json({message:'successful'})
            })
            .catch(err=>{
                res.json({message: err}) //send message if data is not saved
        
            })
        })

    })

    app.post('/api/login', (req, res, next) => {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;

        db.collection('user-list').findOne({$or: [{name: name}, {email: email}]})
        .then(user=> {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({error: err})
                    }
                    if (result) {
                        res.json({message:'login works'})
                        // res.redirect('/')
                    } else {
                        res.json({message: 'Password does not match'})
                        // res.redirect('/api/login') //this should be the path to login
                    }
                })
            } else {
                res.json({message: 'no user found'})
            }
        })
    })


    app.listen(port);
    console.log(`Listening on port ${port}`);
})
