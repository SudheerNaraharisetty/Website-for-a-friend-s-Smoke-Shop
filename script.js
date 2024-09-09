function showForm(locationId) {
    document.getElementById('locationButtons').style.display = 'none';
    document.getElementById('recommendationForm').style.display = 'block';
    document.getElementById('locationId').value = locationId;
}

document.getElementById('productForm').addEventListener('submit', function(e) {
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
            window.location.href = 'https://www.google.com/search?sca_esv=7c38a936fca0f41e&rlz=1C1UEAD_enIN1045IN1045&sxsrf=ADLYWILNBpgY8XkjERQaBauBm70v9WDbBA:1725835416790&q=617+Smoke+Shop&ludocid=1116541599902629638&lsig=AB86z5Xd41nawFczxXGM9G0SguG8&sa=X&ved=2ahUKEwientX3tbSIAxVCF1kFHfLLL0IQoAJ6BAgYEAc&biw=1280&bih=567&dpr=1.5#lrd=0x89e377f42a17ea01:0xf7ec0ab5f247f06,3,,,,';
        } else {
            window.location.href = 'https://www.google.com/search?sca_esv=0871ff21afb3ee13&rlz=1C1UEAD_enIN1045IN1045&sxsrf=ADLYWIK7_KvfYnaqggbYR6JziXEQNTYHtw:1725836576237&q=617+Smoke+Shop&ludocid=13245234410688935775&lsig=AB86z5Vhk8eYrq0kTKx2RaH35pL6&sa=X&ved=2ahUKEwjkkcSgurSIAxVsEVkFHaDmDSQQoAJ6BAgYEAc&biw=1280&bih=567&dpr=1.5#lrd=0x89e377d3693ae8bd:0xb7d086852fe4f75f,3,,,,';
        }
    }
}

// For rating.html
if (document.getElementById('selectedLocation')) {
    document.getElementById('selectedLocation').textContent = localStorage.getItem('selectedLocation');
}
