const anchors = document.querySelector('a[href*="#down"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}