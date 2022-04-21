const User = require('../../app/models/User')

describe("Unit Test for User Class", () =>{
    test('Create an User object', () => {

        const user = new User(1, "JaviMx", "Javier", "Bio", "dateCreated","lastUpdated")

        expect (user.id).toBe(1)
        expect (user.username).toBe("JaviMx")
        expect (user.name).toBe("Javier")
        expect (user.bio).toBe("Bio")
        expect (user.dateCreated). toBe("dateCreated")
        expect (user.lastUpdated).toBe("lastUpdated")
        });
        
});