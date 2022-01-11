from datetime import timedelta
from flask import Flask, jsonify, request, render_template, url_for

app = Flask(__name__, template_folder="templates")
from pymongo import MongoClient
from datetime import datetime, timedelta
import hashlib

# 설치해야할 패키지 이름: PyJWT
import jwt
import textwrap
from PIL import Image, ImageFont, ImageDraw


# JWT 토큰을 만들 때 필요한 비밀문자열.
secret_for_jwt = 'SPARTA'

# from routes import *

# import settings
# SECRET_KEY = getattr(settings, "SECRET_KEY", "localhost")

# from pymongo import MongoClient

# client = MongoClient(SECRET_KEY, 27017, authSource="admin")
client = MongoClient('localhost', 27017)
db = client.zzalFactory


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/making', methods=['GET', 'POST'])
def making():
    if request.method == 'POST':
        text_receive = request.form['text_give']
        caption = text_receive
        wrapper = textwrap.TextWrapper(width=50)
        word_list = wrapper.wrap(text=caption)
        caption_new = ''
        for ii in word_list[:-1]:
            caption_new = caption_new + ii + '\n'
        caption_new += word_list[-1]

        file = 'double.jpg'
        image = Image.open('static/zzal/' + file)
        draw = ImageDraw.Draw(image)

        font = ImageFont.truetype("static/ttf/NanumGothic.ttf", size=40, encoding="UTF-8")
        w, h = draw.textsize(caption_new, font=font)
        W, H = image.size
        x, y = 0.5 * (W - w), 0.90 * H - h
        draw.text((x, y), caption_new, fill="white", font=font)
        image.save('static/temp/aaa.jpg')

    return render_template('making.html', image_file="temp/aaa.jpg")


@app.route('/main')
def main():
    return render_template('main.html')


@app.route('/members')
def members():
    return render_template('members.html')


@app.route('/users')
def users():
    return render_template('users.html')


@app.route('/register', methods=['POST'])
def api_register():
    id_receive = request.form['id_give']
    pw_receive = request.form['pw_give']
    nickname = request.form['nickname']
    print(nickname, id_receive)
    pw_hash = hashlib.sha256(pw_receive.encode('utf-8')).hexdigest()

    db.users.insert_one({'id': id_receive, 'pw': pw_hash, 'nickname': nickname})

    return jsonify({'result': 'success'})


@app.route('/log_in', methods=['POST'])
def sign_in():
    # 로그인
    id_receive = request.form['id_give']
    password_receive = request.form['pw_give']
    # 비밀번호 암호화
    pw_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    # db에서 유저 찾기
    result = db.users.find_one({'id': id_receive, 'pw': pw_hash})
    # 유저를 찾으면 jwt 생성 및 발급
    if result is not None:
        payload = {
            'id': id_receive,
            'exp': datetime.utcnow() + timedelta(seconds=60 * 60 * 24)  # 로그인 24시간 유지
        }
        token = jwt.encode(payload, secret_for_jwt, algorithm='HS256')

        # 토큰 클라이언트에 리턴
        return jsonify({'result': 'success', 'token': token})
    # 찾지 못하면
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})


@app.errorhandler(404)
def page_not_found(error):
    app.logger.error(error)
    return render_template("404notfound.html"), 404


if __name__ == "__main__":
    app.run("0.0.0.0", port=8000, debug=True)
