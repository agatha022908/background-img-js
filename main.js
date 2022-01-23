let body = document.querySelector('body'),
 inner = document.querySelectorAll('.inner');
for (const iterator of inner) {
    iterator.addEventListener('click', function (e) {
        let attr = this.getAttribute('src')
        body.style.backgroundImage = `url(${attr})`
    })
}
