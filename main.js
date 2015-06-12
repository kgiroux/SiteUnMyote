 require(['src/json!config/text.json'], 
     function (config) {
    'use strict';   
    // About //
    var title;
    var data; 
    var link_about;
    var data_element_text; 
    var text_data;
    var lang_button = document.getElementById("lang_value");
    var lang = document.querySelector("data-lang");
    
    
    lang_button.onclick = function(){
    	if(lang_button != null){
        	if(lang_button.value =="fr"){
        		changeLang("fr");
        		this.value = "en";
        		var img_button = document.getElementById("image_drapeau");
        		img_button.src="./images/drapeau_anglais.jpg";
        		img_button.alt ="english_flag";
        	}else{
        		changeLang("en");
        		this.value ="fr";
        		var img_button = document.getElementById("image_drapeau");
        		img_button.src="./images/drapeau_france.jpg";
        		img_button.alt="french_flag";
        	}
        }
    }
    lang_button.click();
    
    
    function changeLang(langvalue){
    	var tab_lang_fr = config.menufr;
    	var tab_lang_en = config.menuen;
    	var slidingtext_en= config.slidingtexten; 
    	var slidingtext_fr= config.slidingtextfr;
    	var text;
    	if(langvalue =="en"){
    		text = config.texten;
    	}else{
    		text = config.textfr;
    	}
    	// Changement texte menu
	 	var menu_item = document.querySelectorAll(".menu_class");
	 	for(var i = 0; i<menu_item.length; i++){
	 		menu_item[i].innerText = text.menu[i];
	 	}
	 	
	 	var slide_text = document.querySelectorAll(".text_slide");
	 	var slide_button = document.querySelectorAll(".button_start");
	 	var sendaquote = document.querySelectorAll(".sendaquote");
	 	for(var i =0; i<slide_text.length; i++){
	 		slide_text[i].innerText = text.slidingtext[i];
	 		slide_button[i].innerText = text.slidingbutton;
	 		sendaquote[i].innerText = text.sendaquote;
	 	}
    	
    	// Traitement About EN
	 	data_element_text = document.getElementById("about_text");
    	while(data_element_text.firstChild != null){
    		data_element_text.removeChild(data_element_text.firstChild)
    	}
    	title = document.createElement("h3");
    	title.innerText = text.aboutus;
        console.log(text);
    	link_about = document.createElement("a");
        link_about.setAttribute("href","https://www.thalmic.com/en/myo/");
        link_about.innerText = text.linkabout;
        data_element_text = document.getElementById("about_text");
        text_data = document.createElement("p");
        text_data.innerText = text.about;
        data_element_text.appendChild(title);
        data_element_text.appendChild(text_data);
        data_element_text.appendChild(link_about);
        
        // Traitement Approach
        data_element_text = document.getElementById("approach_text");
        while(data_element_text.firstChild != null){
    		data_element_text.removeChild(data_element_text.firstChild)
    	}
        title = document.createElement("h3");
        title.innerText = text.ourapproach;
        data_element_text = document.getElementById("approach_text");
        text_data = document.createElement("p");
        text_data.innerText = text.approach;
        data_element_text.appendChild(title);
        data_element_text.appendChild(text_data);
        
        //Traitement think 
        data_element_text = document.getElementById("think");
        data_element_text.innerText = text.think;
        
      //Traitement message 
        data_element_text = document.getElementById("message");
        data_element_text.innerText = text.message;
    }
    
});
