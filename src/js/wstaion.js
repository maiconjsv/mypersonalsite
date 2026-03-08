
const menu = document.getElementById("menu_mobile");

menu.addEventListener("click", function() {
    if(document.getElementById("h_ul_mobile").style.display == "none")
    {
        document.getElementById("h_ul_mobile").style.display = "flex";
    }
    else
    {
        document.getElementById("h_ul_mobile").style.display = "none";
    }
})