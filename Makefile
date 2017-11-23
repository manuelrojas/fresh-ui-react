#!/bin/bash
echo "hello!"

clear

counter=0
jq -c '.[]' locations.json | while read i;
do
	counter=$[counter + 1]
	# echo ` `
	newName=$(echo $i |jq '.name' |  tr '[:upper:]' '[:lower:]' | tr  " " _ | tr -d '"')
	echo location$counter.png
	echo $newName.png
	mv location$counter.png $newName.png
done
