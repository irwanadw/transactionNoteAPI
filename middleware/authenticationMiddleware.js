const hyperId = require('hyperid')

function authentication(req, res, next) {
    const authorization = req.headers.authorization
    const token = authorization.split(' ')[1]
    const isValidToken = hyperId.decode(token)
    if (!isValidToken) {
        res.status(401).send('Token is wrong')
    } else {
        next()
    }

}

module.exports = authentication