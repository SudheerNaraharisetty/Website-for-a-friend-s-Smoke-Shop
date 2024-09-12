function showForm(locationId) {
    document.getElementById('locationButtons').style.display = 'none';
    document.getElementById('recommendationForm').style.display = 'block';
    document.getElementById('locationId').value = locationId;
}

document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = e.target;
    var formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycby1k4D5qd7WrQt1iGBb2CCA96drbEvH_aRdNPdhVV4VKqzv7-HQX22yy8T4z-1_yHG1/exec', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                document.getElementById('recommendationForm').style.display = 'none';
                document.getElementById('thankYouMessage').style.display = 'block';
            } else {
                alert('There was an error submitting your recommendation. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your recommendation. Please try again.');
        });
});

function selectLocation(location) {
    localStorage.setItem('selectedLocation', location);
    window.location.href = 'rating.html';
}

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
            window.location.href = 'https://www.google.com/search?sca_esv=6cf9c2b9fed3aa1b&rlz=1C1UEAD_enIN1045IN1045&sxsrf=ADLYWIJ5z0YfHvVKH392W3E8IqgoXTMX_Q:1726154075516&q=617+Smoke+Shop&ludocid=1116541599902629638&lsig=AB86z5Xd41nawFczxXGM9G0SguG8&sa=X&ved=2ahUKEwiirf6D2b2IAxXkFlkFHXkcD4YQoAJ6BAgYEAc&biw=1280&bih=567&dpr=1.5#lrd=0x89e377f42a17ea01:0xf7ec0ab5f247f06,3,,,,';
        } else {
            window.location.href = 'https://www.google.com/search?sca_esv=6cf9c2b9fed3aa1b&rlz=1C1UEAD_enIN1045IN1045&sxsrf=ADLYWILrDhYsJvGLZOLppuAoikPLcmRt6Q:1726154181408&q=617+Smoke+Shop&ludocid=13245234410688935775&lsig=AB86z5Vhk8eYrq0kTKx2RaH35pL6&sa=X&ved=2ahUKEwifyL222b2IAxXTEFkFHR53AAgQoAJ6BAgYEAc&biw=1280&bih=567&dpr=1.5#lrd=0x89e377d3693ae8bd:0xb7d086852fe4f75f,3,,,,';
        }
    }
}

// For rating.html
document.addEventListener('DOMContentLoaded', function () {
    const location = localStorage.getItem('selectedLocation');
    const storeLocationElement = document.getElementById('storeLocation');

    if (storeLocationElement) {
        if (location === '79') {
            storeLocationElement.textContent = '79 Bow St, Somerville, MA 02143';
        } else {
            storeLocationElement.textContent = '533 Medford St, Somerville, MA 02145';
        }
    }

    if (document.getElementById('recommendationForm')) {
        document.getElementById('recommendationForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const location = localStorage.getItem('selectedLocation');

            // Convert form data to JSON
            const jsonData = {
                location: location,
                productName: formData.get('productName'),
                productLink: formData.get('productLink'),
                imageUrl: '' // We'll handle image upload separately if needed
            };

            // Send data to Google Apps Script
            fetch('https://script.google.com/macros/s/AKfycbxEkfun8phf2N9_G8GSCm1twneNMAF6JerSqBaadLS2m4ZY2BjKxboMWF4PtbrYBT22/exec', {
                method: 'POST',
                body: JSON.stringify(jsonData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        alert('Thank you for your recommendation!');
                        this.reset();
                    } else {
                        alert('There was an error submitting your recommendation. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting your recommendation. Please try again.');
                });
        });
    }
});
