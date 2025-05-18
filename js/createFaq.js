function createFaq (arr, container) {
    // Генеруємо HTML для кожного FAQ
    arr.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const question = document.createElement('div');
        question.classList.add('faq-question');
        question.textContent = faq.question;

        const answer = document.createElement('div');
        answer.classList.add('faq-answer');
        answer.textContent = faq.answer;

        faqItem.appendChild(question);
        faqItem.appendChild(answer);
        container.appendChild(faqItem);
    });

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');

            // Закриваємо всі відповіді
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
                ans.previousElementSibling.classList.remove('active');
            });

            // Якщо відповідь не була активною, відкриваємо її
            if (!isActive) {
                answer.classList.add('active');
                question.classList.add('active');
            }
        });
    });
}

export {createFaq};