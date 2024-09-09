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
