const menuL = document.querySelector('.leftSidebar');

function hide() {
    document.querySelector('#arrow').classList.toggle('rotate')
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
    document.querySelector('.form input').classList.remove('hidden');
}

document.querySelector('.icon').addEventListener('mousemove', show)
document.getElementById('arrow').addEventListener('click', hide)

