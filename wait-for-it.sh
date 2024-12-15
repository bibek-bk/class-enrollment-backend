
#!/usr/bin/env bash

set -e

TIMEOUT=30
HOST=$1
PORT=$2
CMD="${@:3}"

if [ -z "$HOST" ] || [ -z "$PORT" ]; then
  echo "Usage: $0 host port [command]"
  exit 1
fi

for i in $(seq $TIMEOUT); do
  if nc -z "$HOST" "$PORT"; then
    echo "$HOST:$PORT is available."
    exec $CMD
  fi
  echo "Waiting for $HOST:$PORT..."
  sleep 1
done

echo "Timeout reached while waiting for $HOST:$PORT."
exit 1