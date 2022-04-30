//STEP 1

const sortString = str => {
    let strArr = str.split('');
    strArr.sort();
    return strArr.join('');
}

console.log(sortString('webmaster'));

//STEP 2

const convertMixedCase = str => {
    let strArr = str.split(' ');
    strArr = strArr.map(e => e.slice(0, 1).toUpperCase().concat(e.slice(1)));
    return strArr.join(' ');
}

console.log(convertMixedCase('the quick brown fox'));

//STEP 3

const countVowels = str => {
    let count = 0;
    let vowelList = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowelList.indexOf(str.charAt(i)) > -1) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('The quick brown fox'));

//STEP 4

const generateRandomString = strLen => {
    let retStr = '';
    let alphaNumericArr = [];
    for (let i = 0; i < 10; i++) {
        alphaNumericArr.push(i.toString());
    }
    for (let i = 65; i <= 90; i++) {
        let char = String.fromCharCode(i);
        alphaNumericArr.push(char);
        alphaNumericArr.push(char.toLowerCase());
    }
    for (let i = 0; i < strLen; i++) {
        let randomIndex = Math.floor(Math.random() * alphaNumericArr.length);
        retStr = retStr.concat(alphaNumericArr[randomIndex]);
    }
    return retStr;
}

console.log(generateRandomString(8));

//STEP 5

const longestCountryName = countryList => {
    let longest = '';
    for (let country of countryList) {
        if (country.length > longest.length) {
            longest = country;
        }
    }
    return longest;
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));