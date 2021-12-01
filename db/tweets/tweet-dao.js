const model = require('./tweet-model');

const findAllTweets = () => model.find();
const postNewTweet = (tweet) => model.create(tweet);
;
const deleteTweet = (id) =>  model.deleteOne({_id: id});
const updateTweet = (id, tweet) => model.updateOne({_id: id},
    {$set: {liked: true}}).then(res =>console.log(res));

module.exports = {
    findAllTweets, postNewTweet,
    deleteTweet, updateTweet
};

