const db = require('./db')

send = (uname, review) => {
return db.User.insertOne({username:uname,review}).then(user=>{

    // newUser=new db.User({
    //     username:uname,
    //     review
    // })
    // newUser.save()
    // return{
    //     status:true,
    //     message:"success",
    //     statusCode:200
    // }

    if(user){
        newUser=new db.User({
            username:uname,
            review
        })
        newUser.save()
        return{
            status:true,
            message:"success",
            statusCode:200
        }
    }
    else{
        console.log("");
    }
})
}