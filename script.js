document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    var xhr = new XMLHttpRequest();
    var url = 'https://jsonplaceholder.typicode.com/users'; 

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            populateUI(data);
        }
    };

    xhr.send();
}

function populateUI(data) {
    var personDetailsSection = document.querySelector('.person-details');

    data.forEach(function (person) {
        var personElement = document.createElement('div');
        personElement.classList.add('person');

        var nameElement = document.createElement('h3');
        nameElement.textContent = person.name;

        var emailElement = document.createElement('p');
        emailElement.textContent = person.email;

        // You can add more elements to display additional information (address, phone, etc.)

        personElement.appendChild(nameElement);
        personElement.appendChild(emailElement);
        personDetailsSection.appendChild(personElement);
    });
}