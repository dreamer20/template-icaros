$("#nav-btn").click(function() {
	$("nav").toggleClass("nav-open");
});
$("#nav-tabs > li > a").click(function(e) {
	e.preventDefault();
	$("#nav-tabs > li > a").removeClass("active");
	$(this).addClass("active");
	$(".tab-content.active").removeClass("active");
	$(".tab.active").removeClass("active");
	$("#" + $(this).attr("href").substring(1)).addClass("active");


});