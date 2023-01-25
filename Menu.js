// HTML elements
const Body = document.getElementsByTagName('body')[0];
const PlayButton = document.getElementById('PlayButton');
const SettingsButton = document.getElementById('SettingsButton');
const ExitButton = document.getElementById('ExitButton');
const SettingsTab = document.getElementById('Settings');

// Onclicks
PlayButton.onclick = Play;
SettingsButton.onclick = Settings;
ExitButton.onclick = Exit;

// Functions
function Play() {
    Body.style.opacity = 0.5;
}

function Settings() {
    Body.style.opacity = 0.5;
}

function Exit() {
    close();
}