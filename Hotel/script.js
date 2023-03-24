let topicButton = document.querySelector('.topicButton');
let body = document.querySelector('body')
let header = document.querySelector('header')
let main = document.querySelector('.main-info');
let footer = document.querySelector('footer');
topicButton.addEventListener('click', () => {
    topicButton.classList.toggle('topicButtonDark')
    body.classList.toggle('dark');
    main.classList.toggle('darkMain')
})