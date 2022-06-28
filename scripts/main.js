const about = document.getElementById('about')
const options = {
    root : null,
    threshold: 0.2
}
const callback = function(){
    // console.log(1)
    window.navigator.vibrate(500)
}
const aboutObserver = new IntersectionObserver(callback,options)
aboutObserver.observe(about)