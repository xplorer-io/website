import { ChatMessage } from "@/models/XploresAI";

export const aiResponseMock: ChatMessage[] = [
  {
    role: "user",
    content: "",
  },
  {
    role: "user",
    content: "hey",
  },
  {
    role: "system",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "how are you doing",
  },
  {
    role: "system",
    content: "Is there something specific you need help with?",
  },
  {
    role: "user",
    content: "i need a help with a python problem",
  },
  {
    role: "system",
    content: "I'm here and ready to help. How can I assist you today?",
  },
  {
    role: "user",
    content: "i want to create a http server using python",
  },
  {
    role: "system",
    content:
      "Could you please provide more details about the Python problem you are facing? That way, I can better assist you.",
  },
  {
    role: "user",
    content:
      "i need to create a backend api using djyango, that returns details about a person when requested\n",
  },
  {
    role: "system",
    content:
      "Creating an HTTP server in Python is straightforward. You can use the built-in `http.server` module to get a basic HTTP server up and running. Here's a simple example:\n\n### Step 1: Basic HTTP Server\n\n```python\nimport http.server\nimport socketserver\n\n# Define the port on which you want to serve\nPORT = 8000\n\n# Create a simple request handler class\nHandler = http.server.SimpleHTTPRequestHandler\n\n# Create a TCPServer object and bind it to the given port\nhttpd = socketserver.TCPServer((\"\", PORT), Handler)\n\nprint(f\"Serving HTTP on port {PORT}\")\n\n# Serve the HTTP requests\nhttpd.serve_forever()\n```\n\n### Step 2: Running the Server\n\n1. Save the script (e.g., `http_server.py`).\n2. Open a terminal and navigate to the directory where the script is saved.\n3. Run the script with Python:\n   ```sh\n   python http_server.py\n   ```\n4. Open a web browser and navigate to `http://localhost:8000` to see your server in action.\n\nThis will serve files from the directory where the script is located. You can place HTML files and other resources in the same directory to serve them.\n\n### Customizing the Server\n\nIf you need to customize the behavior of the server, you can subclass `SimpleHTTPRequestHandler` to handle specific routes or HTTP methods:\n\n```python\nimport http.server\nimport socketserver\n\nPORT = 8000\n\nclass MyHandler(http.server.SimpleHTTPRequestHandler):\n    def do_GET(self):\n        if self.path == '/hello':\n            self.send_response(200)\n            self.send_header('Content-type', 'text/plain')\n            self.end_headers()\n            self.wfile.write(b'Hello, world!')\n        else:\n            super().do_GET()\n\nhttpd = socketserver.TCPServer((\"\", PORT), MyHandler)\n\nprint(f\"Serving HTTP on port {PORT}\")\nhttpd.serve_forever()\n```\n\nWith this setup, navigating to `http://localhost:8000/hello` will return `Hello, world!`, while other paths will be handled by the default behavior of serving files.\n\nFeel free to ask if you need more specific features or further assistance!",
  },
];
