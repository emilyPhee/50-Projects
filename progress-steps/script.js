const progress = document.querySelector('.progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


let circleNum = 1;
let progressWitdh = 0;


function incrementValue() {
    if (circleNum < 4) {
        circleNum ++;
    } 
    if (circleNum === 4) {
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    }  

    console.log('increment:', circleNum);

    // Add class name 'action' to class list
    document.querySelector(`.progress-container div:nth-child(${circleNum + 1})`).classList.add('active');

    // Update progress bar
    progressWitdh += 33.33;
    progress.style.width = (progressWitdh) + '%';
    
}

function decrementValue() {
    // delete class name 'action' from class list
    document.querySelector(`.progress-container div:nth-child(${circleNum + 1})`).classList.remove('active');

    if (circleNum > 1) {
        circleNum--;
    } 
    if (circleNum === 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }

    console.log('decrement:', circleNum);

    // Update progress bar
    progressWitdh -= 33.33;
    progress.style.width = (progressWitdh) + '%';


}



