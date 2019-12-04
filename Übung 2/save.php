<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	
</head>

<body>

<?php 
	require('world_data_parser.php');
	
	$wdp = new WorldDataParser();

	$array = $wdp->parsCSV("world_data.csv");

	// XML-Element erstellen, Wurzelknoten "Countries"
	$xml = new SimpleXMLElement("<?xml version='1.0' encoding='utf-8'?><Countries></Countries>");
	$result = $wdp->saveXML($xml, $array);
	$xml->asXML("world_data.xml"); //XMLDatei speichern
	//Savestatus printen
	if ($result){ 
		print ("XML Savestatus: erfogreich! ("); print_r($result); print (")");
	} else {
		print ("XML Savestatus: nicht erfogreich! ("); print_r($result); print (")");
	}
?>
 
</body>

</html>