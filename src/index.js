const login = require("facebook-chat-api");
const debug = require('debug')('rss-o-bot');
const Rx = require('rxjs/Rx');
const fs = require("fs");

module.exports = function messenger(config) {
    var options = {
        logLevel: "silent"
    };
    var loginObs = Rx.Observable.bindNodeCallback(login);
    return function (subject, url, title) {
        var message = `${subject} \n${title}: ${url}`;    
        return loginObs({appState: JSON.parse(fs.readFileSync(config.get('location') + '/appstate.json', 'utf8'))}, options)
        .concatMap(function(api) {
            return Rx.Observable.forkJoin(config.get('messenger-recipients').map(function (recipient) {
                return Rx.Observable.bindCallback(api.sendMessage(message, recipient));
            }));
        });
    }
};
