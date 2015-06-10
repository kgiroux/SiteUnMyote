 require(['src/json!config/text.json'], 
     function (config) {
    'use strict';   
    // About //
    var title;
    var data; 
    var link_about;
    var data_element_text; 
    var text_data
    
    
    
    var lang = document.querySelector("data-lang");
    if(lang.lang == "en"){    	
    	// Traitement About EN 
    	
    	title = document.createElement("h3");
    	title.innerText = "About US";
    	data = config.texten;
        console.log(data);
    	link_about = document.createElement("a");
        link_about.setAttribute("href","https://www.thalmic.com/en/myo/");
        link_about.innerText = "READ MORE ABOUT MYO";
        data_element_text = document.getElementById("about_text");
        text_data = document.createElement("p");
        text_data.innerText = data.about;
        data_element_text.appendChild(title);
        data_element_text.appendChild(text_data);
        data_element_text.appendChild(link_about);
        
        // Traitement Approach
        title = document.createElement("h3");
        title.innerText = "Our Approach";
        data_element_text = document.getElementById("approach_text");
        text_data = document.createElement("p");
        text_data.innerText = data.approach;
        data_element_text.appendChild(title);
        data_element_text.appendChild(text_data);
        
        
        
        
    }else{
    	// Traitement About EN 
    	
    	title = document.createElement("h3");
    	title.innerText = "A propos de nous";
    	data = config.text;
        console.log(data);
    	link_about = document.createElement("a");
        link_about.setAttribute("href","https://www.thalmic.com/en/myo/");
        link_about.innerText = "READ MORE ABOUT MYO";
        data_element_text = document.getElementById("about_text");
        text_data = document.createElement("p");
        text_data.innerText = data.about;
        data_element_text.appendChild(title);
        data_element_text.appendChild(text_data);
        data_element_text.appendChild(link_about);
        
        
        // Traitement Approach
        title = document.createElement("h3");
        title.innerText = "Notre approche";
        data_element_text = document.getElementById("approach_text");
        text_data = document.createElement("p");
        text_data.innerText = data.approach;
        data_element_text.appendChild(title);
        data_element_text.appendChild(text_data);
        
    }
    
    
    
    
    
    
    
});
