// Active Navigation Link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('nav a').forEach(item => {
            item.classList.remove('active');
        });

        link.classList.add('active');
    });
});

// Hamburger Menu
const hamButton = document.querySelector('#ham-btn');
const navigation = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navigation.classList.toggle('show');
});


