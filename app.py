# docs @ http://flask.pocoo.org/docs/1.0/quickstart/

from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

@app.route('/add', methods=['GET', 'POST'])
def add():

    # POST request
    if request.method == 'POST':
        nums = request.get_json()
        print(nums)
        return str(int(nums['a']) + int(nums['str']))

    # GET request
    else:
        message = {'greeting': 'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers

@app.route('/')
def test_page():
    # look inside `templates` and serve `index.html`
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True, port=5000)