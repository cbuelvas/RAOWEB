## RAOWEB ESTA CORRIENDO SOBRE: Ani Theme - Free AngularJS Dashboard Starter Theme

## [Demo](http://rawgit.com/start-angular/ani-theme/master/dist/index.html)


## Installation
1. Clone this project or Download that ZIP file
2. Make sure you have [bower](http://bower.io/), [gulp](https://www.npmjs.com/package/gulp) and  [npm](https://www.npmjs.org/) installed globally
3. On the command prompt run the following commands
- cd `project-directory`
- `bower install`
- `npm install`
- `gulp build` - concat, minify and generate the files for deployment
- `gulp serve` - For development mode

### Automation tools


How to install node.js, npm, bower and gulp on Ubuntu 15.10

First, install nodejs and npm

      sudo apt-get install -y nodejs npm

Then install bower and gulp globally. Run this

      sudo npm install --global bower gulp

To install packages that your project needs, run this in your project folder

      sudo npm update
      bower update

->Errors and solutions

Error "sh: 1: node: not found" (there were other errors like ENOENT and tar.unpack, but this was the first one). It means you have to create symlink from node to nodejs. This package will do it for you:

      sudo apt-get install -y nodejs-legacy 

Error: watch ENOSPC. There is too many files to watch. Run this to increase limit:

      echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

