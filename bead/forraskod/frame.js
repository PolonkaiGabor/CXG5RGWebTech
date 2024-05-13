document.addEventListener('DOMContentLoaded', function() {

    container_real = document.querySelector(".iframe-container-real");
    container = document.querySelector(".iframe-container");
    loginButton = document.querySelector(".login-icon-btn svg");
    state = false;
    container_real.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (!container.contains(event.target) && event.target !== loginButton) {
        container_real.style.display = 'none';
        state = false;
    }
    if (event.target === loginButton) {
        if (state) {
            container_real.style.display = 'none';
            state = false;
        } else {
            container_real.style.display = 'flex';
            state = true;
        }
    }
});