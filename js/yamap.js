//Переменная для включения/отключения индикатора загрузки
var spinner = $(".ymap-container").children(".loader");
//Переменная для определения была ли хоть раз загружена rарта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function () {
  $(".ymap-container").mouseenter(function () {
    if (!check_if_load) {
      // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

      // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
      check_if_load = true;

      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
      spinner.addClass("is-active");

			$('.ymap-container').append('<iframe class="ymap-container" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.165995306128!2d98.29922!3d7.838252000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sru!4v1596736326031!5m2!1sru!2sru" frameborder="0" style="border: 0;" allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>');
    }
  });
};

$(function () {
  //Запускаем основную функцию
  ymap();
});