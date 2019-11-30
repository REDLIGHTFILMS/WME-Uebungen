<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    function parseCSV()
    {
         $file = file("world_data.csv");
        foreach($file as $k)
            $csv[] = str_getcsv($k);
        print_r($csv);
    }
?>
</body>
</html>

