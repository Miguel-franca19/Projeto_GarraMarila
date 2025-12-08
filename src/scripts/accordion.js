document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            header.classList.toggle('active');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '–';
            }
        });
    });
});