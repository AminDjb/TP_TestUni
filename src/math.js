let Util = {};
Util.factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n >= 3000) {
        throw 'n too large'
    }

    if (n < 0) {
        throw 'n is negative'
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function (n) {
    if (n === 1 || n === 0) {
        return false;
    }
    if (n < 0) {
        throw 'Unable to compute prime for n < 0'
    }
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;

};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    
    let somme = 0;
    if (n <= 1) {
        throw 'Unable to compute sumPrime for n < 2'
    }
    for(var i = 1; i < n; i++){
        if(Util.isPrime = i){
            somme += i;
        }  
    }

    return somme;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {

    if (n <= 0) {
        throw 'Unable to compute prime for n <= 0'
    }
    
    for (let number = 1; number <= n; number++) {
        if (number % 3 == 0 && number % 5 == 0) {
            return ("FizzBuzz");
        }else if (number % 3 == 0) {
            return ("Fizz");
        }else if (number % 5 == 0) {
            return ("Buzz");
        }else {
            return (number);
        }
     }
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {

    let sentence = '';

    for(var number = 1; number <= phrase.length; number++){
        if (phrase.charCodeAt(number) <= 65 && phrase.charCodeAt(number) >= 89 || phrase.charCodeAt(number) <= 97 && phrase.charCodeAt(number) >= 121){
            sentence += String.fromCharCode(phrase.charCodeAt(number) + 1);
        }

        else if (phrase.charCodeAt(number) <= 90 || phrase.charCodeAt(number) >= 122){
            sentence += String.fromCharCode(phrase.charCodeAt(number) + 1);
        }

        else{
            sentence = String.fromCharCode(number);
        }
    }

    return sentence;
};


module.exports = Util;

