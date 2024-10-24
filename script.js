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
            window.location.href = 'https://www.google.com/search?q=617+Smoke+Shop&oq=617&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGD0yBggCEEUYOzIGCAMQRRg5MgYIBBBFGD3SAQc4OThqMGo5qAIBsAIB&client=ms-android-samsung-rvo1&sourceid=chrome-mobile&ie=UTF-8#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D&trex=m_t:lcl_akp,rc_f:rln,rc_ludocids:1116541599902629638,ru_gwp:0%252C7,ru_lqi:Cg42MTcgU21va2UgU2hvcEjv-o2-mLqAgAhaJhAAEAEQAhgAGAEYAiIONjE3IHNtb2tlIHNob3AqCAgCEAAQARACkgEMdG9iYWNjb19zaG9wqgE3EAEyHxABIhuTmT4G5sLfwNGEePd4NC0vA0QV3i6ogHsHpuwyEhACIg42MTcgc21va2Ugc2hvcOABAA,ru_phdesc:gssK7lOa2fw,trex_id:Xv0rId';
        } else {
            window.location.href = 'https://www.google.com/search?q=617+Smoke+Shop&oq=617&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGD0yBggCEEUYOzIGCAMQRRg5MgYIBBBFGD3SAQc4MzlqMGo5qAIAsAIB&client=ms-android-samsung-rvo1&sourceid=chrome-mobile&ie=UTF-8#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D&trex=m_t:lcl_akp,rc_f:rln,rc_ludocids:13245234410688935775,ru_gwp:0%252C7,ru_lqi:Cg42MTcgU21va2UgU2hvcEi-mbC6trWAgAhaJhAAEAEQAhgAGAEYAiIONjE3IHNtb2tlIHNob3AqCAgCEAAQARACkgEMdG9iYWNjb19zaG9wqgE3EAEyHxABIhuTmT4G5sLfwNGEePd4NC0vA0QV3i6ogHsHpuwyEhACIg42MTcgc21va2Ugc2hvcOABAA,ru_phdesc:Q2W2RHF7j1Q,trex_id:aLmUAf';
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
