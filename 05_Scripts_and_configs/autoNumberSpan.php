$dir = "C:\\Projects\\eKitabu\\Clients\\ADT_Rwanda\\unicef-adt-rw\\04_Entire_Book\\English_P1_SB-v1\\OEBPS\\Text\\*.xhtml";
//get the list of all files with .xhtml extension in the directory and save it in an array named $files
$files = glob( $dir );

//extract only the name of the file without the extension and save in an array named $find
foreach( $files as $file ):
	$counter = 1;
	$doc = new DOMDocument();
	$doc->loadHTMLFile($file);
	$spans = $doc->getElementsByTagName('span');
	foreach($spans as $span){
		echo "s".sprintf('%03d', $counter);
		$counter++;
	}
    echo "<img src='" . $image . "' />";
endforeach;

//$xml = simplexml_load_string($xhtmlstring);
//foreach ($xml->div as $d) {
//   {
   //parsing
//   }
//}