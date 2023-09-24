let hambuger = document.querySelector('.hambuger');
hambuger.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
})