#!/bin/bash
NOW=$(date +%F' '%H:%M:%S)
TIMESTAMP=$(date +%s)
while $1
do
	mkdir -p build-execution
	cd build-execution
	echo "Build executed correctly at "${NOW} > build-execution-${TIMESTAMP}.log
    echo "Press [CTRL+C] to stop ..."
	sleep 5
done