document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value
        document.querySelector("h1").innerHTML = `Hello, ${name}!`
        // Stop form from submitting
        return false
    }
})