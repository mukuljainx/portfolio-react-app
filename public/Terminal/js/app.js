function main(){
	var title = $(".title");
	title.text("bash - plinth2k17");
    $(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $(".socialRegister").removeClass("socialRegister").addClass("small");
    } else{
        $(".socialRegister").removeClass("small").addClass("large");
    }
});
}
$(document).ready(main);
