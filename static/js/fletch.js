function add() {
        x = document.getElementById('num1').value;
        y = document.getElementById('num2').value;

        fetch('/add', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: x, str: y})
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                console.log('POST response: ');
                // Should be 'OK' if everything was successful
                document.getElementById("title").innerHTML = "<div>" + text + "</div>";
            });
        }