#!/bin/bash
NOW=$(date +%F' '%H:%M:%S)
TIMESTAMP=$(date +%s)
while $1
do
	mkdir -p test-execution
	cd test-execution
	echo "Test executed correctly at "${NOW} > test-execution-${TIMESTAMP}.log
    echo "Press [CTRL+C] to stop ..."
	sleep 5
done