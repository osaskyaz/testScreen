// const btnNo = document.querySelector('#btnNo');
const btnYes = document.querySelector('#btnYes');
const answer = document.querySelector('#answer');



const ans = [{
    question:"Are you dumb?",
    reply:"I knew it!!!"
    }
]

btnYes.addEventListener('click', change);

function change(){
    let random = Math.floor(Math.random()*ans.length);
    // console.log(number);

    answer.innerHTML = ans[random].reply;
        
    }
