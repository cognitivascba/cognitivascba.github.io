function newtrial(a){window.scrollTo(0,1),$("#Dial").css("background","rgb(255,150,0)"),$("#Dial").hide(),$(document).unbind("click");var t=DataToSave.name;DataToSave=[],DataToSave.code=CODE,DataToSave.name=t,a.trial=a.trial+1,DataToSave.trial=a.trial,setTimeout(function(){create_stim(a,show_stim(a))},800)}