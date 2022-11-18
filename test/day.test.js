const mockingoose = require("mockingoose")
const Day = require("../models/Day")


describe('Day service', () => {
    describe('fetchBooks', () => {
      it ('should return the list of books', async () => {
        mockingoose(BooksModel).toReturn([
          {
            title: 'Book 1',
            author: {
              firstname: 'John',
              lastname: 'Doe'
            },
            year: 2021,
          },
          {
            title: 'Book 2',
            author: {
              firstname: 'Jane',
              lastname: 'Doe'
            },
            year: 2022,
          }
        ], 'find');
        const results = await fetchBooks();
        expect(results[0].title).toBe('Book 1');
      });
    });
  });