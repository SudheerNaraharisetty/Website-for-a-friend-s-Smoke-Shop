document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('selectedLocation').textContent = localStorage.getItem('selectedLocation');
});

function rate(stars) {
    const location = localStorage.getItem('selectedLocation');
    if (stars <= 3) {
        if (location === '79') {
            window.location.href = 'https://forms.gle/TdZqw29WN6moocTv6';
        } else {
            window.location.href = 'https://forms.gle/ap4st5UCG43xbdmb9';
        }
    } else {
        if (location === '79') {
            window.location.href = 'https://www.google.com/search?q=617+Smoke+Shop&ludocid=1116541599902629638#lrd=0x89e377f42a17ea01:0xf7ec0ab5f247f06,3,,,,';
        } else {
            window.location.href = 'https://www.google.com/search?q=617+Smoke+Shop&ludocid=13245234410688935775#lrd=0x89e377d3693ae8bd:0xb7d086852fe4f75f,3,,,,';
        }
    }
}

document.getElementById('recommendationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbyKKpPXb6tYQg8CGwLQBgB4B2rk6vbmAaJVnij0hgZoM9zm2Pim_Ay5IKVdZnbccddY/exec', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert('Recommendation submitted successfully!');
            this.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your recommendation. Please try again.');
        });
});
