$path = "C:\Projects\eKitabu\Clients\ADT_Rwanda\unicef-adt-rw\04_Entire_Book\English_P1_SB-v1\OEBPS\Text\"
$files = Get-ChildItem $path -Filter *.xhtml
Write-Host $files

ForEach($file in $files){
    $tmpFile = "C:\Projects\eKitabu\Clients\ADT_Rwanda\English_P1_SB-v1\OEBPS\Text\"+$file
    $src = Get-Content -path $path$file -Raw
    $src | Out-File $tmpFile
    $html = New-Object -ComObject "HTMLFile"
    $html.IHTMLDocument2_write($src)
    $counter=1

    $html.all.tags("span") | % {
      $oldID   = $_.getAttributeNode('id').value
      $newID = 's'+([string]$counter).PadLeft(3,'0')
      $_.getAttributeNode('id').value = '"$newID"'
      Write-Host $file $_.getAttributeNode('id').value;
      $html.all.tags("HTML") | ForEach-Object {
            $_.document.documentElement.OuterHTML
          } | Out-File $tmpFile
      $counter = $counter+1
    }
}