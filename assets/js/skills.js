/*Skills Details Table*/

const skillsTable = document.querySelector(".main");

const skills = [
  {
    category: "Programming Languages",
    icon: "fas fa-code",
    items: [
      {
        name: "C++",
        proficiency: 9,
        icon: "fas fa-code",
      },
      {
        name: "JavaScript",
        proficiency: 7,
        icon: "fab fa-js",
      },
      {
        name: "HTML5",
        proficiency: 9,
        icon: "fab fa-html5",
      },
      {
        name: "CSS3",
        proficiency: 8,
        icon: "fab fa-css3-alt",
      },
      {
        name: "SQL",
        proficiency: 7,
        icon: "fas fa-database",
      }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: "fas fa-layer-group",
    items: [
      {
        name: "React",
        proficiency: 8,
        icon: "fab fa-react",
        image: "assets/images/skills/react.png",
      },
      {
        name: "Redux",
        proficiency: 7,
        icon: "material-icons redux-icon",
        materialIcon: "data_object",
        image: "assets/images/skills/redux.png",
      },
      {
        name: "Node.js",
        proficiency: 7,
        icon: "fab fa-node-js",
        image: "assets/images/skills/nodejs.png",
      },
      {
        name: "Tailwind",
        proficiency: 8,
        icon: "fab fa-css3",
        image: "assets/images/skills/tailwind.png",
      },
      {
        name: "Express",
        proficiency: 7,
        icon: "fas fa-server",
        image: "assets/images/skills/express.png",
      }
    ]
  },
  {
    category: "Developer Tools & Databases",
    icon: "fas fa-tools",
    items: [
      {
        name: "Git",
        proficiency: 7,
        icon: "fab fa-git-alt",
        image: "assets/images/skills/git.png",
      },
      {
        name: "GitHub",
        proficiency: 7,
        icon: "fab fa-github",
        image: "assets/images/skills/github.png",
      },
      {
        name: "Postman",
        proficiency: 8,
        icon: "fas fa-paper-plane",
        image: "assets/images/skills/postman.png",
      },
      {
        name: "MySQL",
        proficiency: 7,
        icon: "fas fa-database",
        image: "assets/images/skills/mysql.png",
      },
      {
        name: "MongoDB",
        proficiency: 8,
        icon: "fas fa-leaf",
        image: "assets/images/skills/mongodb.png",
      }
    ]
  },
  {
    category: "Cloud Services",
    icon: "fas fa-cloud",
    items: [
      {
        name: "Vercel",
        proficiency: 8,
        icon: "fas fa-cloud-upload-alt",
        image: "assets/images/skills/vercel.png",
      }
    ]
  }
];

const skillsGrid = document.querySelector(".skills-grid");

const renderSkills = () => {
    let output = "";
    skills.forEach(({category, icon: categoryIcon, items}) => {
        output += `
            <div class="skill-category" data-aos="fade-up">
                <h3 class="category-title">
                    <i class="${categoryIcon}"></i>
                    ${category}
                </h3>
                <div class="skills-container">
                    ${items.map(({icon, name, proficiency}) => `
                        <div class="skill-card">
                            <div class="skill-header">
                                <i class="${icon}"></i>
                                <h4 class="skill-name">${name}</h4>
                                <span class="proficiency-percent">${proficiency*10}%</span>
                            </div>
                            <div class="progress-container">
                                <div class="progress-bar" style="width: ${proficiency*10}%">
                                    <div class="progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    skillsGrid.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  renderSkills();

  // Add intersection observer for animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
});
