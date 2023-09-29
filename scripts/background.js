window.addEventListener('load', function(){
    var expand_btns = this.document.getElementsByClassName("expandable_btn");
    for (var i = 0; i < expand_btns.length; i++){
        expand_btns[i].addEventListener("click", function(e){
            target_name = e.currentTarget.id.split('_')[0];
            plus_btn = target_name + "_plus";
            target_name = target_name + "_div";
            target = document.getElementById(target_name);
            plus = document.getElementById(plus_btn);
            if(target.classList.contains("hidden")){
                plus.innerHTML = "-";
                target.classList.remove("hidden");
                target.classList.add("shown");
            }else{
                plus.innerHTML = "+";
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
    
    var modal = this.document.getElementById("popupModal");

    var imgs = document.getElementsByClassName("supporting");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    for(var i = 0; i < imgs.length; i++){
        imgs[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            modalImg.alt = this.alt;
        }
    }

    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function(){
        modal.style.display = "none";
    }

});

function mailrep(e){
    j = e.replaceAll('/', '');
    j = j.replaceAll('-', '');
    s = j.replaceAll('.', '');
    var a = atob(s);
    window.location.href = "mailto:" + a;
}