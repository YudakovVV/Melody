$(document).ready(function () {
    var currentFloor = 2;/*переменная где хранится текущий этаж*/
    var floorPath = $(".home-image path");//каждый отдельный этаж в SVG
    var counterUp = $(".counter-up");/*кнопка вверх*/
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    //функция при наведение мышки на этаж
    floorPath.on("mouseover",function(){
        floorPath.removeClass("current-floor"); /*обнуление счетчика*/
        currentFloor = $(this).attr("data-floor");/*получение значения этажа*/
        $(".counter").text(currentFloor);//записываем значениие этажа в счетчик справа
    });

    floorPath.on("click", toggleModle);//при клике на этаж вызвать окно
    modalCloseButton.on("click", toggleModle);//при клике на кнопку закрыть закрывает окно
    viewFlatsButton.on("click", toggleModle);//при нажатии на кнопку открывать окно


    //функция отслеживания клика по кнопке вверх
    counterUp.on("click", function(){
        if(currentFloor<18){ //проверяем значение этажа
            currentFloor++;//прибавляем этаж
            usCurrenFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, 
            useGrouping: false});/*форматирование числа, чтобы начинались с 02, а не с 2*/
            $(".counter").text(usCurrenFloor);//записываем значение этажа
            floorPath.removeClass("current-floor");    
            $(`[data-floor=${usCurrenFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж /*так же чтобы работала кончтрукция ${usCurrenFloor} нужно поставить обратный апостраф*/
        }
    });
    //функция отслеживания клика по кнопке вниз
    counterDown.on("click", function(){
        if(currentFloor>2){
            currentFloor--;
            usCurrenFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, 
            useGrouping: false});/*форматирование числа, чтобы начинались с 02, а не с 2*/
            $(".counter").text(usCurrenFloor);
            floorPath.removeClass("current-floor");    
            $(`[data-floor=${usCurrenFloor}]`).toggleClass("current-floor"); /*чтобы работала конструкция ${usCurrenFloor} нужно поставить обратный апостраф*/
        }
    }); 
    function toggleModle(){
        //функция открыть закрыть окно
        modal.toggleClass("is-open")};
});