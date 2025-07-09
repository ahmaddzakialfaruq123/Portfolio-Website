document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            } else {
                // Optional: remove visible class when out of view
                // entry.target.classList.remove('reveal-visible');
            }
        });
    }, {
        threshold: 0.1 // Adjust as needed
    });

    revealElements.forEach(el => observer.observe(el));


    // --- Skills Section Logic ---
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillCards = document.querySelectorAll('.skill-card');
    const skillDescription = document.getElementById('skill-description');

    const descriptions = {
        'web-development': 'My focus here is on building intuitive and dynamic web experiences, from structuring content to creating interactive functionalities.',
        'cybersecurity': 'I delve into securing digital systems and data, exploring methods for protection, analysis, and threat mitigation.',
        'ui-ux-design': 'Crafting user-centered interfaces and experiences is my passion, ensuring aesthetic appeal meets seamless usability.'
    };

    function showSkills(category) {
        // Update description
        skillDescription.textContent = descriptions[category];

        // Hide all cards
        skillCards.forEach(card => {
            card.style.display = 'none';
        });

        // Show cards for the selected category
        document.querySelectorAll(`.skill-card[data-category="${category}"]`).forEach(card => {
            card.style.display = 'flex'; // Use flex display for the cards
        });
    }

    // Add event listeners to tabs
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            skillTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Get the skill category from data-skill attribute
            const category = tab.dataset.skill;
            showSkills(category);
        });
    });

    // Initial load: show Web Development skills
    showSkills('web-development');
});