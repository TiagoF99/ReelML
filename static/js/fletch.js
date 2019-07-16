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
                console.log(text)
                for (i = 0; i < text.length; i++) {
                    if (i != 0 || i != text.length - 1) {
                        if (text[i] == "'") {
                            text = text.replace("'", "\"")
                        }
                    }
                }
                text = text.replace("'", "\"")
                console.log(text)
                try {
                  let data = JSON.parse(text);
                  console.log(data)
                  document.getElementById("prediction").innerHTML = "<div>" + data.pred.toString() + "</div>";
                  document.getElementById("accuracy").innerHTML = "<div>" + (data.acc).toString() + "</div>";
                }
                catch(err) {
                  console.log("invalid input")
                  document.getElementById("prediction").innerHTML = "<div>Invalid Input</div>";
                }
            });
        }