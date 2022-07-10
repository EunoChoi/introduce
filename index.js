function darkmode() {
    let darkBtn = document.querySelector('#darkModeButton');
    console.log(darkBtn.innerText);
    if (darkBtn.innerText === '🌙') {
        const title = document.querySelectorAll('.title');
        const text = document.querySelectorAll('.main>div>div span');
        for (let v of title) {
            v.style.color = 'white';
        }
        for (let v of text) {
            v.style.color = 'lightgrey';
        }
        document.querySelector('body').style.backgroundColor = 'slategrey';
        document.querySelector('.nav').style.backgroundColor = 'slategrey';
        document.querySelector('.main').style.backgroundColor = 'slategrey';
        document.querySelector('#darkModeButton').innerText = '🌤';
    }
    else if (darkBtn.innerText === '🌤') {
        const title = document.querySelectorAll('.title');
        const span = document.querySelectorAll('.main span');
        for (let v of span) {
            v.style.color = 'darkgrey';
        }
        for (let v of title) {
            v.style.color = 'grey';
        }
        document.querySelector('.nav').style.backgroundColor = 'whitesmoke';
        document.querySelector('body').style.backgroundColor = 'whitesmoke';
        document.querySelector('.main').style.backgroundColor = 'whitesmoke';
        document.querySelector('#darkModeButton').innerText = '🌙';
    }

}