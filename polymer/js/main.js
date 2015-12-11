$("#btn-1").click(function(){
	$("#btn-1").addClass("active")
	$("#btn-2").removeClass("active")
	$("#btn-3").removeClass("active")
	$(".wrap-1").css("display","inline");
	$(".wrap-2").css("display","none");
	$(".wrap-3").css("display","none");
});

$("#btn-2").click(function(){
	$("#btn-2").addClass("active")
	$("#btn-1").removeClass("active")
	$("#btn-3").removeClass("active")
	$(".wrap-1").css("display","none");
	$(".wrap-2").css("display","inline");
	$(".wrap-3").css("display","none");
});

$("#btn-3").click(function(){
	$("#btn-3").addClass("active")
	$("#btn-1").removeClass("active")
	$("#btn-2").removeClass("active")
	$(".wrap-1").css("display","none");
	$(".wrap-2").css("display","none");
	$(".wrap-3").css("display","inline");
});