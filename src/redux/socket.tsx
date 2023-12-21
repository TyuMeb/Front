let socket: WebSocket | null = null;

// const ws = new WebSocket("ws://localhost:ws/chat/(?P<chat_id>d+)/$");
socket = new WebSocket("ws://api.whywe.ru/ws/chat/1/");
