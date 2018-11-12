<!-- welcome.blade.php -->

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Restful Blog App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
