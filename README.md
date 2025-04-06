# 🧠 Online Learning Platform

A sample **Online Learning Platform** built using **HTML**, **CSS**, **JavaScript**, and **Electron** to provide a cross-platform desktop experience.

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js (v14 or above)](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

## 📦 Clone the Repository

```bash
git clone https://github.com/jimitnick/Online-Learning-Platform.git
cd Online-Learning-Platform
```

---

## 🖥️ Running the Project

1. Navigate to the `index` directory:

   ```bash
   cd index
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Electron app:

   ```bash
   npm start
   ```

---

## 🛠️ Create Electron Executable (.exe or .app)

### ▶️ For Windows:

1. Ensure you’re in the `index` directory:

   ```bash
   cd index
   ```

2. Run the following command:

   ```bash
   npx electron-packager . Online-Learning-Platform --platform=win32 --arch=x64 --icon=icon.ico --overwrite
   ```

✅ This will generate a folder like `Online-Learning-Platform-win32-x64` with your `.exe` file inside.

### 🍏 For macOS:

1. Run the following command (from the `index` directory):

   ```bash
   npx electron-packager . Online-Learning-Platform --platform=darwin --arch=x64 --icon=icon.icns --overwrite
   ```

✅ This will generate a folder like `Online-Learning-Platform-darwin-x64` with the `.app` bundle for macOS.

> ⚠️ Note: Building for macOS from Windows is not supported. You must run this command on a macOS system.

---

## 📦 Build a Setup Installer (.exe or .dmg)

To create a complete installer:

### 🪟 For Windows:

1. Install `electron-builder` as a dev dependency:

   ```bash
   npm install --save-dev electron-builder
   ```

2. Update your `package.json`:

   ```json
   {
     "name": "online-learning-platform",
     "version": "1.0.0",
     "main": "main.js",
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
   }
   ```

3. Run the build script:

   ```bash
   npm run build
   ```

📁 Your Windows `.exe` installer will be available in the `dist/` folder.

### 🍏 For macOS:

Add the following to your `package.json` under the `build` section:

```json
"mac": {
  "target": "dmg",
  "icon": "icon.icns"
}
```

Then run:

```bash
npm run build
```

📁 Your macOS `.dmg` installer will be available in the `dist/` folder.

---

## 🛠️ Technologies Used

- **HTML** – Structure of the platform
- **CSS** – Styling and responsive design
- **JavaScript** – Logic and interactivity
- **Electron** – Desktop application framework

---

## 📄 License

This project is for **educational purposes** only. You are free to use, modify, and enhance it as needed.

---

