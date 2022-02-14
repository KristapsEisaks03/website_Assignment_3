window.onload=function(){
    //BELOW IS FOR HALF LIFE ALYX GAME
    var Picture_1 = document.getElementById("PictureDiv_Class_V1");

    Picture_1.addEventListener("mouseenter", function(event){
        ShowLabel(1);
    });
    Picture_1.addEventListener("mouseleave", function(event){
        RemoveLabel(1);
    });
    // BELOW IS FOR VRCHAT PIC
    var Picture_2 = document.getElementById("PictureDiv_Class_V2");

    Picture_2.addEventListener("mouseenter",function(event){ShowLabel(2);
    });

    Picture_2.addEventListener("mouseleave",function(event){RemoveLabel(2);
    });
    // BELOW IS FOR BLADE AND SORCERRY PIC
    var Picture_3 = document.getElementById("PictureDiv_Class_V3");

    Picture_3.addEventListener("mouseenter",function(event){ShowLabel(3);
    });

    Picture_3.addEventListener("mouseleave",function(event){RemoveLabel(3);
    });

    // THIS PART IS FOR OTHER PICS ON OTHER PAGES


}

function ShowLabel(NumOfLabel){
    document.getElementById("LabelToShow_"+NumOfLabel).style.display="block";
}
function RemoveLabel(NumOfLabel){
    document.getElementById("LabelToShow_"+NumOfLabel).style.display="none";
}

function Picture_Open(LocationOfPic){
    document.getElementById("Picture_Fullscreen").style.backgroundImage ="URL("+LocationOfPic+")";
    document.getElementById("Picture_Fullscreen").style.display="block";

}

function Picture_Close(){
    document.getElementById("Picture_Fullscreen").style.display="none";
}

