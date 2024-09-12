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
            window.location.href = 'https://search.google.com/local/writereview?placeid=ChIJAeqXIvR344kRBvBHr6UKfg8';
        } else {
            window.location.href = 'https://search.google.com/local/writereview?placeid=ChIJveiTNtN344kRX_dOL4UGfbs';
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
            // Here you would typically send the form data to your server or Google Sheets
            console.log('Product Name:', document.getElementById('productName').value);
            console.log('Product Link:', document.getElementById('productLink').value);
            console.log('Product Image:', document.getElementById('productImage').files[0]);
            alert('Thank you for your recommendation!');
            this.reset();
        });
    }
});
