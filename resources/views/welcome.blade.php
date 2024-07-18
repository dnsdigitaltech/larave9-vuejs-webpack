<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Full stack blog</title>
        <link rel="stylesheet" href="{{asset('/css/all.css')}}">
    </head>
    <body >
        <div id="app">
            <h1>Menu</h1>
            <router-view></router-view>
        </div>
    </body>
    <script src="{{mix('/js/app.js')}}"></script>
</html>
