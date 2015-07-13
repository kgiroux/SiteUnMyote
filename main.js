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
	 		menu_item[i].innerText = text.menu[i];
	 	}
	 	
	 	var historyText = document.getElementById("history");
	 	if(historyText != null)
	 		historyText.innerText = text.ourhistory;
	 	
	 	var partenerText = document.getElementById("partener");
	 	if(partenerText != null)
	 		partenerText.innerText = text.Someofourpartener
	 	
	 		
	 	
	 	var slide_text = document.querySelectorAll(".text_slide");
	 	var slide_button = document.querySelectorAll(".button_start");
	 	var sendaquote = document.querySelectorAll(".sendaquote");
	 	
	 	if(slide_text != null && slide_button  != null && sendaquote != null ){
	 		for(var i =0; i<slide_text.length; i++){
		 		slide_text[i].innerText = text.slidingtext[i];
		 		slide_button[i].innerText = text.slidingbutton;
		 		sendaquote[i].innerText = text.sendaquote;
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
    	title.innerText = text.aboutus;
    	link_about = document.createElement("a");
        link_about.setAttribute("href","https://www.thalmic.com/en/myo/");
        link_about.setAttribute("target","_blank")
        link_about.innerText = text.linkabout;
        data_element_text = document.getElementById("about_text");
        if(data_element_text != null){
        	text_data = document.createElement("p");
            text_data.innerText = text.about;
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
        title.innerText = text.ourapproach;
        data_element_text = document.getElementById("approach_text");
        if(data_element_text != null){
	        text_data = document.createElement("p");
	        text_data.innerText = text.approach;
	        data_element_text.appendChild(title);
	        data_element_text.appendChild(text_data);
        }
        //Traitement think 
        data_element_text = document.getElementById("think");
        data_element_text.innerText = text.think;
        
      //Traitement message 
        data_element_text = document.getElementById("message");
        data_element_text.innerText = text.message;
    
        changeTimeLine();
    }
    
    
    function changeTimeLine(){
    	
    	/*
    	 * <ul id="dates">
			<li><a href="#1900">1900</a></li>
			<li><a href="#1930">1930</a></li>
			<li><a href="#1944">1944</a></li>
			<li><a href="#1950">1950</a></li>
			<li><a href="#1971">1971</a></li>
			<li><a href="#1977">1977</a></li>
			<li><a href="#1989">1989</a></li>
			<li><a href="#1999">1999</a></li>
			<li><a href="#2001">2001</a></li>
			<li><a href="#2011">2011</a></li>
		</ul>
		<ul id="issues">
			<li id="1900">
				<img src="images/media.png" width="256" height="256" />
				<h1>1900</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1930">
				<img src="images/media.png" width="256" height="256" />
				<h1>1930</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1944">
				<img src="images/media.png" width="256" height="256" />
				<h1>1944</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1950">
				<img src="images/media.png" width="256" height="256" />
				<h1>1950</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1971">
				<img src="images/media.png" width="256" height="256" />
				<h1>1971</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1977">
				<img src="images/media.png" width="256" height="256" />
				<h1>1977</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1989">
				<img src="images/media.png" width="256" height="256" />
				<h1>1989</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1999">
				<img src="images/media.png" width="256" height="256" />
				<h1>1999</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="2001">
				<img src="images/media.png" width="256" height="256" />
				<h1>2001</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="2011">
				<img src="images/media.png" width="256" height="256" />
				<h1>2011</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
		</ul>
		<div id="grad_left"></div>
		<div id="grad_right"></div>
		<a href="#" id="next">+</a>
		<a href="#" id="prev">-</a>
    	 * 
    	 * 
    	 * 
    	 */
    	
    	
    	
    	
    	console.log(text);
    	
    	var ulDates = document.getElementById("dates")
    	while(ulDates.firstChild != null){
    		ulDates.removeChild(ulDates.firstChild)
    	}
    	
    	for(var i = 0; i<text.timeline.length; i++){
    		var liDates = document.createElement("li");
    		var aDates = document.createElement("a");
    		
    		aDates.setAttribute("href","#"+text.timeline[i].id);
    		aDates.innerText = text.timeline[i].date;
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
    		Htitle.innerText = text.timeline[i].date
    		
    		liIssues.appendChild(Htitle)
        	var col2 = document.createElement("div");
    		col2.classList.add("col-lg-4");
    		var pBody = document.createElement("p");
        	pBody.innerText  = text.timeline[i].body;
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
