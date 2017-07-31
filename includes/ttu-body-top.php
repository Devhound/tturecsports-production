<?php

// Variables
$siteTitle = 'Texas Tech University';

?>
<!-- Main-header Logo Links = = = = = = = = = = = = = = = = = = = = = = = = = -->
   <div class="university--head">
      <span class="university--head__title">Texas Tech University</span>
      <nav class="university--head__nav">
	      <a href="http://directory.texastech.edu/" tabindex="2" aria-label="TTU System Online Directory">Directory</a>
         <a href="http://raiderlink.ttu.edu/" tabindex="3" aria-label="Raiderlink">Raiderlink</a>
         <a href="http://www.ttu.edu/site/" tabindex="4" aria-label="Site Index">A-Z Index</a>
      </nav>
      <div class="university--head__search">
      	<!-- <a class="university__button" href="#">Menu<span></span></a>-->
      	<a class="ttu-search-trigger" href="#ttu-search"><span></span></a>
      </div>
   </div>
   <!-- Page Header Navigation = = = = = = = = = = = = = = = = = = = = = = = = = -->
   <header class="ttu-main-header" id="nav">
      <div class="logo__lockup">
         <a class="ttu-logo" href="http://www.ttu.edu/"><img src="/_ttu-template/2017/img/dbl__T.svg" alt="Texas Tech University Double T" width="5%" height="5%"></a>
         <h1><?php echo strtoupper($siteTitle); ?></h1>
      </div>
      <ul class="ttu-header-buttons">
      	<li><a class="ttu-nav-trigger" href="#ttu-primary-nav">Menu<span></span></a></li>
      	<li><a class="ttu-search-trigger mobile-search" href="#ttu-search">Search<span></span></a></li>
      </ul>
   </header>
   <main class="ttu-main-content">
       <section class="breadcrumb">
         <ul class="breadcrumbs">

            <li class="breadcrumbs-item"><a href="http://www.ttu.edu/" class="text-center icon-home">TTU</a></li>
            <li class="breadcrumbs-item"><a href="/2017/admissions/"><?php echo $siteTitle; ?></a></li>
         </ul>
      </section>
      <!-- Main content = = = = = = = = = = = = = = = = = = = = = = = -->
      <section class="l-main-pagecontent">
        <section class="standard-content">
          <div>
            <div class="large-9 large-centered columns">
