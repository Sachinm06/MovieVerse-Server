const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MovieVerseServer", { useNewUrlParser: true })

const User = mongoose.model("User",
    {
        username: String,
        review: String

    })

module.exports = {
    User
}