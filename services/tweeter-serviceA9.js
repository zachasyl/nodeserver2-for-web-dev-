let dao = require('../db/tweets/tweet-dao');
module.exports = (app) => {
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
    const postNewTweet = (req, res) =>
        dao.postNewTweet(req.body)
            .then((insertedTweet) => res.json(insertedTweet));





    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        dao = dao.filter(tweet => tweet._id !== id);
        res.json(tweet);


    }
    app.delete('/api/tweets/:id', deleteTweet);


    const likeTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
};
