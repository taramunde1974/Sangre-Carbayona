// Buscador simple por tags
document.addEventListener('DOMContentLoaded', function() {
    const headerLeft = document.querySelector('.header-left');
    if (headerLeft) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Buscar por tags (ej. valenciano, Aaron)';
        searchInput.className = 'search-input';
        searchInput.style.cssText = 'width: 100%; padding: 10px; margin-top: 10px; border: 1px solid #003366; border-radius: 5px;';
        headerLeft.appendChild(searchInput);

        const tags = document.querySelectorAll('.tag');
        const profileSection = document.querySelector('.player-profile');

        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            tags.forEach(tag => {
                const tagText = tag.textContent.toLowerCase();
                if (tagText.includes(query)) {
                    tag.style.display = 'inline-block';
                    tag.parentElement.parentElement.style.display = 'block';
                    visibleCount++;
                } else {
                    tag.style.display = 'none';
                }
            });

            if (visibleCount === 0 && query) {
                profileSection.style.display = 'none';
            } else {
                profileSection.style.display = 'block';
            }

            if (!query) {
                tags.forEach(tag => tag.style.display = 'inline-block');
                profileSection.style.display = 'block';
            }
        });
    }
});
