const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book counting thingy', function () {

    test('Total amount of books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(1)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(1);

    });
});

describe('Total price', function () {

    test('Count the total price', () => {
       let price = [35];
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(price),
            map : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(35);
    });
});

describe('Book sales by', function () {

    test('return a book with a name in parameters', () => {
       let bookTest = {"books": [
        {
            "id": 1,
            "name": "Durandal",
            "price": 6.1,
            "added_at": "2019-01-01"
          }]};
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(bookTest)

        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName("Durandal")).toBe(bookTest);
    });

    test('return a book that don"t exist with a name', () => {
        let bookTest = {"books": [
            {
               "id": 1,
               "name": "Durandal : Manuel du forgeron",
               "price": 45,
               "added_at": "1093-01-01"
            }]};
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(null)

        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName("truc")).toBe('Aucun livre ne correspond');
    });
    test('return a book with a number in parameters', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([])

        };
        const repository = new BookRepository(dbMock);

        expect(function () {repository.getBookByName(1)}).toThrow('ERREUR : getBookByName neccesite un String');
    });
});

describe('Sorting by mounth', () => {
    test('return a array of book that has been added to the db all the same month', () => {

        const books = [];
        for (let i=1 ; i<3 ; i++) {
            books.push({id: i, name: 'Baldur', price: 5.00, added_at: '1032-04-26'});
        }
        for (let i=3 ; i<5 ; i++) {
            books.push({id: i, name: 'Baldur', price: 5.00, added_at: '1032-04-11'});
        }
        for (let i=5 ; i<10 ; i++) {
            books.push({id: i, name: 'Baldur', price: 5.00, added_at: '1032-04-02'});
        }

        const dbMock = {
            get: jest.fn().mockReturnThis(),
            filter: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(books)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getCountBookAddedByMonth('Baldur')).toEqual(
            [
                { year: 1032, month: 4, count: 9, count_cumulative: 9 }
            ]);
    });

    test('return a array of book that hasn"t been added to the db in the same month', () => {

        const books = [];
        for (let i=1 ; i<2 ; i++) {
            books.push({id: i, name: 'Durandal', price: 35.00, added_at: '1093-04-11'});
        }
        for (let i=2 ; i<4 ; i++) {
            books.push({id: i, name: 'Durandal', price: 43.00, added_at: '1093-07-01'});
        }
        for (let i=4 ; i<7 ; i++) {
            books.push({id: i, name: 'Durandal', price: 26.50, added_at: '1093-11-13'});
        }

        const dbMock = {
            get: jest.fn().mockReturnThis(),
            filter: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(books)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getCountBookAddedByMonth('Durandal')).toEqual(
            [
                { year: 1093, month: 4, count: 1, count_cumulative: 1 },
                { year: 1093, month: 7, count: 2, count_cumulative: 3 },
                { year: 1093, month: 11, count: 3, count_cumulative: 6 }
            ]);
    });
});