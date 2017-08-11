from flask import Flask,render_template

@app.route('/')
def showMachineList():
    return render_template('home.html')

if __name__ == "__main__":
    application.run(host='0.0.0.0')