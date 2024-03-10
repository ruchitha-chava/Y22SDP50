const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
    const user = {
        id: 1,
        username: 'test',
        role: 'admin'
    };

    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
};

const createPost = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
};

const createAdminPost = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            if (authData.user.role !== 'admin') {
                res.sendStatus(403);
            } else {
                res.json({
                    message: 'Admin Post created...'
                });
            }
        }
    });
};

module.exports = {
    loginUser,
    createPost,
    createAdminPost
};
