function loadTwitchChats(theme) {
    const embedOptions = {
        width: "100%",
        height: "100%",
        layout: "video-with-chat",
        theme: theme
    };

    new Twitch.Embed("bee-chat1", {
        ...embedOptions,
        channel: "boringlittlebee"
    });

    new Twitch.Embed("stress-chat2", {
        ...embedOptions,
        channel: "stresswars"
    });

    new Twitch.Embed("lan-chat3", {
        ...embedOptions,
        channel: "lanitee"
    });
}

function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light'; // Default to light theme
    document.body.setAttribute('data-theme', theme);
    loadTwitchChats(theme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    loadTwitchChats(newTheme);
}

document.getElementById('mode-toggle').addEventListener('click', toggleTheme);
window.addEventListener('DOMContentLoaded', loadTheme); // Ensure this runs when the page is fully loaded
