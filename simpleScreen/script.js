const btnNo = document.querySelector('#btnNo');
const btnYes = document.querySelector('#btnYes');
const answer = document.querySelector('#answer');



const ans = [{
    reply:"I knew it!!!"
    }
]

btnYes.addEventListener('click', change);

function change(){
    let random = Math.floor(Math.random()*ans.length);

    answer.innerHTML = ans[random].reply;
        
    }


btnNo.addEventListener('mouseover', step);

function step(){
    
    

}
