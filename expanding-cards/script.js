document.addEventListener('click', function(e) {
    const clickedCard = e.target;

    // grab all card components in a container div
    const panels = document.querySelectorAll('.panel');

    // As soon as click event occurs, remove all class name 'active' from the card component
    panels.forEach(panel => {
        panel.classList.remove('active');
    })


    // add class name 'active' to clicked card
    if (!clickedCard.classList.contains('active')) {
        clickedCard.classList.add('active');
    }
})