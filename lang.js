let currentLang = localStorage.getItem('lang') || 'fr';
let translations = {};

async function loadTranslations() {
    const res = await fetch('/lang.json');
    translations = await res.json();
    updateText();
}

function updateText() {
    const langData = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            if (Array.isArray(langData[key])) {
                if (key === "actions_list") {
                    const ul = document.getElementById("actions-list");
                    ul.innerHTML = "";
                    langData[key].forEach(item => {
                        const li = document.createElement("li");
                        li.textContent = item;
                        ul.appendChild(li);
                    });
                } else if (key === "ctf_list") {
                    const ul = document.getElementById("ctf-list");
                    ul.innerHTML = "";
                    langData[key].forEach(item => {
                        const li = document.createElement("li");
                        li.textContent = item;
                        ul.appendChild(li);
                    });
                }
            } else {
                el.innerHTML = langData[key];
            }
        }
    });

    document.documentElement.lang = currentLang;
}

document.getElementById('language-selector').addEventListener('change', e => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    updateText();
});

loadTranslations();
