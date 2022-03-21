$(document).ready(function(){
    $("#el1").draggable();
   $("#el1").resizable({animate:true,helper:"ui-state-highlight"});
});

$(document).ready(function(){
   $("#sort1").sortable();
});


$(document).ready(function(){
   $("#el2").draggable({stack:"#drop1"});
   $("#drop1").droppable({
      over:function(){
         $("#drag1").css("background-color","#d7fa99");
         $("#drop1").css("background-color","#d7fa99");
      },
      drop:function(){
         $("#drag1").css("display","none");
         $("#drop1").css("background-color","#c4f66f");
         $("#drop1").html("Перемещение завершено успешно.");
         alert("Вы перетащили элемент с id=drag1 в область с id=drop1.");
      }
   });
});
$(document).ready(function(){
   $("#el3").draggable({stack:"#drop2"});
   $("#drop2").droppable({
      over:function(){
         $("#drag2").css("background-color","#d7fa99");
         $("#drop2").css("background-color","#d7fa99");
      },
      drop:function(){
         $("#drag2").css("display","none");
         $("#drop2").css("background-color","#c4f66f");
         $("#drop2").html("Перемещение завершено успешно.");
         alert("Вы перетащили элемент с id=drag1 в область с id=drop1.");
      }
   });
});