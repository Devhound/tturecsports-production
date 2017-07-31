# Rec Center Site Template
This is the development code for the 2017 Rec Center site. Below you can follow the instructions to get up and running in minutes. If you are ready to publish the site into OmniUpdate, browse to this repo's directory in your favorite command-line and run `gulp ou`. Once it's created the ou folder and files, copy the files from the ou folder to OmniUpdate.

## Dependencies
Make sure these dependencies are installed on your machine before going through the steps under Setup. Terminal commands are for Mac. Please click on the links for detailed installation instructions for all setups.

+ [Vagrant](https://www.vagrantup.com/) - You can get the [installer package here](https://www.vagrantup.com/downloads.html) and [documentation here](https://www.vagrantup.com/docs/index.html)
+ [VirtualBox](https://www.virtualbox.org/wiki/Downloads) - This Vagrant setup relies on VirtualBox as it's host
+ [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
+ [Node.js](https://docs.npmjs.com/getting-started/installing-node)
+ [NPM](https://docs.npmjs.com/getting-started/installing-node)
`npm install npm@latest -g`
+ [Gulp](http://gulpjs.com/)
`npm install gulp-cli -g`

## Setup
1. Clone the repository to your computer in your command-line tool using:
`git clone https://USERNAME@bitbucket.org/soapsuds/rec-center.git`
*Don't forget to replace "USERNAME" with your BitBucket username*
2. Browse to the project's folder and run `npm install`
3. Now run `vagrant up` to start the server (This step can take a while the first time you run it. *Remember to run `vagrant halt` once you're finished.*)
4. Run `gulp watch` to open a browser and watch for all your changes
5. The server and page should now be up and running. You will only have to run steps 3 and 4 to get running in the future.

---

## Commands
Once you're all set up, here's some gulp commands you may find useful.

##### Build a finalized copy to be copied to a server
This will deploy to a folder called /dist/
`gulp`

##### Build a finalized copy to be uploaded in OmniUpdate
This will clean and deploy to the folder 'ou'. You should be able to copy all files and folders and upload them directly to OU. The only exception is the index.php file where you will copy everything in between the "content starts/content ends" comments.
`gulp ou`

##### Delete distribution files and folders
`gulp clean`

##### Start Browsersync and watch for changes
`gulp watch`

##### Just start Browsersync and not watch for changes
`gulp browser-sync`

##### Compile SASS files
`gulp compileSass`

##### Compile JS files
`gulp concatScripts`

### Vagrant Commands
You can find all the [CLI commands here](https://www.vagrantup.com/docs/cli/) but these are the most common.

##### Starts the web server with the settings in the Vagrantfile and bootstrap.sh files
`vagrant up`

##### Stops the web server
`vagrant halt`

##### Stops the web server and destroys all files associated with the machine
`vagrant destroy`
