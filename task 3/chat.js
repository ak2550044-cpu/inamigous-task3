// Simple AI responses with portfolio advice
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hi there! 👋 I’m your portfolio assistant.";
  if (input.includes("portfolio")) {
    return "A good portfolio should include:\n" +
           "1️ A clean homepage with your name & tagline\n" +
           "2️ About section with your skills\n" +
           "3️ Projects showcase with screenshots\n" +
           "4️ Contact form or social links\n" +
           "Would you like me to suggest a sample layout?";
  }
  if (input.includes("about")) return "Your About section should highlight your skills, tools you use, and what makes you unique.";
  if (input.includes("projects")) return "Showcase 3-5 key projects with short descriptions, tech stack, and links to GitHub or live demos.";
  if (input.includes("contact")) return "Add a simple contact form or links to LinkedIn, GitHub, and email.";
  if (input.includes("style")) return "Keep it clean and responsive. Use consistent fonts, colors, and spacing. Dark mode is a plus!";
  if (input.includes("thanks")) return "You are welcome! Keep building ";

  return "I can advise on portfolio structure, styling, and best practices. Try asking about 'projects', 'about section', or 'style'.";
}
