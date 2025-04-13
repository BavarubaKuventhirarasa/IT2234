const users = require('./userdb')

function getUser(id){
    return users.find((user)=>user.id==id)
}

