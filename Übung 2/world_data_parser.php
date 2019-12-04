<!DOCTYPE html>

<head>
	<meta charset="UTF-8">


</head>

<body>

	<?php
	//A2.1
	// anlegen der Klasse WorldDataParser
	class WorldDataParser
	{

		// Funktion parseCSV() definieren
		function parsCSV($csvFile)
		{
			if (($handle = fopen($csvFile, "r")) !== FALSE) {
				$head = fgetcsv($handle);
				while (!feof($handle)) {
					$array[] = array_combine($head, fgetcsv($handle));
				}
				fclose($handle);
			}
			return $array;
		}

		//A2.2
		//Funktion saveXML() definieren
		function saveXML($xml, $array)
		{
			foreach ($array as $id => $value) {
				if (is_numeric($id)) {
					$id = "country";
				}

				if (is_array($value)) {
					$objekt = $xml->addChild($id);
					$this->saveXML($objekt, $value);
				} else {
					$id = strtr($id, " ", "_");
					$xml->addChild($id, $value);
				}
			}
			return $xml->asXML("world_data.xml");
		}
		//A2.3
		//Funktion printXML() definieren		
		function printXML($xml, $xsl)
		{

			$domdocumentxsl = new DOMDocument();
			$domdocumentxsl->load($xsl);

			$domdocumentxml = new DOMDocument();
			$domdocumentxml->load($xml);

			$xsltprocessor = new XSLTProcessor();
			$xsltprocessor->importStylesheet($domdocumentxsl);

			return $xsltprocessor->transformToXML($domdocumentxml);
		}
	}

	?>

</body>

</html>