#!/bin/bash

# MrCall Website Development Server Script

PORT=8000
PID_FILE=".server.pid"

start() {
    if [ -f "$PID_FILE" ]; then
        echo "Server might already be running. Use 'stop' first."
        exit 1
    fi
    echo "Starting development server on http://localhost:$PORT"
    python3 -m http.server $PORT &
    echo $! > "$PID_FILE"
    echo "Server started with PID $(cat $PID_FILE)"
}

stop() {
    if [ -f "$PID_FILE" ]; then
        kill $(cat "$PID_FILE") 2>/dev/null
        rm "$PID_FILE"
        echo "Server stopped"
    else
        echo "No server running"
    fi
}

restart() {
    stop
    sleep 1
    start
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac
