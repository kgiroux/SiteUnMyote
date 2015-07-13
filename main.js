 require(['src/json!config/text.json'], 
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
            		img_button.src="./images/drapeau_anglais.jpg";
            		img_button.alt ="english_flag";
            	}else{
            		createCookie("lang","en",365)
            		changeLang("en");
            		this.value ="fr";
            		var img_button = document.getElementById("image_drapeau");
            		img_button.src="./images/drapeau_france.jpg";
            		img_button.alt="french_flag";
            	}
            }
        }
    }
    
    
    var lang_value = readCookie("lang")
    if(lang_value != null){
    	lang_button = document.getElementById("lang_value");
    	if(lang_button != null){
    		lang_button.value = lang_value;
            changeLang(lang_value)
            if(lang_value == "fr"){
            	var img_button = document.getElementById("image_drapeau");
        		img_button.src="./images/drapeau_anglais.jpg";
            }else{
            	var img_button = document.getElementById("image_drapeau");
        		img_button.src="./images/drapeau_france.jpg";
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
    	var slidingtext_en= config.slidingtexten; 
    	var slidingtext_fr= config.slidingtextfr;
    	
    	if(langvalue =="en"){
    		text = config.texten;
    	}else{
    		text = config.textfr;
    	}
    	// Changement texte menu
	 	var menu_item = document.querySelectorAll(".menu_class");
	 	for(var i = 0; i<menu_item.length; i++){
	 		menu_item[i].textContent = text.menu[i];
	 	}
	 	
	 	var historyText = document.getElementById("history");
	 	if(historyText != null)
	 		historyText.textContent = text.ourhistory;
	 	
	 	var partenerText = document.getElementById("partener");
	 	if(partenerText != null)
	 		partenerText.textContent = text.Someofourpartener
	 	
	 		
	 	
	 	var slide_text = document.querySelectorAll(".text_slide");
	 	var slide_button = document.querySelectorAll(".button_start");
	 	var sendaquote = document.querySelectorAll(".sendaquote");
	 	
	 	if(slide_text != null && slide_button  != null && sendaquote != null ){
	 		for(var i =0; i<slide_text.length; i++){
		 		slide_text[i].textContent = text.slidingtext[i];
		 		slide_button[i].textContent = text.slidingbutton;
		 		sendaquote[i].textContent = text.sendaquote;
		 	}
	 	}
	 	
    	
    	// Traitement About EN
	 	data_element_text = document.getElementById("about_text");
	 	if(data_element_text != null){
	 		while(data_element_text.firstChild != null){
	    		data_element_text.removeChild(data_element_text.firstChild)
	    	}
	 	}
    	title = document.createElement("h3");
    	title.textContent = text.aboutus;
    	link_about = document.createElement("a");
        link_about.setAttribute("href","https://www.thalmic.com/en/myo/");
        link_about.setAttribute("target","_blank")
        link_about.textContent = text.linkabout;
        data_element_text = document.getElementById("about_text");
        if(data_element_text != null){
        	text_data = document.createElement("p");
            text_data.textContent = text.about;
            data_element_text.appendChild(title);
            data_element_text.appendChild(text_data);
            data_element_text.appendChild(link_about);
        }
        
        
        // Traitement Approach
        data_element_text = document.getElementById("approach_text");
        if(data_element_text != null){
	        while(data_element_text.firstChild != null){
	    		data_element_text.removeChild(data_element_text.firstChild)
	    	}
        }
        title = document.createElement("h3");
        title.textContent = text.ourapproach;
        data_element_text = document.getElementById("approach_text");
        if(data_element_text != null){
	        text_data = document.createElement("p");
	        text_data.textContent = text.approach;
	        data_element_text.appendChild(title);
	        data_element_text.appendChild(text_data);
        }
        //Traitement think 
        data_element_text = document.getElementById("think");
        data_element_text.textContent = text.think;
        
      //Traitement message 
        data_element_text = document.getElementById("message");
        data_element_text.textContent = text.message;
    
        changeTimeLine();
    }
    
    
    function changeTimeLine(){
    	var ulDates = document.getElementById("dates")
    	while(ulDates.firstChild != null){
    		ulDates.removeChild(ulDates.firstChild)
    	}
    	
    	for(var i = 0; i<text.timeline.length; i++){
    		var liDates = document.createElement("li");
    		var aDates = document.createElement("a");
    		
    		aDates.setAttribute("href","#"+text.timeline[i].id);
    		aDates.textContent = text.timeline[i].date;
    		liDates.appendChild(aDates);
    		ulDates.appendChild(liDates);
    	}
    	
    	
    	var ulIssues = document.getElementById("issues")
    	while(ulIssues.firstChild != null){
    		ulIssues.removeChild(ulIssues.firstChild)
    	}
    	
    	for(var i = 0; i<text.timeline.length; i++){
    		var liIssues = document.createElement("li");
    		liIssues.setAttribute("id",text.timeline[i].id)
    		var BodyImage = document.createElement("img") ;
    		var BodyVideo = document.createElement("div");
    		var divRow = document.createElement("div");
    		divRow.classList.add("row");
    		var col1 = document.createElement("div")
    		col1.classList.add("col-lg-1")
    		var colend = document.createElement("div")
    		colend.classList.add("col-lg-1")
    		var col = document.createElement("div");
    		col.classList.add("col-lg-6");
    		if(text.timeline[i].img != undefined && text.timeline[i].img != ""){
            	BodyImage.setAttribute("src",text.timeline[i].img)
            	BodyImage.setAttribute("width","256")
            	BodyImage.setAttribute("height","256")
            	BodyImage.setAttribute("alt",text.timeline[i].altimg);
            	BodyImage.classList.add("img-responsive");
        	}
        	if(text.timeline[i].video != undefined && text.timeline[i].video != ""){
        		BodyVideo.classList.add("embed-responsive");
        		BodyVideo.classList.add("embed-responsive-4by3");
        		var iframeVideo = document.createElement("iframe");
        		iframeVideo.classList.add("embed-responsive-item");
        		var src = "//www.youtube.com/embed/" + text.timeline[i].video +"?autoplay=0"
        		iframeVideo.setAttribute("src",src);
        		BodyVideo.appendChild(iframeVideo)
        	}
    		if(BodyVideo.hasChildNodes())
    			col.appendChild(BodyVideo);
    		else if(BodyImage.src != null)
    			col.appendChild(BodyImage);
        	
    		var Htitle = document.createElement("h1");
    		Htitle.textContent = text.timeline[i].date
    		
    		liIssues.appendChild(Htitle)
        	var col2 = document.createElement("div");
    		col2.classList.add("col-lg-5");
    		var pBody = document.createElement("p");
    		pBody.classList.add("text-justify");
        	pBody.textContent  = text.timeline[i].body;
        	col2.appendChild(pBody);
        	divRow.appendChild(col1);
        	if(col.hasChildNodes)
        		divRow.appendChild(col);
        	divRow.appendChild(col2);
        	divRow.appendChild(colend);
    		liIssues.appendChild(divRow)
        	ulIssues.appendChild(liIssues);
        	$().timelinr({
				arrowKeys: 'true'
			})
    	}
    }
});
