// Initialize Twitch Embeds with a function to adjust themes
function createTwitchEmbed(elementId, channelName) {
    return new Twitch.Embed(elementId, {
        width: "100%",
        height: "100%",
        channel: channelName,
        theme: localStorage.getItem('theme') || 'light', // Use saved theme or default to light
        layout: "video-with-chat"
    });
}

// Embeds for each channel
const beeChat = createTwitchEmbed("bee-chat1", "boringlittlebee");
const stressChat = createTwitchEmbed("stress-chat2", "stresswars");
const lanChat = createTwitchEmbed("lan-chat3", "lantee");

// Toggle night mode function
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const theme = document.body.classList.contains('night-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Save theme to local storage
    
    // Update Twitch embeds to the new theme
    beeChat.setTheme(theme);
    stressChat.setTheme(theme);
    lanChat.setTheme(theme);
}

// Set initial theme based on local storage
document.body.classList.add(localStorage.getItem('theme') === 'dark' ? 'night-mode' : '');

// Event listener for button
document.getElementById('toggle-theme').addEventListener('click', toggleNightMode);
