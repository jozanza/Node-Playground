Simple Express App -- Part I
============================
In Terminal, navigate to your project directory, and run the following code:

    $ npm init
    # Helps you create a package.json file
    
This utility will ask you some questions to help create a package.json file needed to manage your app's dependencies. Feel free to put in a project name, description, author, etc if you like. Or you can just keep the blank/default values. It doesn't really matter for this project.

Next it'll give you a preview of the package.json file you are about to create, which will look something like this:

<pre>
{
  "name": "simple_express_app",
  "version": "0.0.0",
  "description": "A simple Express web application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": "",
  "author": "Josiah Savary",
  "license": "BSD",
  "readmeFilename": "README.md"
}
</pre>

When it asks you "Is this ok? (yes)" hit `↩`

<sup><sub>
Note: If you do name your project, don't use spaces since package.json has to be strict JSON format--not javascript. It'll throw a bunch of errors if you do. Rerun npm init and enter valid data into the prompt if this happens to you.
</sub></sup>