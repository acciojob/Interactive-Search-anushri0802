document.getElementById('search-icon').addEventListener('click', function() {
            const searchContainer = document.getElementById('search-container');
            const searchInput = document.getElementById('search-input');
            searchContainer.classList.add('active');
            searchInput.focus();
        });