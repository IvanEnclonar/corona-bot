from flask import Flask, render_template, request, send_from_directory
from flask_cors import CORS, cross_origin
import os
import sys
from neuralintents import GenericAssistant

ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.abspath('./model'))


app = Flask(__name__, static_folder='build')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

assistant = GenericAssistant('intents.json', model_name="test_model")


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/req/', methods=['GET', 'POST'])
@cross_origin()
def run_model():
    assistant.load_model()
    default_name = '0'
    message = request.form.get('text', default_name)
    if message.lower() == "help" or message.lower() == "helpp" or message.lower() == "helppp":
        return "We hope you get what you need 🙂 You may go here for more information: https://doh.gov.ph/COVID-19/FAQs"
    else:
        return assistant.request(message)


if __name__ == "__main__":
    # decide what port to run the app in
    port = int(os.environ.get('PORT', 33507))
    # run the app locally on the givn port
    app.run(host='0.0.0.0', port=port)
