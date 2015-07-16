 <!DOCTYPE html>
<html>
<head>
<title>UNMYOTE</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="./images/Logo.png" >
<meta name="keywords" content="UNMYOTE template" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- bootstrap-css -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<!--// bootstrap-css -->
<!-- css -->
<link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/timeline.css" type="text/css" media="all" />
<!--// css -->
<!-- js -->


<script data-main="mainFounder" src="libs/require.js/require.js"></script>

<script type="text/javascript" src="./js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>



<!-- js -->
<!--fonts-->
	<link rel="stylesheet" href="./css/font-awesome-4.3.0/font-awesome-4.3.0/css/font-awesome.min.css">
	<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
<!--/fonts-->
<!-- start-smoth-scrolling -->
	<script type="text/javascript" src="./js/move-top.js"></script>
	<script type="text/javascript" src="./js/easing.js"></script>
	
	<script type="text/javascript">
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});
	</script>
	
<!-- start-smoth-scrolling -->
</head>

<body>
<data-lang lang="en"/>
<nav class="navbar navbar-inverse">		
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	     <a class="" href="index.php">
	    		<img class="logo" src="./images/logo/LogoUnMyoteHeader.png" alt=""/>
	 	  </a>
		 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	     </div>
	    
		<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
			<ul class="nav1 nav navbar-nav">
				<li><a id="lang_value" value="en"><img id="image_drapeau" src="./images/utils/drapeau_france.jpg" alt="drapeau_france"></a>
			</ul>
		<!-- script for menu -->
			<script> 
				$( "span.menu" ).click(function() {
				$( "ul.nav1" ).slideToggle( 300, function() {
				 // Animation complete.
				});
				});
			</script>
		<!-- //script for menu -->
		</div>
	</div>
</nav>
<div class="clearfix"></div>
<div class="banner">
	<div id="video-bg" class="banner">
		<script type="text/javascript">
			var tag = document.createElement('script');
		    tag.src = "http://www.youtube.com/player_api";
		    var firstScriptTag = document.getElementsByTagName('script')[0];
		    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		    // 3. This function creates an <iframe> (and YouTube player)
		    //    after the API code downloads.
		    var player;
		    function onYouTubePlayerAPIReady() {
		      player = new YT.Player('video-bg', {
		        playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'wmode':'opaque', 'loop': 1, 'playlist': 'oWu9TFJjHaM' },
		        videoId: 'oWu9TFJjHaM',
		        events: {
		          'onReady': onPlayerReady}
		      });
		    }
		
		    // 4. The API will call this function when the video player is ready.
		    function onPlayerReady(event) {
		      event.target.mute();
		    }
	    </script>
	</div>
	<div class="container">
		<div class="cadre"></div>
	</div>
	<div class="container">	
		<!-- responsiveslides -->
		<script src="./js/responsiveslides.min.js"></script>
		<script>
			// You can also use "$(window).load(function() {"
			$(function () {
			 // Slideshow 4
			$("#slider3").responsiveSlides({
				auto: true,
				pager: true,
				nav: false,
				speed: 500,
				namespace: "callbacks",
				before: function () {
			$('.events').append("<li>before event fired.</li>");
			},
			after: function () {
				$('.events').append("<li>after event fired.</li>");
				}
				});
				});
		</script>
		<!-- responsiveslides -->
		<div  id="top" class="callbacks_container">
			<ul class="rslides" id="slider3">
				<li>
					<div class="banner-info text-center">
						<h1>UNMYOTE</h1>
						<p class="text_slide">A SOLUTION FOR PEOPLE SUFFERING OF MUTISM </p>
						<div class="start">
								<a class="sendaquote"  href="https://twitter.com/intent/tweet?text=@UnMyote">SEND A QUOTE</a>
						</div>
					</div>
					<br>
				</li>
				<li>
					<div class="banner-info text-center">
						<h1>UNMYOTE</h1>
						<p class="text_slide" >SOFTWARE SOLUTION</p>
						<div class="start">
								<a class="sendaquote" href="https://twitter.com/intent/tweet?text=@UnMyote">SEND A QUOTE</a>
						</div>
					</div>
					<br>
				</li>
				<li>
					<div class="banner-info text-center">
						<h1>UNMYOTE </h1>
						<p class="text_slide">POWERED BY MYO </p>
						<div class="start">
								<a class="sendaquote" href="https://twitter.com/intent/tweet?text=@UnMyote">SEND A QUOTE</a>
						</div>
					</div>
					<br>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class= "containerbootplus center-block">
	 <div class="row">
	 
	 	<div class="col-md-2 col-sm-2 col-xs-2"></div>
        <div class="col-md-4 col-sm-4 col-xs-4 text-center founder">
           <div class="well">
             <img class="img-circle" data-src="holder.js/140x140" alt="140x140" src="images/profil/profilepicK.png" style="width: 140px; height: 140px;">
             <h2 class="titleName">Kevin Giroux, Founder</h2><br>
             <p class="study">Ingénieur en Système d'Information - ESIGELEC</p>
             <p class="jobUnMyote">Responsable technique et développeur.</p><br>
             <i class="quoteUnMyote">"UnMyote est un projet basé sur un concept innovant, pouvant être l'opportunité de rendre plus facile l'intégration des personnes atteintes de mutisme"</i>
             <div class="keepfounder">
					<ul>
						<li><a class="twitter" href="https://twitter.com/GirouxKevin"></a></li>
						<li><a class="googl" href="https://plus.google.com/109156652403283664005/posts"></a></li>
						<li><a class="message" href="mailto:giroux.kevin.fr@gmail.com"></a></li>
					</ul>
			 </div>
            </div>
        </div><!-- /.span4 -->
        <div class="col-md-4 col-sm-4 col-xs-4 text-center founder">
           <div class="well">
             <img class="img-circle" data-src="holder.js/140x140" alt="140x140" src="images/profil/profilepicC.png" style="width: 140px; height: 140px;">
             <h2 class="titleName">Cyril Lefebvre, Founder</h2><br>
             <p class="study">Ingénieur en Système d'Information - ESIGELEC</p>
             <p class="jobUnMyote">Responsable communication/marketing et développeur.</p><br>
             <i class="quoteUnMyote">"UnMyote représente plus qu'un simple traducteur, c'est l'opportunité de donner toutes les chances aux personnes atteintes de mutisme."</i>
             <div class="keepfounder">
					<ul>
						<li><a class="twitter" href="https://twitter.com/LirycMoaners"></a></li>
						<li><a class="message" href="mailto:cyril.lefebvre.27@gmail.com"></a></li>
					</ul>
			 </div>
            
            </div>
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2"></div>
   </div>
</div>
<div class="footer">
	<div class="container">
		<p>Copyright &copy; 2015 UNMYOTE</p>
	</div>
</div>
<!--//footer-->
<!-- smooth scrolling -->
	<script type="text/javascript">
		$(document).ready(function() {
		/*
			var defaults = {
			containerID: 'toTop', // fading element id
			containerHoverID: 'toTopHover', // fading element hover id
			scrollSpeed: 1200,
			easingType: 'linear' 
			};
		*/								
		$().UItoTop({ easingType: 'easeOutQuart' });
		});
	</script>
	<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
<!-- //smooth scrolling -->
</body>
</html>