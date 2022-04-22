const UseService = require('../services/UserService')

class UserView{
    static createUser(payload){
        return payload === null && {error: "payload no existe"}  
    }
}


module.exports = UserView