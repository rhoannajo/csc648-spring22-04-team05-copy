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

    UserModel.usernameExists = (name) => {
        return db.collection('user-list').find({"name": name})
    }

    UserModel.emailExists = (email) => {
        return db.collection('user-list').find({"email": email})
    }

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
        let email = req.body.email;
        let password = req.body.password;

        if (email.search(/@/) < 1 || email == "") {
            console.log("Email not added")
        }

        if (password.length < 8 || password == "") {
            console.log("Password not added")
        }

        UserModel.usernameExists(nameExists)
        .then((nameDoesExist) => {
            if (nameDoesExist) {
                console.log("username already exists")
            } else {
                return UserModel.emailExists(email);
            }
        })
        .then((emailDoesExist) => {
            if (emailDoesExist) {
                console.log("email already exists")
            } else {
                return UserModel.create(name, password, email);
            }
        })
        .then(() => {
            res.send(result)
        })
    })

    app.get('/api/users/getUsers', (req, res, next) => {
        db.collection('user-list').find({name: "chris"}, {projection: {_id: 0, email: 1, password: 1}}).toArray(function(err, result) {
            console.log(result)
            res.send(result)
        })
    })

    app.listen(port);
    console.log(`Listening on port ${port}`);
})