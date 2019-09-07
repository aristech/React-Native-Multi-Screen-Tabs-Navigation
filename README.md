# Multi Screen & Tabs Navigation Starter with React-Native

### Out of the Box

- React-native 60
- React Navigation v4 & Theme Support!
- Preloading/caching local assets
- SVG custom icon usage
- Checker for the iOS notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max

## Table of Contents

- [install](#install)
- [development on a physical device](#development-on-a-physical-device)
- [linting](#linting)
- [helpful links](#helpful-links)
- [adding linter](#adding-linter-config-to-another-react-project)
- [assets](#assets)
- [Thanks](#thanks)

## install

- `git clone https://github.com/aristech/React-Native-Multi-Screen-Tabs-Navigation.git`
- `cd React-Native-Multi-Screen-Tabs-Navigation`
- `npm install`

## development on a physical device

- first, your machine and physical device should be on the same wifi connection - open a terminal at project dir `react-native start` and let it run
- in another terminal run `react-native run-android` you should see the project running on device 🤗
- 🤔 if you get an error about the certificate `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass a ndroid -keyalg RSA -keysize 2048 -validity 10000`

## linting

- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## helpful links

- [using nvm](https://davidwalsh.name/nvm)
- [setup prettier/eslint within project](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

## adding linter config to another react project

- yarn:
  - `yarn add eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --dev`
- npm:
  - `npm install eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --save-dev`
- then copy over:
  - `.eslintrc`
  - `.prettierignore`
  - `.prettierrc`

## assets

- [react icon](https://imgbin.com/png/A5DaZgug/react-logo-javascript-front-and-back-ends-user-interface-png) thanks to Bull3tM0nk3y (License: Non-commercial Use)
- SVG Icons from [icomoon](https://icomoon.io)

## thanks

- [expo project](https://github.com/calebnance/expo-multi-screen-starter) this project couldn't have been possible with out the expo version from [calebnance](https://github.com/calebnance), so go ahead and add a star to him also 🤗
