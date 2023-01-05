const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;
    const data = { name, email, subject, message };
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'emaxing23@gmail.com');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
});