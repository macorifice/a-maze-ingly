#!/bin/bash
NOW=$(date +%F' '%H:%M:%S)
TIMESTAMP=$(date +%s)
while $1
do
	mkdir -p run-execution
	cd run-execution
	echo "Run executed correctly at "${NOW} > run-execution-${TIMESTAMP}.log
    echo "Press [CTRL+C] to stop ..."
	sleep 5
done