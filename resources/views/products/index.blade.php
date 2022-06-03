<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Products</title>

        @include('shared.datatable_css')
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <body>
            <div class="content">
                @include('products.datatable');
                {{ $products }}
            </div>
        </body>

    @include('shared.datatable_js')
    <script>
        let datatable_path = "{{route('products.datatable')}}";
    </script>
    <script src="{{ URL::asset('js/product.js') }}"></script>
</html>
