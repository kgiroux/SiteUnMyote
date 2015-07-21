<!DOCTYPE html>
<html>
<head>
<title>UNMYOTE</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="./images/logo/logo.png" >
<meta name="keywords" content="UNMYOTE template" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- bootstrap-css -->

<!--// bootstrap-css -->
<!-- css -->
<link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" href="css/timeline.css" type="text/css" media="all" />
<!--// css -->
<!-- js -->
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/notify.min.js"></script>

<script data-main="main" src="libs/require.js/require.js"></script>
<script src="js/jquery.timelinr-0.9.54.js"></script>
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
<script type="text/javascript">

	function OK(){
		$.notify("Success","success");
	}

	function failed(){
		$.notify("Echec to subscribe to the newsletter","error");
	}
</script>


<body>
<data-lang lang="en" />

<!--header-->
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
				<li><a class="scroll active menu_class" href="#home">HOME</a></li>
				<li><a class="scroll menu_class" href="#about">ABOUT</a></li>	
				<li><a class="scroll menu_class" href="#approach">OUR  APPROACH</a></li>
				<li><a class="scroll menu_class history" href="#ourhistory">HISTORY</a></li>
				<li><a class="menu_class" href="./founder.php">FOUNDER</a></li>
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
<!--//header-->
<!--banner-->
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
		        playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'wmode':'opaque', 'loop': 1, 'playlist': '7BJDSnA_H84' },
		        videoId: '7BJDSnA_H84',
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
								<a class="scroll button_start" href="#about">START TOUR</a>
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
								<a class="scroll button_start" href="#about">START TOUR</a>
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
								<a class="scroll button_start" href="#about">START TOUR</a>
								<a class="sendaquote" href="https://twitter.com/intent/tweet?text=@UnMyote">SEND A QUOTE</a>
						</div>
					</div>
					<br>
				</li>
			</ul>
		</div>
	</div>
</div>
<!--//banner-->

<!--about-->
<div id="about" class="about">
	<div class="about-grids">
		<div class="about-right">
			<img src="images/other/myo.jpg" alt=""/>
		</div>
		<div class="about-left">
			<div class="about-info" id="about_text">
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
</div>
<!--//about-->
<!--behind-->
<div class="behind">
	<div class="container">
	</div>
</div>
<!--//behind-->
<!--approach-->
<div id="approach" class="approach">
	<div class="approach-grids">
		<div class="approach-left">
			<img id="principe_pic" src="./images/other/principeUnMyoteen.png" alt=""/>
		</div>
		<div class="approach-right" id="approach_text">
			
		</div>
		<div class="clearfix"></div>
	</div>
</div>
<!--//approach-->
<!--services-->
<div class="behind">
	<div class="container">
	</div>
</div>
<!--TIME LINE-->
<div id="ourhistory" class="ourhistory"></div>
<div class="panel-body">
    <ul class="timeline" id="timelineId">
    </ul>
</div>


<div class="clients">
	<div class="container">
		<h3 id="partener">SOME OF OUR CLIENTS</h3>
		<div class="flex-slider">
			<ul id="flexiselDemo1">
				<li>
					<a href="http://www.lestalentsdunumerique.fr"><img src="./images/partner/TDN.png" alt=""/></a>
				</li>
				<li>
					<a href="https://www.thalmic.com"><img src="./images/partner/TL.png" alt=""/></a>
				</li>
				<li>
					<a href="https://www.esigelec.fr"><img src="./images/partner/E.png" alt=""/></a>
				</li>
			</ul>
			<script type="text/javascript">
							$(window).load(function() {
								$("#flexiselDemo1").flexisel({
									visibleItems: 3,
									animationSpeed: 1000,
									autoPlay: true,
									autoPlaySpeed: 3000,    		
									pauseOnHover: true,
									enableResponsiveBreakpoints: true,
									responsiveBreakpoints: { 
										portrait: { 
											changePoint:320,
											visibleItems: 1
										}, 
										landscape: { 
											changePoint:640,
											visibleItems: 1
										},
										tablet: { 
											changePoint:768,
											visibleItems: 3
										}
									}
								});
								
							});
			</script>
			<script type="text/javascript" src="js/jquery.flexisel.js"></script>
		</div>
	</div>
</div>
<!--//clients-->
<!--keep in touch-->
<div class="keep">
	<div class="container">
		<div id="keepintouch">
			<h2>Subscribe to our Newsletter </h2>
			<form class="form-inline" method="post" action="optFile.php">
				<input class="form-control" type="email" id="email" name="email">
				<input type="submit" class="btn btn-default" value="Submit">
			</form>
		</div>
		<ul>
			<li><a class="facebook" href="https://www.facebook.com/pages/UnMyote/110064849324870"></a></li>
			<li><a class="twitter" href="https://twitter.com/UnMyote"></a></li>
			<li><a class="googl" href="https://plus.google.com/u/1/109924670256087185916/posts"></a></li>
			<li><a class="message" href="mailto:unmyote@gmail.com"></a></li>
			<li><a class="youtube" href="https://www.youtube.com/channel/UCyoIXF4sV2KeNHZsbmU2fug"></a></li>
		</ul>
	</div>
</div>
<!--//keep in touch-->
<!--footer-->
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
