function show_stim(t,e){$("#Dial").hide(),1==AutomaticResponse&&setTimeout("$('#button_3').click()",2500);var a=+new Date;$("#preg").html("\xbfA qu\xe9 nube pertenece el puntito amarillo?");var i=document.getElementById("MainCanvas"),n=i.getContext("2d");t.trial<3&&setTimeout("$('#preg').fadeIn(100);",0);var o=(setTimeout(function(){if($("#MainCanvas").show(),$("#button_1").show(),$("#button_2").show(),$("#button_3").show(),2==t.nstim[t.trial-1]){var a=e.col_clouds[2];$("#button_"+(e.col_bots.indexOf(a)+1).toString()).hide()}},T1),setTimeout(function(){n.beginPath(),n.arc(e.Xtarget,e.Ytarget,e.Target_exterior_size,0,2*Math.PI),n.closePath(),n.fillStyle="#FFFF00",n.fill(),n.beginPath(),n.arc(e.Xtarget,e.Ytarget,e.Target_interior_size,0,2*Math.PI),n.closePath(),n.fillStyle="#000000",n.fill()},T1+150)),r=setTimeout(function(){n.beginPath(),n.arc(e.Xtarget,e.Ytarget,e.Target_exterior_size,0,2*Math.PI),n.closePath(),n.fillStyle="#000000",n.fill(),n.beginPath(),n.arc(e.Xtarget,e.Ytarget,e.Target_interior_size,0,2*Math.PI),n.closePath(),n.fillStyle="#FFFF00",n.fill()},T1+300),s=setTimeout(function(){$("#MainCanvas").hide()},T2);$(".resp_button").click(function(i){e.RT=+new Date-a-T1,clearTimeout(o),clearTimeout(r),clearTimeout(s),$(i.target).is("#button_1")&&(t.response[t.trial-1]=0,$("#button_1").unbind("click"),$("#MainCanvas").fadeOut(150)),$(i.target).is("#button_2")&&(t.response[t.trial-1]=1,$("#button_2").unbind("click"),$("#MainCanvas").fadeOut(150)),$(i.target).is("#button_3")&&(t.response[t.trial-1]=2,$("#button_3").unbind("click"),$("#MainCanvas").fadeOut(150));var n=0;t.response[t.trial-1]==e.col_clouds[0]&&(n=1,e.nube=n),t.response[t.trial-1]==e.col_clouds[1]&&(n=2,e.nube=n),t.response[t.trial-1]==e.col_clouds[2]&&(n=3,e.nube=n),t.correct[t.trial-1]=t.response[t.trial-1]==e.CorrectColor,$(".resp_button").fadeOut(200),$("#preg").fadeOut(200),$(".resp_button").unbind("click"),e.response=t.response[t.trial-1],e.correct=t.correct[t.trial-1],setTimeout("$('#MainCanvas').hide(0,introspective_response(DataToSave))",500)})}