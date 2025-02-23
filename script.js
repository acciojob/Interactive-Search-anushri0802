const search = document.querySelector('.search');
        const input = document.querySelector('.input');
        const btn = document.querySelector('.btn');

        btn.addEventListener('click', () => {
            search.classList.toggle('active'); // Toggle active class
            input.focus(); // Focus on the input field
        });