// 1. Write a js fucntion that returns array elements larger than the number.
function largerThanNumber(numbers, number) {
	return numbers.filter((element) => element > number);
}

console.log(largerThanNumber([1, 5, 8, 2, 10], 5));

// 2. Write js function to extract unique chatacters from a string.
function uniqueCharacters(string) {
	return [...new Set(string)].join("");
}

console.log(uniqueCharacters("hello"));

// 3. Write a js function that accepts a list of country names as input and returns the longest country name as output.
function longestCountry(countries) {
	return countries.reduce((longest, country) =>
		country.length > longest.length ? country : longest
	, "");
}

console.log(longestCountry(["India", "United States", "Japan"]));

// 4. Write a js function to count the number of vovels in a string arguments.
function countVowels(string) {
	const vowels = "aeiou";
	let count = 0;

	for (const character of string.toLowerCase()) {
		if (vowels.includes(character)) {
			count++;
		}
	}

	return count;
}

console.log(countVowels("JavaScript"));

// 5. Write a js function to generate a random number within a range (start, end).
function randomNumber(start, end) {
	return Math.floor(Math.random() * (end - start + 1)) + start;
}

console.log(randomNumber(1, 10));