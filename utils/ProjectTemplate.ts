export const templates = {
    basic: `# Project Name
  
  ## Description
  Brief description of your project.
  
  ## Installation
  Steps to install your project.
  
  ## Usage
  How to use your project.
  
  ## Contributing
  Guidelines for contributing to your project.
  
  ## License
  Your project's license information.
  `,
  
    detailed: `# Project Name
  
  ## Description
  A detailed description of your project. Explain the problem it solves and its key features.
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Reference](#api-reference)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  Provide step-by-step installation instructions.
  
  ## Usage
  Provide examples of how to use your project. Include code snippets if applicable.
  
  ## API Reference
  If your project has an API, provide detailed endpoint descriptions here.
  
  ## Contributing
  Explain how others can contribute to your project. Include guidelines for pull requests and code style.
  
  ## Tests
  Explain how to run the automated tests for this system.
  
  ## License
  State the license under which your project is available.
  `,
  
    openSource: `# Open Source Project Name
  
  ## 🚀 About
  A brief description of what this project does and who it's for. Highlight the problem it solves and its unique selling points.
  
  ## 🔥 Features
  - Feature 1
  - Feature 2
  - Feature 3
  
  ## 🛠️ Installation
  
  \`\`\`bash
  npm install your-package-name
  \`\`\`
  
  ## 💻 Usage
  
  \`\`\`javascript
  const yourPackage = require('your-package-name');
  
  // Example usage
  yourPackage.amazingFunction();
  \`\`\`
  
  ## 🤝 Contributing
  Contributions, issues, and feature requests are welcome!
  
  See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.
  
  Please adhere to this project's \`code of conduct\`.
  
  ## 📝 License
  This project is [MIT](LICENSE) licensed.
  
  ## 🙏 Acknowledgements
  - List any resources, libraries, or tools that you've used or been inspired by
  - Credit contributors or maintainers
  
  ## 📊 Project Status
  Describe the current status of your project. Is it in active development, maintenance mode, or deprecated?
  
  ## 📞 Contact
  Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com
  
  Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
  `,
  
    portfolio: `# 🌟 Project Name
  
  ## 📌 Overview
  A concise description of the project, its purpose, and the technologies used.
  
  ## 🎯 Objectives
  - Main objective 1
  - Main objective 2
  - Main objective 3
  
  ## 🛠️ Technologies Used
  - Frontend: (e.g., React, Vue.js)
  - Backend: (e.g., Node.js, Python)
  - Database: (e.g., MongoDB, PostgreSQL)
  - Other tools: (e.g., Docker, Git)
  
  ## 🔑 Key Features
  1. Feature 1: Brief description
  2. Feature 2: Brief description
  3. Feature 3: Brief description
  
  ## 📸 Screenshots
  ![Screenshot 1](url_to_screenshot_1)
  ![Screenshot 2](url_to_screenshot_2)
  
  ## 🚀 Demo
  Provide a link to a live demo of your project, if available.
  
  ## 💡 Lessons Learned
  Reflect on what you learned while building this project. Discuss challenges you faced and how you overcame them.
  
  ## 🔜 Future Enhancements
  - Idea for future enhancement 1
  - Idea for future enhancement 2
  - Idea for future enhancement 3
  
  ## 🔗 Links
  - [Live Site](your_live_site_url)
  - [GitHub Repository](your_github_repo_url)
  
  ## 👤 About Me
  Your name - Brief bio or tagline
  
  - Portfolio: [Your portfolio URL]
  - LinkedIn: [Your LinkedIn URL]
  - GitHub: [Your GitHub URL]
  
  ## 📬 Contact
  Your Name - your.email@example.com
  
  Feel free to reach out if you have any questions or just want to connect!
  `
  };
  
  export type TemplateName = keyof typeof templates;