const jsonwebtoken = require('jsonwebtoken');

const jwtSecret = process.env.SECRET;

const securityController = {

    getToken : (req, res) => {

        const token = jsonwebtoken.sign({ 
            pseudo: req.query.pseudo, 
            admin: true, 
            mail: req.query.mail, 
            role: req.query.role 
        }, jwtSecret);
        res.json({ token });
    }
};

module.exports = securityController;
