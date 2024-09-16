// Array containing all category data
const categoryData = [
    {
        id: 'places-to-visit',
        title: 'Places To Visit',
        items: [
            {
                title: "Taj Mahal",
                description: "The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum...",
                imageSrc: "Images/Taj-Mahel.jpg"
            },
            {
                title: "Gateway of India",
                description: "Situated in Mumbai, the Gateway of India is an iconic landmark built in 1924...",
                imageSrc: "Images/Getway-of-India.jpg"
            },
            // ... add all other places
        ]
    },
    {
        id: 'festivals',
        title: 'Festivals',
        items: [
            {
                title: "Diwali",
                description: "Diwali, or Deepavali, is a major Indian festival celebrating the triumph of light over darkness...",
                imageSrc: "Images/diwali.jpg"
            },
            {
                title: "Janmastmi",
                description: "Janmashtami is a Hindu festival celebrating the birth of Lord Krishna, the eighth avatar of Vishnu...",
                imageSrc: "Images/Janamastmi.jpg"
            },
            // ... add all other festivals
        ]
    },
    {
        id: 'art-music',
        title: 'Art & Music',
        items: [
            {
                title: "Madhubani Painting",
                description: "Originating from the Mithila region of Bihar, Madhubani paintings are known for their vibrant colors...",
                imageSrc: "Images/Madhubani%20Painting.jpg"
            },
            {
                title: "Warli Art",
                description: "A tribal art form from Maharashtra, Warli painting uses simple geometric shapes...",
                imageSrc: "Images/Warli%20Art.jpg"
            },
            // ... add all other art and music items
        ]
    }
];

// Function to generate cards dynamically
function generateCards() {
    const categoriesContainer = document.getElementById('categories');
    categoryData.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.id = category.id;
        categorySection.className = 'category';
        
        categorySection.innerHTML = `
            <h3>${category.title}</h3>
            <div class="cards-wrapper">
                <div class="cards-container">
                    ${category.items.map(item => `
                        <div class="card">
                            <div class="card-image">
                                <img src="${item.imageSrc}" alt="${item.title}">
                            </div>
                            <div class="card-info">
                                <h4>${item.title}</h4>
                                <p class="card-description">${item.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="nav-arrow left">&lt;</button>
                <button class="nav-arrow right">&gt;</button>
            </div>
        `;
        
        categoriesContainer.appendChild(categorySection);
    });
}

// Call the function to generate cards on page load
window.onload = function() {
    generateCards();
    setupNavigation();
    setupSmoothScrolling();
    setupContactForm();
    setupCopyrightYear();
    setupMapInteraction();
};

// Setup navigation arrows
function setupNavigation() {
    const cardContainers = document.querySelectorAll('.cards-container');
    const navArrows = document.querySelectorAll('.nav-arrow');

    let autoMoveInterval;

    function moveCards(container, direction) {
        const cards = container.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

        if (direction === 'left') {
            container.prepend(container.lastElementChild);
            container.scrollLeft += cardWidth;
            container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
            setTimeout(() => {
                container.append(container.firstElementChild);
                container.scrollLeft -= cardWidth;
            }, 300);
        }
    }

    function startAutoMove() {
        autoMoveInterval = setInterval(() => {
            cardContainers.forEach(container => {
                moveCards(container, 'right');
            });
        }, 5000);
    }

    function stopAutoMove() {
        clearInterval(autoMoveInterval);
    }

    cardContainers.forEach(container => {
        const cardWidth = container.querySelector('.card').offsetWidth + 
                          parseInt(getComputedStyle(container.querySelector('.card')).marginRight);
        container.scrollLeft = cardWidth * 2;
    });

    startAutoMove();

    cardContainers.forEach(container => {
        container.addEventListener('wheel', (e) => e.preventDefault());
    });

    navArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const container = arrow.parentElement.querySelector('.cards-container');
            const direction = arrow.classList.contains('left') ? 'left' : 'right';
            stopAutoMove();
            moveCards(container, direction);
            startAutoMove();
        });
    });

    cardContainers.forEach(container => {
        container.addEventListener('mouseenter', stopAutoMove);
        container.addEventListener('mouseleave', startAutoMove);
    });
}

// Setup smooth scrolling for internal links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            console.log('Form submitted with data:', Object.fromEntries(formData));
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Setup dynamic copyright year
function setupCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} NovaVault. All rights reserved.`;
    }
}

// Setup map interaction
function setupMapInteraction() {
    document.querySelectorAll('#india-map svg path').forEach((state) => {
        state.addEventListener('click', () => {
            const stateId = state.getAttribute('id');
            if (stateId === 'gujarat') {
                window.location.href = 'gujarat.html';
            } else {
                console.log(`State ${stateId} clicked. Add redirection as needed.`);
            }
        });
    });
}


// Side menu functionality
const sideMenu = document.getElementById('side-menu');
const sideMenuTrigger = document.createElement('div');
sideMenuTrigger.className = 'side-menu-trigger';
document.body.appendChild(sideMenuTrigger);

let isMenuOpen = false;

sideMenuTrigger.addEventListener('mouseenter', () => {
    sideMenu.style.left = '0';
    isMenuOpen = true;
});

document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !sideMenuTrigger.contains(event.target)) {
        sideMenu.style.left = '-250px';
        isMenuOpen = false;
    }
});

sideMenuTrigger.addEventListener('mouseenter', () => {
    if (!isMenuOpen) {
        sideMenu.style.left = '0';
        isMenuOpen = true;
    }
});

sideMenu.addEventListener('mouseleave', () => {
    // The menu will now stay open until clicked outside
});