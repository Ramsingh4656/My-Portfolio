// Skills Data
const skillsData = {
    categories: [
        {
            name: "Frontend",
            skills: [
                { name: "HTML", level: 90, icon: "🌐" },
                { name: "CSS", level: 85, icon: "🎨" },
                { name: "JavaScript", level: 80, icon: "⚡" },
                { name: "React", level: 75, icon: "⚛️" },
                { name: "Tailwind CSS", level: 85, icon: "💨" }
            ]
        },
        {
            name: "Programming",
            skills: [
                { name: "C", level: 80, icon: "🔧" },
                { name: "C++", level: 75, icon: "⚙️" },
                { name: "Python", level: 85, icon: "🐍" },
                { name: "Java", level: 70, icon: "☕" }
            ]
        },
        {
            name: "Database & Tools",
            skills: [
                { name: "MySQL", level: 75, icon: "🗄️" },
                { name: "Git", level: 80, icon: "📦" },
                { name: "VS Code", level: 90, icon: "💻" },
                { name: "Linux", level: 70, icon: "🐧" }
            ]
        }
    ]
};

// Projects Data
const projectsData = {
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce website with shopping cart, payment integration, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/Ramsingh4656/birthday",
            link:"https://ramsingh4656.github.io/birthday/",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
            color: "linear-gradient(135deg, #3b82f6, #06b6d4)"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity app with drag-and-drop functionality, real-time updates, and team collaboration features.",
            tech: ["React", "Firebase", "Tailwind CSS"],
            github: "https://github.com/Ramsingh4656",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
            color: "linear-gradient(135deg, #8b5cf6, #ec4899)"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather application with forecasts, interactive maps, and location-based alerts.",
            tech: ["JavaScript", "OpenWeather API", "Chart.js"],
            github: "https://github.com/Ramsingh4656",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
            color: "linear-gradient(135deg, #f97316, #ef4444)"
        },
        {
            id: 4,
            title: "Blog Platform",
            description: "A modern blogging platform with markdown support, comments, and user authentication.",
            tech: ["Next.js", "PostgreSQL", "Prisma"],
            github: "https://github.com/Ramsingh4656",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
            color: "linear-gradient(135deg, #10b981, #14b8a6)"
        },
        {
            id: 5,
            title: "Portfolio Generator",
            description: "An automated tool to generate beautiful portfolio websites from JSON configuration files.",
            tech: ["Python", "Flask", "Jinja2", "Bootstrap"],
            github: "https://github.com/Ramsingh4656",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
            color: "linear-gradient(135deg, #6366f1, #8b5cf6)"
        },
        {
            id: 6,
            title: "Chat Application",
            description: "Real-time chat app with private messaging, group chats, and file sharing capabilities.",
            tech: ["React", "Socket.io", "Express", "MongoDB"],
            github: "https://github.com/Ramsingh4656",
            image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=250&fit=crop",
            color: "linear-gradient(135deg, #ec4899, #f43f5e)"
        }
    ]
};

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Typing Effect
const typingText = document.getElementById('typing-text');
const text = 'IT Student | Developer | Tech Enthusiast';
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
    } else {
        typingText.innerHTML += '<span class="cursor">|</span>';
    }
}

setTimeout(type, 500);

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    skillsData.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        let skillsHTML = `<h3>${category.name}</h3>`;
        
        category.skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <div class="skill-header">
                        <div class="skill-name">
                            <span>${skill.icon}</span>
                            <span>${skill.name}</span>
                        </div>
                        <div class="skill-level">${skill.level}%</div>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 0%" data-width="${skill.level}%"></div>
                    </div>
                </div>
            `;
        });
        
        categoryDiv.innerHTML = skillsHTML;
        skillsGrid.appendChild(categoryDiv);
    });
    
    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projectsData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techTags = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay" style="background: ${project.color}"></div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">
                        <span>📦</span> Code
                    </a>
                    <a href="${project.link}" target="_blank">
                        <span>🔗</span> Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Contact Form
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    formStatus.className = 'form-status success';
    formStatus.textContent = '✅ Message sent successfully! (Demo mode - no actual email sent)';
    
    // Reset form
    contactForm.reset();
    
    // Hide status after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Initialize
renderSkills();
renderProjects();

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(section);
});

// Hero section should be visible immediately
document.querySelector('.hero').style.opacity = '1';
document.querySelector('.hero').style.transform = 'translateY(0)';


