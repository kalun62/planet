'use strict';

const img = document.querySelectorAll('img')
const body = document.querySelector('body')

let backPopup = document.createElement('div')
    backPopup.classList.add('back-pop-up')
    
body.append(backPopup)

const planetInfo = [{
        "id": "1",
        "name": "Планета 1",
        "info": `Давно выяснено, что при оценке дизайна и композиции
                 читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                  потому, что тот обеспечивает более или менее стандартное заполнение 
                  шаблона, а также реальное распределение букв и пробелов в абзацах, которое 
                  не получается при простой дубликации Здесь ваш текст.. Здесь ваш текст.. Здесь 
                  ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem
                   Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsumсразу 
                   показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За 
                   прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по 
                   ошибке, некоторые - намеренно (например, юмористические варианты)`
    },
    {
        "id": "2",
        "name": "Планета 2",
        "info": `Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Id quisquam consequatur explicabo nostrum praesentium 
                fugiat corporis repellendus necessitatibus, esse assumenda sapiente aut 
                odio fugit cumque. Non quae magnam quibusdam mollitia.`
    },

]

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function(){
       
        backPopup = document.querySelector('.back-pop-up')
        backPopup.style.display = 'flex'

        let idImg = img[i].getAttribute('id')
        planetInfo.forEach(planet => {
            if(idImg == planet.id){
                backPopup.innerHTML =`
                    <div class="pop-up">
                        <h3>${planet.name}</h3><br>
                        <p>${planet.info}</p>
                        <div class="close">
                            <span></span>
                        </div
                    </div>`
            }
        })

        let close = document.querySelector('.close')
        close.addEventListener('click', function () {
            backPopup.style.display = 'none'
        })

        backPopup.addEventListener('click', function(e){
            let popUp = document.querySelector('.pop-up')
            if (!popUp.contains(e.target)){
               backPopup.style.display = 'none'  
            }
        })
    })
}



