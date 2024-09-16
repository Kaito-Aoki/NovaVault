const places = [
    {
        id: 1,
        name: "Statue of Unity",
        type: "Famous",
        category: "Monument",
        image: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1543910413/StatueofUnity1_1543908986.jpg",
        summary: "The world's tallest statue, dedicated to Sardar Vallabhbhai Patel."
    },
    {
        id: 2,
        name: "Gir National Park",
        type: "Famous",
        category: "Nature",
        image: "https://example.com/gir_national_park.jpg",
        summary: "Home to the Asiatic lion, Gir is the only place in the world where you can spot them in the wild."
    },
    {
        id: 3,
        name: "Rani ki Vav",
        type: "Underrated",
        category: "Historical",
        image: "https://example.com/rani_ki_vav.jpg",
        summary: "An intricately constructed stepwell in Patan, a UNESCO World Heritage site."
    },
    {
        id: 4,
        name: "Dwarkadhish Temple",
        type: "Famous",
        category: "Religious",
        image: "https://example.com/dwarkadhish_temple.jpg",
        summary: "A sacred Hindu temple dedicated to Lord Krishna, believed to be over 2,000 years old."
    },
    {
        id: 5,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    },
    {
        id: 6,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    },
    {
        id: 7,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    }
    ,
    {
        id: 8,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    }
    ,
    {
        id: 9,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    }
    ,
    {
        id: 10,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    }
    ,
    {
        id: 11,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    }
    ,
    {
        id: 12,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    }
    ,
    {
        id: 13,
        name: "Saputara",
        type: "Underrated",
        category: "Nature",
        image: "https://example.com/saputara.jpg",
        summary: "A picturesque hill station in the Dang district, offering a cool retreat from the Gujarat heat."
    }

];

const cuisines = [
    { id: 1, name: "Dhokla", image: "https://example.com/dhokla.jpg", summary: "A savory steamed cake made from fermented rice and split chickpeas." },
    { id: 2, name: "Thepla", image: "https://example.com/thepla.jpg", summary: "A flatbread made with fenugreek leaves, perfect for travel snacks." },
    { id: 3, name: "Undhiyu", image: "https://example.com/undhiyu.jpg", summary: "A mixed vegetable casserole, traditionally cooked upside down underground." },
    { id: 4, name: "Khandvi", image: "https://example.com/khandvi.jpg", summary: "Savory rolls made from gram flour and yogurt, seasoned with spices." },
    { id: 5, name: "Dabeli", image: "https://example.com/dabeli.jpg", summary: "A spicy potato filling in a bun, topped with chutneys and sev." }
];

const events = [
    { id: 1, name: "Rann Utsav", image: "https://example.com/rann_utsav.jpg", summary: "A vibrant festival celebrating the culture and heritage of Kutch." },
    { id: 2, name: "International Kite Festival", image: "https://example.com/kite_festival.jpg", summary: "A colorful event where kite flyers from around the world showcase their skills." },
    { id: 3, name: "Navratri", image: "https://example.com/navratri.jpg", summary: "Nine nights of traditional dance and festivities across Gujarat." },
    { id: 4, name: "Modhera Dance Festival", image: "https://example.com/modhera_dance.jpg", summary: "A three-day classical dance festival held at the Sun Temple in Modhera." },
    { id: 5, name: "Tarnetar Fair", image: "https://example.com/tarnetar_fair.jpg", summary: "A vibrant matrimonial fair and celebration of folk culture." }
];

function renderCards(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-info">
                <h3 class="card-title">${item.name}</h3>
                ${item.type ? `<p class="card-subtitle">${item.type}</p>` : ''}
                ${item.category ? `<p class="card-subtitle">${item.category}</p>` : ''}
                <div class="card-summary">
                    <p>${item.summary}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => showModal(item));
        container.appendChild(card);
    });
    // Trigger the animation after rendering
    setTimeout(() => {
        addScrollAnimation();
    }, 100);
}

function showModal(item) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: auto; max-height: 300px; object-fit: cover;">
            <h2>${item.name}</h2>
            ${item.type ? `<p><strong>Type:</strong> ${item.type}</p>` : ''}
            ${item.category ? `<p><strong>Category:</strong> ${item.category}</p>` : ''}
            <p>${item.summary}</p>
            <div id="additional-info"></div>
            <button id="load-more-btn">Load More Information</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };

    const loadMoreBtn = modal.querySelector('#load-more-btn');
    loadMoreBtn.addEventListener('click', () => loadAdditionalInfo(item, modal));

    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function loadAdditionalInfo(item, modal) {
    const additionalInfoDiv = modal.querySelector('#additional-info');
    additionalInfoDiv.innerHTML = '<p>Loading additional information...</p>';
    
    // Simulating an API call or data fetch
    setTimeout(() => {
        additionalInfoDiv.innerHTML = `
            <h3>Additional Information</h3>
            <p><strong>Best time to visit:</strong> October to March</p>
            <p><strong>How to reach:</strong> By air, rail, or road. ${item.name} is well-connected to major cities.</p>
            <p><strong>Nearby attractions:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p><strong>Tips for visitors:</strong> Respect local customs, dress modestly, and carry sufficient water.</p>
        `;
        modal.querySelector('#load-more-btn').style.display = 'none';
    }, 1000);
}

function filterItems(items, searchTerm, typeFilter = null, categoryFilter = null) {
    return items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = !typeFilter || typeFilter === 'all' || item.type === typeFilter;
        const matchesCategory = !categoryFilter || categoryFilter === 'all' || item.category === categoryFilter;
        return matchesSearch && matchesType && matchesCategory;
    });
}

function updateResults() {
    const searchTerm = document.getElementById('searchInput').value;
    const typeFilter = document.getElementById('typeFilter') ? document.getElementById('typeFilter').value : null;
    const categoryFilter = document.getElementById('categoryFilter') ? document.getElementById('categoryFilter').value : null;

    const filteredPlaces = filterItems(places, searchTerm, typeFilter, categoryFilter);
    const filteredCuisines = filterItems(cuisines, searchTerm);
    const filteredEvents = filterItems(events, searchTerm);

    renderCards(filteredPlaces, 'places-container');
    renderCards(filteredCuisines, 'cuisines-container');
    renderCards(filteredEvents, 'events-container');

    updateResultCounts(filteredPlaces, filteredCuisines, filteredEvents);
}

function updateResultCounts(filteredPlaces, filteredCuisines, filteredEvents) {
    document.getElementById('places-count').textContent = filteredPlaces.length;
    document.getElementById('cuisines-count').textContent = filteredCuisines.length;
    document.getElementById('events-count').textContent = filteredEvents.length;
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === `${sectionId}-section`) {
            section.classList.remove('hidden-section');
            setTimeout(() => section.classList.add('active-section'), 50);
        } else {
            section.classList.remove('active-section');
            setTimeout(() => section.classList.add('hidden-section'), 300);
        }
    });
}

function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            showSection(button.dataset.section);
        });
    });

    document.querySelector('.home-button').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('overview');
        navButtons.forEach(btn => btn.classList.remove('active'));
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchInput.addEventListener('input', debounce(updateResults, 300));
    searchButton.addEventListener('click', updateResults);

    if (document.getElementById('typeFilter')) {
        document.getElementById('typeFilter').addEventListener('change', updateResults);
    }
    if (document.getElementById('categoryFilter')) {
        document.getElementById('categoryFilter').addEventListener('change', updateResults);
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function addScrollAnimation() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
}

function init() {
    renderCards(places, 'places-container');
    renderCards(cuisines, 'cuisines-container');
    renderCards(events, 'events-container');

    initializeNavigation();
    initializeSearch();
    addScrollAnimation();

    showSection('overview');
}

init();

function renderCards(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-info">
                <h3 class="card-title">${item.name}</h3>
                ${item.type ? `<p class="card-subtitle">${item.type}</p>` : ''}
                ${item.category ? `<p class="card-subtitle">${item.category}</p>` : ''}
                <div class="card-summary">
                    <p>${item.summary}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => showModal(item));
        container.appendChild(card);
    });
    // Remove the animation trigger
}

function showModal(item) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            ${item.type ? `<p><strong>Type:</strong> ${item.type}</p>` : ''}
            ${item.category ? `<p><strong>Category:</strong> ${item.category}</p>` : ''}
            <p>${item.summary}</p>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };

    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function filterItems(items, searchTerm, typeFilter = null, categoryFilter = null) {
    return items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = !typeFilter || typeFilter === 'all' || item.type === typeFilter;
        const matchesCategory = !categoryFilter || categoryFilter === 'all' || item.category === categoryFilter;
        return matchesSearch && matchesType && matchesCategory;
    });
}

function updateResults() {
    const searchTerm = document.getElementById('searchInput').value;
    const typeFilter = document.getElementById('typeFilter') ? document.getElementById('typeFilter').value : null;
    const categoryFilter = document.getElementById('categoryFilter') ? document.getElementById('categoryFilter').value : null;

    const filteredPlaces = filterItems(places, searchTerm, typeFilter, categoryFilter);
    const filteredCuisines = filterItems(cuisines, searchTerm);
    const filteredEvents = filterItems(events, searchTerm);

    renderCards(filteredPlaces, 'places-container');
    renderCards(filteredCuisines, 'cuisines-container');
    renderCards(filteredEvents, 'events-container');

    updateResultCounts(filteredPlaces, filteredCuisines, filteredEvents);
}

function updateResultCounts(filteredPlaces, filteredCuisines, filteredEvents) {
    document.getElementById('places-count').textContent = filteredPlaces.length;
    document.getElementById('cuisines-count').textContent = filteredCuisines.length;
    document.getElementById('events-count').textContent = filteredEvents.length;
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === `${sectionId}-section`) {
            section.classList.remove('hidden-section');
            setTimeout(() => section.classList.add('active-section'), 50);
        } else {
            section.classList.remove('active-section');
            setTimeout(() => section.classList.add('hidden-section'), 300);
        }
    });
}

function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            showSection(button.dataset.section);
        });
    });

    document.querySelector('.home-button').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('overview');
        navButtons.forEach(btn => btn.classList.remove('active'));
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchInput.addEventListener('input', debounce(updateResults, 300));
    searchButton.addEventListener('click', updateResults);

    document.getElementById('typeFilter').addEventListener('change', updateResults);
    document.getElementById('categoryFilter').addEventListener('change', updateResults);
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}


function init() {
    renderCards(places, 'places-container');
    renderCards(cuisines, 'cuisines-container');
    renderCards(events, 'events-container');

    initializeNavigation();
    initializeSearch();
    // Remove the call to addScrollAnimation

    showSection('overview');
}

init();