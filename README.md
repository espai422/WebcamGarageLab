# Installation

To install python on windows 10 and 11 you can do it from the microsoft store

once python installed you should clone this repository by downloading it as zip and uncompressing it or using the following command if Git is installed.
```ps
git clone https://github.com/espai422/WebcamGarageLab
```

Now you will have to open a terminal and go to the project directory and run the following command to install the dependencies.

```ps
pip install -r requirements.txt
```

When the dependencies are installed you can run the server with the following command.
```ps
python main.py
```

# Configuration
By default the web server is listening at port 5000. If you want to change it, check if the new port is aviable in the sistem and change the port from the last line of the main.py file.

```python
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
```
