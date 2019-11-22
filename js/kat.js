fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (response) {
        return response.json();

    }, function (error) {
        alert("UH OH AH" + error);
    }).then(function (poes) {
        console.log(poes);
        document.getElementById("kutPoes").src = poes[0].url;
    });