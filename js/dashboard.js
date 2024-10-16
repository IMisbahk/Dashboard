window.onload = function () {
    // Load random data from JSON
    fetch('assets/js/data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('randomDataContainer');
            data.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item.message;
                container.appendChild(div);
            });
        });
};
