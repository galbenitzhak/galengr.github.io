window.addEventListener('load', function(){
    var expand_btns = this.document.getElementsByClassName("expandable_btn");
    for (var i = 0; i < expand_btns.length; i++){
        expand_btns[i].addEventListener("click", function(e){
            target_name = e.currentTarget.id.split('_')[0];
            target_name = target_name + "_div";
            target = document.getElementById(target_name);
            if(target.classList.contains("hidden")){
                e.currentTarget.innerHTML = "-";
                target.classList.remove("hidden");
                target.classList.add("shown");
            }else{
                e.currentTarget.innerHTML = "+";
                target.classList.remove("shown");
                target.classList.add("hidden");
            }
        });
    }
    var scroll_btns = this.document.getElementsByClassName("nav_td");
    for (var i = 0; i < scroll_btns.length; i++){
        scroll_btns[i].addEventListener("click", function(e){
            target = document.getElementById(e.currentTarget.id.substring(1));
            target.scrollIntoView({behavior: 'smooth'});
        });
    }
});