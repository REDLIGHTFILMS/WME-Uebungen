<?php
    function parseCSV()
    {
         $file = file("world_data.csv");
        foreach($file as $k)
            $csv[] = str_getcsv($k);
        print_r($csv);
    }
?>
