document.addEventListener('DOMContentLoaded', function () {
    const quoteContainer = document.getElementById('quote');
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteContainer.innerHTML = `<blockquote>"${data.content}"</blockquote><cite>- ${data.author}</cite>`;
        })
        .catch(error => {
            quoteContainer.textContent = "Could not load quote. Please try again later.";
            console.error("Error fetching quote:", error);
        });
});