'use strict'

const vacancyForm = document.querySelectorAll('.vacancy_form')
const vaсancyBtn = document.querySelectorAll('.vaсancy_btn')
const body = document.querySelector('body')
const vacancyFormBack = document.createElement('div')
const closeBtn = document.createElement('span')

vacancyFormBack.classList.add('vacancy-form-back')
body.append(vacancyFormBack)

function openForm(elem) {
    body.classList.add('no-scroll')
    elem.style.display = 'block'
    vacancyFormBack.style.display = 'block'
    elem.style.left = (document.documentElement.clientWidth - parseInt(getComputedStyle(elem).width))/2 + 'px'
    elem.style.top = (document.documentElement.clientHeight - parseInt(getComputedStyle(elem).height))/2 + 50 +'px'

    closeBtn.classList.add('close')
    closeBtn.innerHTML = `<img src="https://sibarit23.ru/wp-content/uploads/2022/03/clear_input.png" type="image/png" alt="close">`
    elem.prepend(closeBtn)
}

function close(elem) {
    vacancyFormBack.addEventListener('click', (e) => {
        body.classList.remove('no-scroll')
        elem.style.display = 'none'
        vacancyFormBack.style.display = 'none'
    })

    closeBtn.addEventListener('click', (e) => {
        body.classList.remove('no-scroll')
        elem.style.display = 'none'
        vacancyFormBack.style.display = 'none'
    })
}

function formTitle (elem, title) {
    elem.querySelector('h2').innerHTML = `Написать в  <a target="_blank" href="https://wa.me/79885011717?
                                        text=Здравствуйте,%20я%20по%20поводу%20вакансии%20${title}."><b>Whatsapp</b>
                                        <img class="" style="margin-left: 5px; vertical-align: middle;" src="https://sibarit23.ru/wp-content/uploads/2019/12/whatsapp-icon-150x150.png" alt="" width="34" height="34"></a> или заполнить форму:`
}

vaсancyBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        vacancyForm.forEach((form) => {
            if(form.classList.contains(btn.getAttribute('id'))){
                let title = form.querySelector('h2') .textContent.replace(/^отклик на вакансию :/,'').toLowerCase()
                e.preventDefault()
                openForm(form)
                formTitle(form, title)
                close(form)
            }else{
                form.style.display = 'none'
            }
        })
    })
})