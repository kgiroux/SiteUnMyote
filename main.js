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
    if(lang_value != null){
    	lang_button = document.getElementById("lang_value");
    	if(lang_button != null){
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
        
        // Traitement KeepInTouch
        data_element_text = document.getElementById("keepintouch");
        if(data_element_text != null){
	        while(data_element_text.firstChild != null){
	    		data_element_text.removeChild(data_element_text.firstChild)
	    	}
        }
        title = document.createElement("h3");
        title.textContent = text.keepintouch;
        if(data_element_text != null){
	        data_element_text.appendChild(title);
        }
    
        changeTimeLine();
    }
    
    
    function changeTimeLine(){
    	data_element_text = document.getElementById("ourhistory");
    	if(data_element_text != null){
	        while(data_element_text.firstChild != null){
	    		data_element_text.removeChild(data_element_text.firstChild)
	    	}
        }
    	title = document.createElement("h3");
        title.textContent = text.ourhistory;
        if(data_element_text != null){
        	data_element_text.appendChild(title);
        }
    	var ul = document.getElementById("timelineId");
    	
    	while(ul.firstChild != null){
    		ul.removeChild(ul.firstChild)
    	}
    	
    	for(var i = 0; i<text.timeline.length; i++){
        	var li = document.createElement("li");
        	if(i%2==1)
        		li.classList.add("timeline-inverted");
        	/* Badge */
        	var divBadge = document.createElement("div");
        	divBadge.classList.add("timeline-badge");
        	var iImage = document.createElement("i");
        	iImage.classList.add("fa");
        	switch(text.timeline[i].type){
        	case "1" :
        		// NewsPaper symbole
        		iImage.classList.add("fa-newspaper-o");
        		break;
        	case "2" : 
        		// Check symbole
        		iImage.classList.add("fa-check");
        		break;
        	case "3" : 
        		// CARD symbole
        		iImage.classList.add("fa-cc-mastercard");
        		break;
        	case "4" : 
        		//Android
        		iImage.classList.add("fa-android");
        		break;
        	case "5" : 
        		//Android
        		iImage.classList.add("fa-apple");
        		break;
        	case "6" : 
        		//Android
        		iImage.classList.add("fa-windows");
        		break;
        	case "7" : 
        		//Android
        		iImage.classList.add("fa-youtube");
        		break;
        	case "8" : 
        		//Android
        		iImage.classList.add("fa-twitter-square");
        		break;
        	case "9" : 
        		//Android
        		iImage.classList.add("fa-facebook-square");
        		break;
        	}
        	divBadge.appendChild(iImage);
        	
        	
        	var divPanel = document.createElement("div")
        	divPanel.classList.add("timeline-panel");
        	var divheader = document.createElement("div");
        	divheader.classList.add("timeline-heading")
        	var h4title = document.createElement("h4");
        	h4title.classList.add("timeline-title");		
        	h4title.innerText = text.timeline[i].title
        	
        	var pTime = document.createElement("p");
        	/* Header Time Line */
        	var smallTime = document.createElement("small");
        	smallTime.classList.add("text-muted");
        	var iTime = document.createElement("i");
        	iTime.classList.add("fa");
        	iTime.classList.add("fa-clock-o");
        	smallTime.appendChild(iTime);
        	smallTime.innerText = text.timeline[i].date;
        	pTime.appendChild(smallTime);
        	divheader.appendChild(h4title);
        	divheader.appendChild(pTime);
        	
        	/* Body TimeLine*/
        	var divBody = document.createElement("div");
        	divBody.classList.add("timeline-body");
        	
        	var pBody = document.createElement("p");
        	pBody.innerText  = text.timeline[i].body;
        	divBody.appendChild(pBody);
        	
        	if(text.timeline[i].img != undefined && text.timeline[i].img != ""){
        		var BodyImage = document.createElement("img");
            	BodyImage.setAttribute("src",text.timeline[i].img)
            	BodyImage.setAttribute("alt",text.timeline[i].altimg);
            	BodyImage.classList.add("img-responsive");
            	divBody.appendChild(BodyImage);
        	}
        	
        	if(text.timeline[i].video != undefined && text.timeline[i].video != ""){
        		var BodyVideo = document.createElement("div");
        		BodyVideo.classList.add("embed-responsive");
        		BodyVideo.classList.add("embed-responsive-4by3");
        		var iframeVideo = document.createElement("iframe");
        		iframeVideo.classList.add("embed-responsive-item");
        		var src = "//www.youtube.com/embed/" + text.timeline[i].video +"?autoplay=0"
        		iframeVideo.setAttribute("src",src);
        		
        		
        		BodyVideo.appendChild(iframeVideo);
        		divBody.appendChild(BodyVideo);
        	}
        	if(text.timeline[i].download != undefined && text.timeline[i].download != ""){
        		
        		var Bodydownload = document.createElement("a");
        		Bodydownload.classList.add("btn");
        		Bodydownload.classList.add("btn-lg");
        		Bodydownload.classList.add("btn-primary");
        		
        		var span = document.createElement("span");
        		span.classList.add("glyphicon");
        		span.classList.add("glyphicon-download-alt");
        		Bodydownload.setAttribute("src",text.timeline[i].download);
        		if(text.timeline[i].downloadname != undefined){
        			Bodydownload.setAttribute("download",text.timeline[i].downloadname);
        		}
        		Bodydownload.appendChild(span);
        		span.innerText = " Download"
 //       		Bodydownload.innerText = "Download"
        		
        		divBody.appendChild(Bodydownload);
        		//<a href="#" class="btn btn-primary"><span class="glyphicon glyphicon-download-alt"></span> Download</a>
        	}
        	
        	
        	
        	
        	divPanel.appendChild(divheader);
        	divPanel.appendChild(divBody);
        	
        	li.appendChild(divBadge);
        	li.appendChild(divPanel);
        	
        	
        	ul.appendChild(li);
    	}
    }
});
