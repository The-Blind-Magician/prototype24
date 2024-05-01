from flask import Flask, jsonify
import subprocess
from flask import request
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)

CFG_FILE_NAME = 'config.txt'

@app.route('/api/updateConfigFile', methods=['PUT'])
def updateConfigFile():
    global CFG_FILE_NAME
    #get the request data
    response = request.get_json()
    #get the content field from data
    content = response['content']
    writeToFile(CFG_FILE_NAME, content)

    return jsonify({'message': 'Config file updated successfully'})

@app.route('/api/getConfigFile', methods=['GET'])
def getConfigFile():
    global CFG_FILE_NAME
    content = readFile(CFG_FILE_NAME)
    print(content)
    return jsonify({'content': content, 'name': CFG_FILE_NAME})

def writeToFile(filePath, content):
    print(f"Writing to file: {filePath}\nContent: {content}")
    with open(filePath, 'w') as file:
        file.write(content)
        file.flush()
        file.close()

def readFile(filePath):
    with open(filePath, 'r') as file:
        content = file.read()
        file.close()
        return content

def runCommand(command):
    res = subprocess.check_output(command)
    return res

def main():
    app.run(host="0.0.0.0", port=5000, debug=True)

main()