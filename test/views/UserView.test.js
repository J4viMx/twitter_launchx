const UserView = require('./../../app/views/userView')

describe("Tests for UserView", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        console.log(result.error)
        expect(result.error).toMatch(/payload no existe/)
    })
})
    
    