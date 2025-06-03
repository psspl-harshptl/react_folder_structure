React Folder Structure

- node_module
- public
- src 
    - assets
    - common
    - component
    - helper
    - layouts


(a). assets

- assets folder contain assets for the application like styles,images

(b). commom

- common folder contain common component that are use arcoss application and are common like sidebar(_nav.js,_card.js)

(c). component

- component folder includes each individual components 

(d). helper

- helper folder contains helper such like common folder for icon/svg (icon.js)

(e). layouts

- layout name implies that it's contain layouts component such as sidebar,topbar,footer,main

Now we are adding Bootstrap in react so to add bootstrap in react follow bellow command.

    1. Inside terminal copy paste the commond to install bootstrap using npm - npm i bootstrap
    2. Here we are using scss to modify the bootstrap default class so inside assests folder there is css folder and in that create scss file 
    3. Import all required module for scss or just copy from offical docs (https://getbootstrap.com/docs/5.3/customize/sass/#importing)
    4. Do neccessary change and compiled the scss file and link css file to app.js/index.js 
    5. Include bootstrap budle in index.js file and you are ready to go