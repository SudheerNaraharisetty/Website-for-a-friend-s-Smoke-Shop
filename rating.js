document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('selectedLocation').textContent = localStorage.getItem('selectedLocation');
});

function rate(stars) {
    const location = localStorage.getItem('selectedLocation');
    if (stars <= 3) {
        // Keep the existing code for 1-3 star ratings
    } else {
        if (location === '79') {
            window.location.href = 'https://www.google.com/search?sca_esv=0650fe01815f73d1&rlz=1C1UEAD_enIN1045IN1045&sxsrf=ADLYWILobl-nHvGLjw0zD4-jwA4t4UBE7A:1726089221275&q=617+Smoke+Shop&ludocid=1116541599902629638&lsig=AB86z5Xd41nawFczxXGM9G0SguG8&sa=X&ved=2ahUKEwjH24m357uIAxUlKVkFHZWkCE4QoAJ6BAgYEAc#lrd=0x89e377f42a17ea01:0xf7ec0ab5f247f06,3,,,,';
        } else {
            window.location.href = 'https://www.google.com/search?sca_esv=0650fe01815f73d1&rlz=1C1UEAD_enIN1045IN1045&sxsrf=ADLYWILbga67advmBdpPAnJPWA-ibsypfw:1726089347997&q=617+Smoke+Shop&ludocid=13245234410688935775&lsig=AB86z5Vhk8eYrq0kTKx2RaH35pL6&sa=X&ved=2ahUKEwjFhMDz57uIAxWmE1kFHTpKCSoQoAJ6BAgYEAc&biw=1280&bih=567&dpr=1.5#lrd=0x89e377d3693ae8bd:0xb7d086852fe4f75f,3,,,,';
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
