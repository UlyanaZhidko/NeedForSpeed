const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car');


start.addEventListener('click', startGame);//скрываем блок старт по нажатию
document.addEventListener('keydown', startRun);//старт по нажатию кнопки
document.addEventListener('keyup', stopRun);//стоп при отпускании кнопки


//кнопки направления
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start: false,
    score: 0,
    speed: 3
};

//скрываем блок старт
function startGame() {
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame); //анимирование функ.
};

//
function playGame() {
    if (setting.start === true) {
        requestAnimationFrame(playGame); //если старт=true запуск. анимация
    }
};

//старт по нажатию кнопки
function startRun(event) {
    event.preventDefault();
    keys[event.key] = true; //определяет нажатую кнопку и меняет значение на true
};

//стоп при отпускании кнопки
function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
};

