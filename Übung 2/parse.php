<!DOCTYPE html>

<head>
	<meta charset="UTF-8">
	

</head>
<body>

<?php 

// Einbinden der Klasse WorldDataParser
require('world_Data_Parser.php');
 
$worlddataparser = new WorldDataParser();
print("<pre>"); print_r($worlddataparser->parsCSV("world_data.csv")); print("</pre>");

  
?>
 
</body>

</html>