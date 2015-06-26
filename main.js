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
    
        changeTimeLine();
    }
    
    
    function changeTimeLine(){
    	
    	
    	
    	console.log(text);
    	var ul = document.getElementById("timelineId");
    	
    	while(ul.firstChild != null){
    		ul.removeChild(ul.firstChild)
    	}
    	
    	for(var i = 0; i<text.timeLine.length; i++){
        	var li = document.createElement("li");
        	if(i%2==1)
        		li.classList.add("timeline-inverted");
        	/* Badge */
        	var divBadge = document.createElement("div");
        	divBadge.classList.add("timeline-badge");
        	var iImage = document.createElement("i");
        	iImage.classList.add("fa");
        	iImage.classList.add("fa-check");
        	divBadge.appendChild(iImage);
        	
        	
        	var divPanel = document.createElement("div")
        	divPanel.classList.add("timeline-panel");
        	var divheader = document.createElement("div");
        	divheader.classList.add("timeline-heading")
        	var h4title = document.createElement("h4");
        	h4title.classList.add("timeline-title");		
        	h4title.innerText = text.timeLine[i].title
        	
        	var pTime = document.createElement("p");
        	/* Header Time Line */
        	var smallTime = document.createElement("small");
        	smallTime.classList.add("text-muted");
        	var iTime = document.createElement("i");
        	iTime.classList.add("fa");
        	iTime.classList.add("fa-clock-o");
        	smallTime.appendChild(iTime);
        	smallTime.innerText = text.timeLine[i].date;
        	pTime.appendChild(smallTime);
        	divheader.appendChild(h4title);
        	divheader.appendChild(pTime);
        	
        	/* Body TimeLine*/
        	var divBody = document.createElement("div");
        	divBody.classList.add("timeline-body");
        	
        	var pBody = document.createElement("p");
        	pBody.innerText  = text.timeLine[i].body;
        	
        	divBody.appendChild(pBody);
        	
        	
        	divPanel.appendChild(divheader);
        	divPanel.appendChild(divBody);
        	
        	li.appendChild(divBadge);
        	li.appendChild(divPanel);
        	
        	
        	ul.appendChild(li);
    	}
    	
    	
    	/*<li>
        <div class="timeline-badge"><i class="fa fa-check"></i>
        </div>
        <div class="timeline-panel">
            <div class="timeline-heading">
                <h4 class="timeline-title">Lorem ipsum dolor</h4>
                <p><small class="text-muted"><i class="fa fa-clock-o"></i> 11 hours ago via Twitter</small>
                </p>
            </div>
            <div class="timeline-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>
            </div>
        </div>
    </li>*/
    	
    	
    }
});
