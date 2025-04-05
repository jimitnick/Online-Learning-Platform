ONLINE LEARNING PLATFORM

This is a sample Online Learning Platform built using HTML, CSS, JavaScript, and Electron to offer a desktop experience.

------------------------------------------------------------
GETTING STARTED

Prerequisites:
- Node.js (v14 or above recommended): https://nodejs.org/
- Git: https://git-scm.com/

------------------------------------------------------------

Clone the Repository

git clone https://github.com/jimitnick/Online-Learning-Platform.git
cd Online-Learning-Platform

------------------------------------------------------------

Running the Project

1. Navigate to the index folder:

cd index

2. Install dependencies:

npm install

3. Start the Electron app:

npm start

------------------------------------------------------------

🛠️ Create Electron .exe Installer

1. Make sure you're in the index directory:

cd index

2. Run this command:

npx electron-packager . Online-Learning-Platform --platform=win32 --arch=x64 --icon=icon.ico --overwrite

This will create a folder like Online-Learning-Platform-win32-x64 with the .exe inside.

------------------------------------------------------------

To Build a Setup .exe Installer

1. Install electron-builder:

npm install --save-dev electron-builder

2. Update your package.json with a build section:

"scripts": {
  "start": "electron .",
  "build": "electron-builder"
},
"build": {
  "appId": "com.eduprep.platform",
  "productName": "EduPrep",
  "directories": {
    "output": "dist"
  },
  "files": [
    "**/*"
  ],
  "win": {
    "target": "nsis",
    "icon": "icon.ico"
  },
  "nsis": {
    "oneClick": false,
    "perMachine": true,
    "allowToChangeInstallationDirectory": true
  }
}

3. Then run:

npm run build

Your setup .exe will be in the dist/ folder.

------------------------------------------------------------

TECHNOLOGIES USED

- HTML – For the web page structure
- CSS – For styling and responsiveness
- JavaScript – For interactivity and logic
- Electron – To turn the app into a desktop application

------------------------------------------------------------

LICENSE

This project is for educational purposes. You are free to use, modify, and enhance it as needed.
