const model = require('./tweet-model');

const findAllTweets = () => model.find();
const postNewTweet = (tweet) => model.create(tweet);
;
const deleteTweet = (id) =>  model.removeOne({_id: id});
const updateTweet = (id, tweet) => model.updateOne({_id: id},
    {$set: tweet});;

module.exports = {
    findAllTweets, postNewTweet,
    deleteTweet, updateTweet
};

