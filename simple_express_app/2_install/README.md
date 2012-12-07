Simple Express App -- Part II
=============================
You have two really simple ways to install the modules your app depends on:

Method A
---------
Next, run the following:

    $ npm install express --save
    # Reads package.json and downloads/updates this project's dependent modules
    # (The --save flag includes Express in the 'dependencies' section of your package.json file)
    
In your project folder, you will now have a 'node_modules' directory with the express module inside.

Method B
---------
Alternatively, you can add the Express module (or any other module you want) into your package.json file manually. Simply open package.json in your IDE of choice, and create a 'dependencies' property. Specify the name of the module and the version number like so:

<pre>
"dependencies": {
  "express": "~3.0.4"
}
</pre>

Next, run

    $ npm install
    # Reads package.json and downloads/updates this project's dependent modules
    
And you'll have a 'node_modules' directory with Express ready to go.