function changeLang(lang, btn) {
    $("#langs_wrap .lang").removeClass("active");
    $(btn).addClass("active");

    $(".lang_sensitive").each(function() {
        if ($(this).is('[data-lang_'+lang+']')) {
            var langTxt = $(this).data("lang_"+lang);
            $(this).html(langTxt);
        } else {
            console.log("has no '[data-lang_'+lang+']'");
        }
    });
}