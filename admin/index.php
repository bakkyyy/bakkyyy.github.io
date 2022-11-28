<!DOCTYPE html>
<html>
<head>
    <title>Who is faster</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="../styles/style.css" type="text/css"/>
</head>
<body ontouchstart="">

    <div id="admin" class="main">
        <div class="central-content">
            <div class="main-text">{{maintext}}</div>
            <div v-for="(player, index) in arPlayers">
                <h2 v-if="index > 0" class="sub-text">{{player}}</h2>
            </div>
            <button @click="clear" class="btn">Очистить</button>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="admin.js"></script>
</body>
</html>
