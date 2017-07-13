# TTU Site Template
This development template can be used for any site being created or modified to be published to OmniUpdate.

## Dependencies
Make sure these dependencies are installed on your machine before going through the steps under Setup. Terminal commands are for Mac. Please click on the links for detail installation instructions for all setups.

+ [Vagrant](https://www.vagrantup.com/) - You can get the [installer package here](https://www.vagrantup.com/downloads.html) and [documentation here](https://www.vagrantup.com/docs/index.html)
+ [VirtualBox](https://www.virtualbox.org/wiki/Downloads) - This Vagrant setup relies on VirtualBox as it's host
+ [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
+ [Node.js](https://docs.npmjs.com/getting-started/installing-node)
+ [NPM](https://docs.npmjs.com/getting-started/installing-node)
`npm install npm@latest -g`
+ [Gulp](http://gulpjs.com/)
`npm install gulp-cli -g`

## Setup
1. Clone the repository to your computer using:
`git clone https://USERNAME@bitbucket.org/soapsuds/template.git`
*Don't forget to replace "USERNAME" with your BitBucket username*
2. Change the name of the 'template' folder to your new project
3. In your project folder, remove the .git folder
4. Open a command terminal and go to your project's folder
5. Run `git init`
6. Run `git add .`
7. Run `git commit -m "First commit"`
8. Head to [Bitbucket](https://bitbucket.org/account/user/soapsuds/projects/TTU) and create a new repository under the team Soapsuds and in the "TTU Sites" project folder
9. Once it's created, you can copy the code on the repository's Overview page under "I have an existing project", paste it into your terminal and run the commands
Here's the code for reference (*Remember to replace USERNAME and REPO-NAME with the right credentials*):
```
git remote add origin https://USERNAME@bitbucket.org/soapsuds/REPO-NAME.git
git push -u origin master
```
10. Again in your command terminal, in your project's folder run `npm install`
11. Now run `vagrant up` to start the server (This step can take a while the first time you run it)
12. Run `gulp watch` to open a browser and watch for all your changes

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
