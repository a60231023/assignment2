const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6759fe06emsh29aeaaf4dd52f9ap195b63jsnfaec6f199925',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));