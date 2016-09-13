# Ionic SideMenu Template

An application using Apache Cordova, Ionic Framework, and Typescript. Currently supporting iOS, Android and Windows 10.

## Table of Contents
 - [Requirements](#requirements)
 - [Use TypeScript in an Ionic app](#typescript-ionic)
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)


## Requirements
1. node.js
2. Cordova and Ionic - npm install cordova ionic
3. TypeScript - npm install typescript
4. Gulp - npm install gulp
5. Bower - npm install bower

## Use TypeScript in an Ionic app

* Add a folder named source to the root of the project.
* Add a tsconfig.json file to the root of your project and paste the following content into the file.
```
	{
	  "compilerOptions": {
		"noImplicitAny": false,
		"noEmitOnError": true,
		"removeComments": false,
		"sourceMap": true,
		"inlineSources": true,
		"out": "www/js",
		"target": "es5"
	  },
	  "exclude": [
		"node_modules"
	  ],
	  "files": [
		"source/app.ts",
		"source/controllers.ts",
		"typings/tsd.d.ts"
	  ]
	}
```
> Later, you can make modifications to this file as needed. For example, if you want to use TypeScript code in services.js, you can move it from the www/js folder to the source folder, and then include services.ts in the compiler options for the file list (that is, add a "source/services.ts" entry, and so on, under the files entry). You can use both TypeScript and JavaScript in the same file if you want to, and the TypeScript compiler will create the correct JavaScript output.

* open command line, type this
```
npm install -g tsd
```
* Switch to the folder containing your project, type this
```
tsd init
```
>This command installs tsd.json, the typings folder, and tsd.d.ts to the project.

*In the command line, run the following commands to install the correct set of d.ts files for the Ionic app.
```
tsd install cordova --save
tsd install ionic --save
tsd install cordova-ionic --save
npm install -g typescript
npm install --save-dev typescript
```
> The d.ts files will be added to the typings folder.
* Move ***.js from the www/js folder to the source folder.
* Rename app.js to app.ts.
* When you build later, the compiler will build *.ts and the output will be www/js/***.js. The file will be unchanged by the compiler if you don't add any TypeScript code.

## Getting Started

With console:
* Clone this repository.
* Run `npm install` from the project root.
* Run `bower install` from the project root.
* Run `ionic setup sass` from the project root.
* Emulator by running `ionic serve`
* Success your project is ready!

## File Structure of App

```
ionic-typescript-SideMenu/
├── app/                               * Working directory for TypeScript files
│   └── app.ts                         * Main Application configuration
│
├── node_modules/                      * Node dependencies
|
├── platforms/                         * Cordova generated native platform code
|
├── plugins/                           * Cordova native plugins go
|
├── resources/                         * Images for splash screens and icons
|
├── typings/                           * Contains all typings for this project
|
├── www/                               * Folder that is copied over to platforms www directory
│   │   
│   ├── js/                            * Contains transpiled JS files from TS files
│   │    └── app.js                 
│   │
│   ├── css/                           * Compiled CSS
│   │
│   ├── img/                           * App images
│   │
│   ├── lib/                           * Dependencies from bower install 
│   │
│   └── index.html                     * Main entry point
|
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Example git ignore file
├── config.xml                         * Cordova configuration file
├── gulpfile.js                        * Contains gulp tasks for compiling ts files, scss files and more..
├── ionic.project                      * Ionic configuration file
├── package.json                       * Our javascript dependencies   
└── README.md                          * This file
```

