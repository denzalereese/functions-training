// TODO: add your solutions here!

function combineWords(word1, word2) {
    // TODO: Place your code here
    console.log(word1 + word2);
    return word1 + word2;
}

function repeatPhrase(phrase, n) {
    // TODO: Place your code here
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

function toTheNthPower(number, power) {
    // TODO: Place your code here
    total = 1;
    for (i = 0; i < power; i++) {
        total *= number;
    }
    console.log(total);
    return total;
}

function areaOfACircle(radius) {
    // TODO: Place your code here
    console.log(Math.PI * Math.pow(radius, 2));
    return (Math.PI * Math.pow(radius, 2));
}

function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
    var cSquared = Math.pow(a, 2) + Math.pow(b, 2);
    var c = Math.sqrt(cSquared);
    console.log(c);
    return c;
}

function isXEvenlyDivisibleByY(x, y) {
    // TODO: Place your code here
    if (x % y === 0) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

function countVowels(word) {
    // TODO: Place your code here
    i = 0;
    var count = 0;

    while (i < word.length) {
        var lowerCaseWord = word.toLowerCase();
        var letter = lowerCaseWord[i];

        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
            count += 1;
        }

        i++;
    }

    console.log(count);
    return count;
}

function findWdi(arr){
    // TODO: Place your code here
    console.log(arr.includes("wdi"));
    return arr.includes("wdi");
}

function printTriangle(length) {
    // TODO: Place your code here
    for (i = 1; i <= length; i++) {
        console.log("*".repeat(i));
    }
}

function printPyramid(length) {
    // TODO: Place your code here
    var spaceArray = [];
    for (i = 0; i < length; i++) {
        spaceArray.push(" ");
    }

    for (i = 0; i < length; i++) {
        if (i === 0) {
         spaceArray[Math.round(length / 2)] = "*";
         console.log(spaceArray.join(""));
         continue;
        }

        if (i % 2 != 0) {
            spaceArray[spaceArray.lastIndexOf("*") + 1] = "*";
            console.log(spaceArray.join(""));
        } else {
            spaceArray[spaceArray.indexOf("*") - 1] = "*";
            console.log(spaceArray.join(""));

        }
    }

}



