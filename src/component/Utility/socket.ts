import { io, Socket } from 'socket.io-client';

// const SOCKET_URL = 'http://localhost:8080'; // Replace with your backend URL
const SOCKET_URL = '192.168.0.108:5000'

export const socket: Socket = io(SOCKET_URL, {
  path: '/socket.io',
  autoConnect: false, // To control when to connect explicitly
  transports: ['websocket'], // Ensure WebSocket is used
});
