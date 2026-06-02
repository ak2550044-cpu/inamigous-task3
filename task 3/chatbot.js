const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbot = document.getElementById("chatbot");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");

    // Toggle chatbot visibility
    chatbotBtn.addEventListener("click", () => {
      chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    });

    // Send message
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;
      // Show user message
      const userDiv = document.createElement("div");
      userDiv.className = "message user";
      userDiv.textContent = userMsg;
      chatBody.appendChild(userDiv);

      chatInput.value = "";

      // Bot response (basic AI simulation)
      setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "message bot";
        botDiv.textContent = getBotResponse(userMsg);
        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 500);
    }

    // Simple AI responses
    function getBotResponse(input) {
      input = input.toLowerCase();
      if (input.includes("hello")) return "Hi there! How can I help you?";
      if (input.includes("portfolio")) return "This is Amit's portfolio chatbot. ";
      if (input.includes("contact")) return "You can reach me via the contact form!";
      return "I'm still learning... ";
    }