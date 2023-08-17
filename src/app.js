//создаем массив отзывов
const reviews = [
    {
        id: 1,
        image: "https://thumb.tildacdn.com/tild6534-6239-4266-b133-623761333365/-/cover/300x300/center/center/-/format/webp/IMG_3363.JPG",
        author: "Наталья Смирнова",
        text: "Уже год вожу свою дочь в «Академию вокала» и от всей души хочется сказать большое спасибо педагогам и руководителю этой школы, за возможность учиться и развиваться в соответствии с мировыми музыкальными стандартами. За тепло и уют, за заботу о наших детях! Вы лучшие! Растите и процветайте! Дарите миру музыку и продолжайте развивать творческий потенциал своих учеников!",
    },

    {
        id: 2,
        image: "https://thumb.tildacdn.com/tild6134-3762-4939-a166-356336636462/-/cover/300x300/center/center/-/format/webp/IMG_3362.JPG",
        author: "Рустем Ялалетдинов",
        text: "Я очень люблю петь, и вот однажды мне подарили подарочный сертификат в «Академию Вокала»! Прекрасный и приветливый коллектив. Профессионализм преподавателя позволил открыть и улучшить в себе вокальные способности, как оказалось совершенству нет предела! Так что впереди много работы) Всем кто хочет и любит петь, рекомендую!",
    },

    {
        id: 3,
        image: "https://thumb.tildacdn.com/tild6337-6166-4436-b934-316637666362/-/cover/300x300/center/center/-/format/webp/IMG_3361.JPG",
        author: "Мария Якушина",
        text: "Занимаюсь с марта 2018) ни разу не пожалела, что выбрала именно эту школу) ощущаю, что есть результат и колоссальная разница между тем, что было до этого) После каждого занятия ухожу с улыбкой, да и вообще, хожу на занятия, как на праздник(без преувеличения) За время обучения я успела побывать на многих международных и всероссийских конкурсах, выигрывала достойные награды. Хочу выразить благодарность моему преподавателю и коллективу школы! Вы крутые!",
    }
]

let activeReviewIndex = 0
const reviewsCount = reviews.length - 1

//найти в HTML контейнер для выгрузки отзыва
const reviewContainer = document.getElementById("reviewContainer")

//создаем карточку отзыва
function createReview () {
    const review = reviews[activeReviewIndex]
    reviewContainer.innerHTML = `
                <div class="review" id="review">
                    <img class="image" src="${review.image}">
                    <p class="author">${review.author}</p>
                    <p class="text">${review.text}</p>
                </div>
        `  
}

//находим кнопку и при нажатии активируем функцию показать сл отзыв по возрастанию id
const btnRight = document.getElementById("button_right")
btnRight.addEventListener('click', changeRight)

function changeRight() {
    if  (activeReviewIndex < reviewsCount) {
        activeReviewIndex++
    } else {
            activeReviewIndex = 0
        }
    createReview()
}

//находим кнопку и при нажатии активируем функцию показать сл отзыв по убыванию id
const btnLeft = document.getElementById("button_left")
btnLeft.addEventListener('click', changeLeft)

function changeLeft() {
    if  (activeReviewIndex > 0) {
        activeReviewIndex--
    } else {
            activeReviewIndex = reviewsCount
        }
    createReview()
}

//находим кнопку случайного отзыва и получаем случайный отзыв при нажатии на кнопку
const btnRandom = document.getElementById("button_random")
btnRandom.addEventListener('click', changeRandom)

function changeRandom() {
    activeReviewIndex = Math.floor(Math.random() * reviews.length)
    createReview()
}

//прорисоваваем отзывы
createReview()