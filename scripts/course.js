// Course Filter
function filterCourses(category) {
    const buttons = document.querySelectorAll('.course-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');

        if (
            (category === 'all' && btn.textContent === 'All') ||
            (category === 'cse' && btn.textContent === 'CSE') ||
            (category === 'wdd' && btn.textContent === 'WDD')
        ) {
            btn.classList.add('active');
        }
    });

    const items = document.querySelectorAll('.course-item');

    items.forEach(item => {
        if (
            category === 'all' ||
            item.dataset.category === category
        ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}