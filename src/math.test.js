const Util = require('./math');

describe('Tests factoriel', function () {
    test('Test factoriel de 0 => 1', () => {
        expect(Util.factorial(0)).toBe(1);
    });

    test('Test factoriel de 2 => 2', () => {
        expect(Util.factorial(3)).toBe(6);
    });

    test('Test factoriel de 3 => 6', () => {
        expect(Util.factorial(3)).toBe(6);
    });

    test('Test factoriel de 3000', () => {
        expect(()=> {Util.factorial(3000)}).toThrow();
    });

    test('Test factoriel -10', () => {
        expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
    });

    test('Test factoriel de 0 => 1', () => {
        expect(Util.factorial(0)).toBe(1);
    });
});

describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });
    
    test('Test prime de 2 => true', () => {
        expect(Util.isPrime(2)).toBe(true);
    });
    
    test.each([
        /**[2, true],**/
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('sumPrime', function () {

    test('Test sumPrime < 2 => throw exception', () => {
        expect(() => { Util.sumPrime(1) }).toThrow('Unable to compute sumPrime for n < 2')
    });

    test.each([
        [2, 2],
        [6, 10],
        [8, 17],
    ])(
        'sumPrime %i equals to %i',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        }
    );

    
});

describe('fizzBuzz', function () {

    test('Test fizzBuzz <= 0 => throw exception', () => {
        expect(() => { Util.fizzBuzz(-10) }).toThrow('Unable to compute prime for n <= 0');
    });

});

describe('cipher', function () {

    
    test('Test cipher de abc => bcd', () => {
        expect(Util.cipher('abc')).toBe('bcd')
    });
    test('Test prime de 123 => 123', () => {
        expect(Util.cipher('123')).toBe('123')
    });
    test('Test prime de 1ab2 => 1bc2', () => {
        expect(Util.cipher('1ab2')).toBe('1bc2')
    });

});