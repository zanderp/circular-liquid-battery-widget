command:"pmset -g batt | grep \"%\" | awk 'BEGINN { FS = \";\" };{ print $3,$2 }' | sed -e 's/-I/I/' -e 's/-0//' -e 's/;//' -e 's/;//'",

refreshFrequency: 20000,

render: function () {
	$('head').append('<link rel="stylesheet" href="cb.css" type="text/css" /><link href="http://fonts.googleapis.com/css?family=Dosis:200,300" rel="stylesheet" type="text/css">');
	return "<div id='batt'></div>";
	},
update: function (output){
	var arr = output.split(' ');
	var percent = arr[1].split('%');
	var a = arr[0];
	var power = "";
	var image = "";
	var percentage = "";
	var percentagebg = "";
	if (a == "discharging"){
		power = "Battery";
		image = '<img src="bat.png" width="30px">';
	}else{
		power = "Charging"
		image = '<img src="charge.png" width="30px">';
	}
	if(percent[0]<=20){
		percentage = "wave20";
		percentagebg = "waveb20";
	}
	else if(percent[0]<35 && percent[0]>20){
		percentage = "wave35";
		percentagebg = "waveb35";
	}
	else if(percent[0]<50 && percent[0]>20){
		percentage = "wave50";
		percentagebg = "waveb50";
	}
	else if(percent[0]<80 && percent[0]>50){
		percentage = "wave80";
		percentagebg = "waveb80";
	}
	else if(percent[0]<100 && percent[0]>80){
		percentage = "wave90";
		percentagebg = "waveb90";
	}
	else if(percent[0]== 100){
		percentage = "wave100";
		percentagebg = "waveb100";
		power = "Charged";
	}
	$("#batt").html('<div id="circle-battery" class="'+percentage+'"><p>'+percent[0]+'%</p><p class="capt">'+power+'</p>'+image+'</div><div id="counter" class="'+percentagebg+'"></div>');
		
	},

style: "        \n\
  top: 300px     \n\
  left: 200px     \n\
  "