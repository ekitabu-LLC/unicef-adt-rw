#!/bin/bash
checkDependancies(){
    get 
}
getfolder(){ #get folder path
    echo 'Please input folder path with the format /path/to/folder: ' 
    read folder
    files=$(find $folder -maxdepth 1 -type f)
    echo "There are ${#files[@]} files in this folder"
    find $folder -type f | sed -e 's/.*\.//' | sort | uniq -c | sort -n | grep -Ei '(xhtml|xml|html|htm)$')
}
#check for nested span tags
   for f in $files     #loop through files
    do
        xmlstarlet sel -N q="http://www.w3.org/1999/xhtml"  -t -v "count(//q:span/span)" $f
        
    done

if [[${#files[@]}>0]]; then     #check if folders has xhtml files
    echo "There are ${#files[@]} files in this folder"
    find $folder -type f | sed -e 's/.*\.//' | sort | uniq -c | sort -n | grep -Ei '(xhtml|xml|html|htm)$'

    for f in $files     #loop through files
    do
        c=$(xmlstarlet sel -N q="http://www.w3.org/1999/xhtml"  -t -v "count(//q:span/@id)" $f) #get number of span id's in files
        echo "processing file $f with $c span ids"
        for ((i=1; i<=$c; i++)) #loop through all span ids and number from 1
        do
            newID=`printf 's%03d' $i` #set id to be updated zero paded as per current loop number
            oldID=`xmlstarlet sel -N q="http://www.w3.org/1999/xhtml"  -t -v "(//q:span/@id)[$i]" $f`   
            case $oldID in
                $newID) echo "nothing to do" ;;
                "") xmlstarlet edit --inplace -N q="http://www.w3.org/1999/xhtml" --insert "(//q:span/@id)[$i]" -v $newID $f  ;;
                *) xmlstarlet edit --inplace -N q="http://www.w3.org/1999/xhtml" --update "(//q:span/@id)[$i]" -v $newID $f ;;
            esac
            echo "updated $oldID to $newID"
        done
    done
else
    getfolder

    files=$(find $folder -maxdepth 1 -type f)
    #echo $files

    echo 'Please enter namespace leave blank if unkown'
    read nameSpace
    #check namespace if exists or is valid
    # regex='(https?|ftp|file)://[-A-Za-z0-9\+&@#/%?=~_|!:,.;]*[-A-Za-z0-9\+&@#/%=~_|]'
    # if [[$nameSpace !=~ $regex]]; then
    #     $nameSpace="http://www.w3.org/1999/xhtml"
    #     echo $nameSpace
    # fi
fi
