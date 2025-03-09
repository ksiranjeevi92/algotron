## Node JS

- what is Reactor Pattern in NodeJS

## Event Loop Phases

- Timers Phase → Executes setTimeout() & setInterval().
- Pending Callbacks → Executes I/O callbacks (like file operations).
- Idle, Prepare → Internal Node.js processes.
- Poll Phase → Retrieves new I/O events.
- Check Phase → Executes setImmediate() callbacks.
- Close Callbacks → Executes cleanup functions (like socket.on('close', ...)).
