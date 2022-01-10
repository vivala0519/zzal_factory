from datetime import timedelta
from flask import Flask, jsonify, request, render_template,url_for
app = Flask(__name__, template_folder="templates")

# from routes import *

# import settings
# SECRET_KEY = getattr(settings, "SECRET_KEY", "localhost")

# from pymongo import MongoClient

# client = MongoClient(SECRET_KEY, 27017, authSource="admin")
# db = client.dbusers

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/making')
def making():
   return render_template('making.html')

@app.route('/members')
def members():
   return render_template('members.html')

@app.errorhandler(404)
def page_not_found(error):
    app.logger.error(error)
    return render_template("404notfound.html"), 404


if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)
