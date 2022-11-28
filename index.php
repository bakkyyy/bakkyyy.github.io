<!DOCTYPE html>
<html>
    <head>
        <title>Who is faster</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <link rel="stylesheet" href="styles/style.css" type="text/css"/>
    </head>
    <body ontouchstart="">
        <div id="app" class="main">
            <div class="central-content" >
                <input type="text" v-model="name" class="inputname">
                <button @click="buttonClick" class="btn" v-show="checkInput">{{buttonText}}</button>
            </div>

            <div class="bottom-content" v-if="randomPhrase">
                <div class="ref">{{randomPhrase}}</div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script src="js/app.js"></script>
    </body>

</html>
