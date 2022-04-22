const UseService = require('../services/UserService')

class UserView{
    static createUser(payload){
        return payload === null ? {error: "payload no existe"}  :
        payload.usename == null || payload.name == null || payload.id == null ? {error: "necesitan tener un valor válido"} : null
    }
}


module.exports = UserView