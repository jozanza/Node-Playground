Simple Express App -- Part III
==============================
Now that Express and its dependencies are installed, we can bootstrap our app using the *express* command and start our server:

    $ express app
    # Creates a folder called 'app' and all of the code you need start running a basic app
    
Express creates a directory called 'app' and a bunch of files to get you going. It also tells you exactly what do next to run your app. But just to be explicit, the next thing you'll want to run the following commands:

    $ cd app && npm install
    # Move into the 'app' directory and install dependencies
    $ node app.js
    # Run your app

Open up your web browser, navigate to localhost:3000 and you should see your app up and running. Congrats!