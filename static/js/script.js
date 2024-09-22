// Sample events data
const eventsData = {
    cultural: [
        { title: "Cultural Fest", description: "An exciting fest with dance and music.", img: "/images/cultural_fest.webp" },
        { title: "Drama Night", description: "Enjoy a night of dramatic performances.", img: "/images/drama_night.webp" },
    ],
    sports: [
        { title: "Football Tournament", description: "Join us for a thrilling football match.", img: "/images/football_tournament.webp" },
        { title: "Basketball League", description: "Watch the best teams compete.", img: "/images/basketball_league.webp" },
    ],
    tech: [
        { title: "Robotic Workshop", description: "Explore the latest in technology.", img: "/images/robotic_workshop.webp" },
        { title: "Hackathon", description: "Showcase your coding skills.", img: "/images/hackathon.webp" },
    ],
};

// Function to display recent events
function displayRecentEvents() {
    const recentEventContainer = document.getElementById("recent-event-container");
    recentEventContainer.innerHTML = ""; // Clear previous content

    const recentEvents = [
        { title: "Art Exhibition", description: "Explore the finest artworks.", img: "/images/art_exhibition.jpg" },
        { title: "Cooking Workshop", description: "Enjoy live cooking from various chefs.", img: "/images/cooking_workshop.jpg" },
        { title: "Film Screening", description: "Explore the finest artworks of film makers.", img: "/images/film_screening.jpg" },
        { title: "Yoga Class", description: "Practice yoga with great teachers.", img: "/images/yoga_class.webp" },
    ];

    recentEvents.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("recent-event-card");
        card.innerHTML = `
            <img src="${event.img}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <div class="actions">
                <button>Details</button>
                <button>Book Now</button>
            </div>
        `;
        recentEventContainer.appendChild(card);
    });

    setTimeout(() => {
        const cards = document.querySelectorAll('.recent-event-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show'); // Add class to trigger CSS animations
            }, index * 300); // Stagger animation
        });
    }, 100); // Delay before showing cards
}

// Function to filter events by type
function filterEvents(type) {
    const eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = ""; // Clear previous events

    const events = eventsData[type] || [];
    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");
        card.innerHTML = `
            <img src="${event.img}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <div class="actions">
                <button>Details</button>
                <button>Book Now</button>
            </div>
        `;
        eventContainer.appendChild(card);
    });

    setTimeout(() => {
        const cards = document.querySelectorAll('.event-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show'); // Add class to trigger CSS animations
            }, index * 300); // Stagger animation
        });
    }, 100); // Delay before showing cards
}

// Initial function calls
displayRecentEvents();
filterEvents('cultural'); // Show cultural events by default
