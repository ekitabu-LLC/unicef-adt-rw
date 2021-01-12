echo please input absolute path to file
read path

files="/mnt/c/Projects/eKitabu/Clients/ADT_Rwanda/unicef-adt-rw/04_Entire_Book/English_P1_SB-v1/OEBPS/Text/*.xhtml
for f in $files; do 
    c=$(xmlstarlet sel  -N q="http://www.w3.org/1999/xhtml" -t -c 'count(//q:span)' $f)
    echo "processing file $f with $c span tags"
    for ((i=1; i<=$c; i++)); do 
        value=` printf 's%03d' $i`
        xmlstarlet edit --inplace -N q="http://www.w3.org/1999/xhtml" --update "(//q:span/@id)[$i]" -v $value --insert "(//q:span)[$i][not(@id)]" --type attr -n id -v $value $f
        echo "span $value updated"
    done
done