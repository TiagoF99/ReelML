# docs @ http://flask.pocoo.org/docs/1.0/quickstart/

from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

@app.route('https://tiagof99.github.io/ReelML/hello', methods=['GET', 'POST'])
def hello():

    # POST request
    if request.method == 'POST':
        print('Incoming..')
        print(request.get_json())  # parse as JSON
        return 'OK', 200

    # GET request
    else:
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers

@app.route('https://tiagof99.github.io/ReelML/test')
def test_page():
    # look inside `templates` and serve `index.html`
    return render_template('index.html')
#ok