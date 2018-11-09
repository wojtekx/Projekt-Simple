const menuL = document.querySelector('.leftSidebar');
const input = document.querySelector('.form input');

function hide() {
    document.querySelector('#arrow').classList.toggle('rotate');
    if (menuL.classList.contains('hide')) {
        menuL.classList.remove('hide');
        menuL.classList.add('show');
    }
    else if (menuL.classList.contains('show')) {
        menuL.classList.remove('show');
        menuL.classList.add('hide');
    }
}

function show() {
    input.classList.add('focus');
    input.classList.remove('hidden');
}

document.querySelector('.icon').addEventListener('click', show);
document.getElementById('arrow').addEventListener('click', hide);

