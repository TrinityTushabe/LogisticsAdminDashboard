document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle visibility of sections
    const toggleSection = (sectionId) => {
        const sections = document.querySelectorAll('.info');
        sections.forEach(section => {
            section.style.display = (section.id === sectionId) ? 'block' : 'none';
        });
    };

    // Hide all sections except "Overview" initially
    toggleSection('overview');

    // Toggle dark mode based on user preference
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', function () {
        const darkModeEnabled = darkModeToggle.checked;
        document.body.classList.toggle('dark-mode', darkModeEnabled);

        // Optionally, you can update the color scheme based on dark mode
        if (darkModeEnabled) {
            // Dark mode colors
            document.body.style.backgroundColor = '#0066b2'; // Dark blue background

            // Update navigation bar and sidebar colors
            document.querySelector('.navbar').classList.add('dark-mode');
            document.querySelector('.sidebar').classList.add('dark-mode');

            // Update text colors for better readability
            document.body.style.color = 'white';
        } else {
            // Light mode colors
            document.body.style.backgroundColor = 'white';

            // Reset navigation bar and sidebar colors
            document.querySelector('.navbar').classList.remove('dark-mode');
            document.querySelector('.sidebar').classList.remove('dark-mode');

            // Reset text colors
            document.body.style.color = 'black';
        }
    });

    // Function to show a specific section
    window.showSection = toggleSection;
});
