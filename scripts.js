$(document).ready(function () {
    // Попап (модальное окно)
    $("#openPopup").click(function () {
        $(".overlay, .popup").fadeIn();
    });

    $(".close, .overlay").click(function () {
        $(".overlay, .popup").fadeOut();
    });

    // Аккордеон (Тренды IT)
    $(".accordion h3").click(function () {
        $(this).next("div").slideToggle().siblings("div").slideUp();
    });

    // Вкладки для курсов
    window.openCourse = function (evt, courseName) {
        var i, tabcontent, tablinks;
        
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(courseName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Открываем первый курс по умолчанию
    document.getElementsByClassName("tablink")[0].click();
});
