function newtrial(a){window.scrollTo(0,1),$("#Dial").css("background","rgb(255,150,0)"),$("#Dial").hide(),$(document).unbind("click");var t=DataToSave.name;DataToSave=[],DataToSave.code=CODE,DataToSave.name=t,a.trial=a.trial+1,DataToSave.trial=a.trial;var e=100*a.trial/a.maxtrials;1>e&&(e=1),$("#Letterhead2").html("grado de avance: "+Math.floor(e).toString().concat(" %")),$("#Letterhead2").show(),a.trial%60==0&&a.trial<100?($("#preg").html("Si quer\xe9s pod\xe9s descansar un ratito. Cuando est\xe9s listo/a, hac\xe9 click para continuar"),$("#preg").show(),$(document).click(function(a){$(document).unbind("click"),setTimeout("$('#MainCanvas').hide(0,create_stim(sc,DataToSave))",800),$("#preg").fadeOut(500)})):setTimeout("$('#MainCanvas').hide(0,create_stim(sc,DataToSave))",800)}