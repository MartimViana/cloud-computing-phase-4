var app = require('./app');

function App(req, res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    return app(req, res);
}

var uk_house_pricing = App;

module.exports = {
    uk_house_pricing
}