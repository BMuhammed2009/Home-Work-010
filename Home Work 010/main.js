// 1. 
let emptyArray = [];

// 2. 
let arrayWithElements = [1, 2, 3, 4, 5, 6, 7];

// 3. 
console.log("Length of 'arrayWithElements':", arrayWithElements.length);

// 4. 
let firstItem = arrayWithElements[0];
let middleItem = arrayWithElements[Math.floor(arrayWithElements.length / 2)];
let lastItem = arrayWithElements[arrayWithElements.length - 1];
console.log("First Item:", firstItem);
console.log("Middle Item:", middleItem);
console.log("Last Item:", lastItem);

// 5. 
let mixedDataTypes = [1, "two", true, null, {key: "value"}, [1, 2, 3]];
console.log("Length of 'mixedDataTypes':", mixedDataTypes.length);

// 6. 
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. 
console.log(itCompanies);

// 8. 
console.log("Number of companies:", itCompanies.length);

// 9. 
console.log("First company:", itCompanies[0]);
console.log("Middle company:", itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("Last company:", itCompanies[itCompanies.length - 1]);

// 10. 
itCompanies.forEach(company => console.log(company));

// 11. 
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. 
console.log(itCompanies.join(", ") + " are big IT companies.");

// 13. 
const checkCompany = (companyName) => {
    if (itCompanies.includes(companyName)) {
        return companyName;
    } else {
        return "Company not found";
    }
};
console.log(checkCompany("Microsoft"));

// 14. 
let companiesWithOneO = [];
for (let company of itCompanies) {
    let count = 0;
    for (let char of company) {
        if (char.toLowerCase() === 'o') {
            count++;
        }
    }
    if (count === 1) {
        companiesWithOneO.push(company);
    }
}
console.log("Companies with one 'o':", companiesWithOneO);

// 15. 
itCompanies.sort();
console.log("Sorted companies:", itCompanies);

// 16. 
itCompanies.reverse();
console.log("Reversed companies:", itCompanies);

// 17.
console.log("First 3 companies:", itCompanies.slice(0, 3));

// 18. 
console.log("Last 3 companies:", itCompanies.slice(-3));

// 19. 
let middleIndex = Math.floor(itCompanies.length / 2);
console.log("Middle company(s):", itCompanies.slice(middleIndex, middleIndex + 1));

// 20. 
itCompanies.shift();
console.log("Array after removing the first company:", itCompanies);

// 21. 
itCompanies.splice(middleIndex, 1);
console.log("Array after removing the middle company:", itCompanies);

// 22. 
itCompanies.pop();
console.log("Array after removing the last company:", itCompanies);

// 23. 
itCompanies = [];
console.log("Array after removing all companies:", itCompanies);
const countries = require('./countries');
const webTechs = require('./web_techs');

// 24. 
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

// 25. 
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
if (shoppingCart.includes('Honey')) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
if (shoppingCart.includes('Tea')) {
  shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
}
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
console.log(shoppingCart);

// 26. 
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

// 27. 
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// 28. 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
