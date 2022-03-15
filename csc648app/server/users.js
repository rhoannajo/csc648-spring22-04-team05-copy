const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chris:hello123@cluster0.t2ipb.mongodb.net/todo-list?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var bcrypt = require('bcrypt')

const UserModel = {};

client.connect(err => {
    const db = client.db('users')

    const port = process.env.PORT || 4003;
    const express = require('express');
    const app = express();
    
    app.use(express.json());

    UserModel.create = (name, password, email) => {
        return bcrypt.hash(password, 15)
        .then((hashedPassword) => {
            return db.collection('user-list').insertOne({name: name, email: email, password: hashedPassword })
        })
    }

    // commented out -- used for registration
    // UserModel.usernameExists = (name) => {
    //     return db.collection('user-list').find({"name": name})
    // }

    // UserModel.emailExists = (email) => {
    //     return db.collection('user-list').find({"email": email})
    // }

    UserModel.authenticate = (name, email, password) => {
        let userId;
        return db.collection('user-list').find({name: name}, {projection: {_id: 1, name: 1, email: 1, password: 1}})
        .then(([results, fields]) => {
            if (results && results.length == 1) {
                userId = results[0].id;
                return bcrypt.compare(password, results[0].password)
            }
        })
    }

    app.post('/api/users/validateUser', (req, res, next) => {
        let name = req.body.name;
        // let email = req.body.email;
        let password = req.body.password;

        if (name == "") {
            console.log("Name left blank")
        }

        if (password == "") {
            console.log("Password left blank")
        }


        UserModel.authenticate(name, password)
            .then((loggedUserId) => {
                if (loggedUserId > 0) {
                    req.session.name = name;
                    req.session.userid = loggedUserId; 
                    res.redirect("/")
                } else {
                    console.log("error")
                    res.redirect("/login") //replace with login path
                }
            })
            .catch((err) => {
                res.status(err.getStatus());
                req.redirect("/") //should be login path
            })

    })

    //just a test
    // app.get('/api/users/getUsers', (req, res, next) => {
    //     // test: equivalent to SELECT email, password FROM user-list WHERE name=chris
    //     db.collection('user-list').find({name: "chris"}, {projection: {_id: 0, email: 1, password: 1}}).toArray(function(err, result) {
    //         console.log(result)
    //         res.send(result)
    //     })
    // })

    app.listen(port);
    console.log(`Listening on port ${port}`);
})