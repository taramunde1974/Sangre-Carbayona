        /* javaredessociales.js */
        const urlToShare = window.location.href;
        const textToShare = "Mira este contenido interesante";

        document.getElementById('share-facebook').onclick = function() {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`, '_blank');
        }

        document.getElementById('share-twitter').onclick = function() {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}&url=${encodeURIComponent(urlToShare)}`, '_blank');
        }

        document.getElementById('share-whatsapp').onclick = function() {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}%20${encodeURIComponent(urlToShare)}`, '_blank');
        }

        document.getElementById('share-telegram').onclick = function() {
            window.open(`https://t.me/share/url?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`, '_blank');
        }
