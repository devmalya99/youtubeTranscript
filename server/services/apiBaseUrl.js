const VITE_BACKEND_IP=process.env.VITE_BACKEND_IP
export const apiBaseUrl = `http://${VITE_BACKEND_IP}:${process.env.VITE_BACKEND_PORT}`;     