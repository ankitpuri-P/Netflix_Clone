// const users = ['Vedant', 'Ankit', 'Guest1'];

// const memberDiv = document.querySelector('.memberDiv');
// const addIcon = document.querySelector('.addIcon');

// const userIcons = () => {
//     users.reverse();
//     users.map((curElem) => {
//         memberDiv.insertAdjacentHTML('afterbegin', `
//         <button class="btn"><span>${curElem}</span></button>
//         `);
//     })
// };

// addIcon.addEventListener('click', () => {
//     let userName = prompt('please enter your name');

//     if(userName != null && !users.includes(userName)){
//         users.push(userName);
//         console.log(users);
//         memberDiv.insertAdjacentHTML('afterbegin', `
//         <button class="btn"><span>${userName}</span></button>
//         `);
//     }else{
//         alert('username already exist');
//     }
// })


// userIcons();




const users = ['Vedant', 'Ankit', 'Guest1'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        const button = document.createElement('button');
        const span = document.createElement('span');
        span.innerText = curElem;
        button.appendChild(span);
        button.classList.add('btn');
        button.onclick = () => {
            window.location.href = 'index.html'; // Replace 'your-page-url.html' with the desired URL
        };
        memberDiv.insertAdjacentElement('afterbegin', button);
    })
};

addIcon.addEventListener('click', () => {
    let userName = prompt('please enter your name');

    if (userName != null && !users.includes(userName)) {
        users.push(userName);
        console.log(users);
        const button = document.createElement('button');
        const span = document.createElement('span');
        span.innerText = userName;
        button.appendChild(span);
        button.classList.add('btn');
        button.onclick = () => {
            window.location.href = 'index.html'; // Replace 'your-page-url.html' with the desired URL
        };
        memberDiv.insertAdjacentElement('afterbegin', button);
    } else {
        alert('username already exists');
    }
})

userIcons();
