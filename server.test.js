const mongoose = require("mongoose")
const createServer = require("./server")
const Day = require("./models/Day") // new


beforeEach((done) => {
	mongoose.connect(
		"mongodb://localhost",
		() => done()
	)

    test("GET /day", async () => {
        const day = await Day.create({
            title: "Post 1",
            content: "Lorem ipsum",
        })
    
        await supertest(app)
            .get("/day/posts")
            .expect(200)
            .then((response) => {
                // Check the response type and length
                expect(Array.isArray(response.body)).toBeTruthy()
                expect(response.body.length).toEqual(1)
    
                // Check the response data
                expect(response.body[0]._id).toBe(post.id)
                expect(response.body[0].title).toBe(post.title)
                expect(response.body[0].content).toBe(post.content)
            })
    })
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	})
})

const app = createServer()