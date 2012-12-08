Reading Files with Node.js
==========================
In Terminal, navigate to the directory containing server.js and index.html, then run the following code:

    $ node server.js
    # This will start your node server on port 3000 of localhost

Next, open a web browser and go to localhost:3000. You should see 'Hello World!'. Mess around with index.html and take a look at the comments in server.js to see how the File System module is used to read files.

<sup><sub>
Note: File System's readFile() method is asynchronous, so code following this method will not wait for a file to be read before it executes
</sub></sup>
