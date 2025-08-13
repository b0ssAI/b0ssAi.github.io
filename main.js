// Управление вкладками
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    });
});

// ИИ интеграция
const aiChat = document.getElementById('aiChat');
const aiInput = document.querySelector('.terminal-input');

aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const question = aiInput.value;
        aiChat.innerHTML += `<div class="user-question">> ${question}</div>`;
        aiInput.value = '';
        
        // Эмуляция ответа ИИ
        setTimeout(() => {
            aiChat.innerHTML += `<div class="ai-response">Gemini: Запрос обработан. Результаты могут быть неточными.</div>`;
            aiChat.scrollTop = aiChat.scrollHeight;
        }, 1000);
    }
});
