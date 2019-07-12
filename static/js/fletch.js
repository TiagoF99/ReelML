function gross_by_score() {
        x = document.getElementById('num1').value;

        fetch('/add', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({score: x})
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                console.log('POST response: ');
                // Should be 'OK' if everything was successful
                document.getElementById("title").innerHTML = "<div>" + text + "</div>";
            });
        }