<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>{{ config('site.app_name') }}</title>
    <!-- Styles -->
    <link href="{{ '/css/app.css?' . time() }}" rel="stylesheet" />
    <script>
        window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};
    </script>
</head>
<body>
<div id="app"></div>

<script src="{{ '/js/app.js?' . time() }}"></script>
</body>
</html>
