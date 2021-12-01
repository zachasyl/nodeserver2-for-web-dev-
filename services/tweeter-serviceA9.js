

const dao = require('../db/tweets/tweet-dao');
module.exports = (app) => {
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const postNewTweet = (req, res) =>
        
        dao.postNewTweet(req.body)
            .then(tweet => res.json(tweet));



    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then(status => res.json(status));

    }


    const likeTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(tweet => res.send(tweet));


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
};
