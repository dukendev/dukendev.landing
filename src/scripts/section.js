
function animateSections() {
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                console.log(entry.target.classList);
                entry.target.classList.add('sec-show');
            } else {
                entry.target.classList.remove('sec-show');
            }
        });
    });

    const sections = document.querySelectorAll('section')
    sections.forEach((e) => intersectionObserver.observe(e));
}
animateSections()
