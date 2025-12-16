// Grab DOM elements
const previewScreen = document.getElementById('previewScreen');
const inputs = {
    name: document.getElementById('inputName'),
    job: document.getElementById('inputJob'),
    bio: document.getElementById('inputBio'),
    btn1: document.getElementById('btnLabel1'),
    btn2: document.getElementById('btnLabel2')
};

const previews = {
    name: document.getElementById('previewName'),
    job: document.getElementById('previewJob'),
    bio: document.getElementById('previewBio'),
    btn1: document.getElementById('previewBtn1'),
    btn2: document.getElementById('previewBtn2')
};

// 1. REAL TIME UPDATER
// Listen for any input change and update the text in the phone preview
Object.keys(inputs).forEach(key => {
    inputs[key].addEventListener('input', (e) => {
        if(previews[key]) {
            previews[key].textContent = e.target.value;
        }
    });
});

// 2. TEMPLATE SWITCHER
function setTemplate(templateName) {
    // Remove all previous template classes
    previewScreen.className = 'screen'; 
    
    // Add the new specific template class
    previewScreen.classList.add(templateName);

    // Update buttons visual state
    const buttons = document.querySelectorAll('.t-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Find the button that was clicked (using event bubbling or matching onclick)
    // For simplicity, we loop to find which one calls this arg, 
    // or just rely on the user interface updating. 
    // Here is a simple UI update logic:
    const activeBtn = Array.from(buttons).find(b => b.getAttribute('onclick').includes(templateName));
    if(activeBtn) activeBtn.classList.add('active');
}

// Set default template on load
setTemplate('tpl-modern-pmma');