console.log("hi")

const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
const startBtn = document.getElementById('start-button')

const url = window.location.href

modalBtns.forEach(modalBtn=> modalBtn.addEventListener('click', ()=>{

    // console.log(modalBtn)
    const pk = modalBtn.getAttribute('data-pk') // data-pk get from modal in main.html
    //console.log(pk)
    const name = modalBtn.getAttribute('data-quiz')
    const numQuestions = modalBtn.getAttribute('data-questions')
    const difficulty = modalBtn.getAttribute('data-difficulty')
    const scoreToPass = modalBtn.getAttribute('data-pass')
    const time = modalBtn.getAttribute('data-time')

    modalBody.innerHTML = `
        <div class="h5 mb-3">Are you sure you want to begin "<b>${name}</b>"
            <ul>
                <li>difficulty: <b>${difficulty}</b></li>
                <li>number of questions: <b>${numQuestions}</b></li>
                <li>score to pass: <b>${scoreToPass}</b></li>
                <li>time: <b>${time} min</b></li>
            </ul>
        </div>
    `

    startBtn.addEventListener('click', ()=>{
        //console.log(window.location.href)
        window.location.href = url + pk
    })
}))