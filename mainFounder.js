 require(['src/json!config/founder.json'], 
     function (config) {
    'use strict';   
    // About //
    var title;
    var text;
    var data; 
    var link_about;
    var data_element_text; 
    var text_data;
    var lang_button = document.getElementById("lang_value");
    var lang = document.querySelector("data-lang");
    
    
    function createCookie(name,value,days) {
    	if (days) {
    		var date = new Date();
    		date.setTime(date.getTime()+(days*24*60*60*1000));
    		var expires = "; expires="+date.toGMTString();
    	}
    	else var expires = "";
    	document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
    	var nameEQ = name + "=";
    	var ca = document.cookie.split(';');
    	for(var i=0;i < ca.length;i++) {
    		var c = ca[i];
    		while (c.charAt(0)==' ') c = c.substring(1,c.length);
    		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    	}
    	return null;
    }

    function eraseCookie(name) {
    	createCookie(name,"",-1);
    }
    lang_button = document.getElementById("lang_value");
    if(lang_button != null){
    	lang_button.onclick = function(){
        	if(lang_button != null){
            	if(lang_button.value =="fr"){
            		createCookie("lang","fr",365)
            		changeLang("fr");
            		this.value = "en";
            		var img_button = document.getElementById("image_drapeau");
            		img_button.src="./images/utils/drapeau_anglais.jpg";
            		img_button.alt ="english_flag";
            	}else{
            		createCookie("lang","en",365)
            		changeLang("en");
            		this.value ="fr";
            		var img_button = document.getElementById("image_drapeau");
            		img_button.src="./images/utils/drapeau_france.jpg";
            		img_button.alt="french_flag";
            	}
            }
        }
    }
    
    
    var lang_value = readCookie("lang")
    console.log(lang_value)
    if(lang_value != null){
    	lang_button = document.getElementById("lang_value");
    	if(lang_button != null){
    		console.log("ici")
    		lang_button.value = lang_value;
            changeLang(lang_value)
            if(lang_value == "fr"){
            	var img_button = document.getElementById("image_drapeau");
        		img_button.src="./images/utils/drapeau_anglais.jpg";
            }else{
            	var img_button = document.getElementById("image_drapeau");
        		img_button.src="./images/utils/drapeau_france.jpg";
            }
    	}
    }else{
    	lang_button = document.getElementById("lang_value")
    	lang_button.value = "en";
    	lang_button.click();
    }
    
    
    function changeLang(langvalue){
    	var tab_lang_fr = config.menufr;
    	var tab_lang_en = config.menuen;
    	
    	if(langvalue =="en"){
    		text = config.texten;
    	}else{
    		text = config.textfr;
    	}
    	
    	
    	var slide_text = document.querySelectorAll(".text_slide");
	 	var slide_button = document.querySelectorAll(".button_start");
	 	var sendaquote = document.querySelectorAll(".sendaquote");
	 	
	 	if(slide_text != null && slide_button  != null && sendaquote != null ){
	 		for(var i =0; i<slide_text.length; i++){
		 		slide_text[i].textContent = text.slidingtext[i];
		 		sendaquote[i].textContent = text.sendaquote;
		 	}
	 	}
	 	
	 	/*titleName
	 	 * study
	 	 * jobUnMyote
	 	 * quoteUnMyote
	 	 * 
	 	 */
	 	
	 	var titleNameTab = document.querySelectorAll(".titleName");
	 	var studyTab = document.querySelectorAll(".study");
	 	var jobUnMyoteTab = document.querySelectorAll(".jobUnMyote");
	 	var quoteUnMyoteTab = document.querySelectorAll(".quoteUnMyote");
	 	
	 	for(var i = 0; i<titleNameTab.length; i++){
	 		titleNameTab[i].textContent = text.title[i];
	 		studyTab[i].textContent = text.study[i];
	 		jobUnMyoteTab[i].textContent = text.jobUnMyote[i];
	 		quoteUnMyoteTab[i].textContent = text.quoteUnMyote[i];
	 	}
	 	
    }
});
