<!DOCTYPE html>
<html>
    <head>
        <?php include 'includes/ttu-head.html'; ?>
        <title>Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include 'includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <a href="#" class="rec-hours-button">Rec Hours</a>
        <section class="rec-hours">
            <button class="rec-hours__close"></button>
            <div class="rec-hours__week">
                <p>Hours for week of</p>
                <h3>
                    <?php echo date("n/j"); ?>
                </h3>
            </div>
            <div class="rec-hours__grid">
                <div class="rec-hours__department">
                    <h4>Rec Center</h4>
                    <div class="rec-hours-department__hours">
                        <p>6AM - 12PM</p>
                    </div>
                </div>
                <div class="rec-hours__department">
                    <h4>Aquatic Center</h4>
                    <div class="rec-hours-department__hours">
                        <p>6AM - 8:45AM</p>
                        <p>11AM - 8PM</p>
                    </div>
                </div>
                <div class="rec-hours__department">
                    <h4>Climbing Wall</h4>
                    <div class="rec-hours-department__hours">
                        <p>3PM - 9PM</p>
                    </div>
                </div>
                <div class="rec-hours__department">
                    <h4>Fit / Well</h4>
                    <div class="rec-hours-department__hours">
                        <p>8AM - 8PM</p>
                    </div>
                </div>
                <div class="rec-hours__department">
                    <h4>Main Office</h4>
                    <div class="rec-hours-department__hours">
                        <p>8AM - 5PM</p>
                    </div>
                </div>
                <div class="rec-hours__department">
                    <h4>OPC</h4>
                    <p class="rec-hours-department__description">(Outdoor Pursuits Center)</p>
                    <div class="rec-hours-department__hours">
                        <p>12PM - 6PM</p>
                    </div>
                </div>
                <div class="rec-hours__department">
                    <h4>Turf Field</h4>
                    <p class="rec-hours-department__description">(West Rec Complex)</p>
                    <div class="rec-hours-department__hours">
                        <p>8AM - 5PM</p>
                    </div>
                </div>
            </div>
        </section>
            <section class="rec-home__hero">
              <h2>This Month's Spotify Playlist</h2>
              <a href="#" class="rec-hero__call-to-action">
                <p>Red Raider</p>
                <p>Runner</p>
              </a>
            </section>

            <section class="rec-home__quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#">Become a Member</a></li>
                <li><a href="#">intramural sports</a></li>
                <li><a href="#">group fitness schedule</a></li>
                <li><a href="#">opc trip schedule</a></li>
                <li><a href="#">sports clubs</a></li>
                <li><a href="#">activities at the pool</a></li>
                <li><a href="#">TTU Faculty/Staff</a> </li>
                <li><a href="#">Fitness Challenge</a></li>
                <li><a href="#">turf field information</a></li>
                <li><a href="#">vertical plains</a></li>
                <li><a href="#">need a team for intramurals?</a></li>
                <li><a href="#">personal training</a></li>
                <li><a href="#">raider escape room</a></li>
              </ul>
            </section>

            <section class="rec-home__facilities">
                <div class="rec-facilities__background flex-on-scroll">
                    <div class="top-left-triangle">
                        <div class="triangle-image" style="background-image: url('images/rec-pool-bw.jpg');"></div>
                    </div>
                </div>
                <h2>Facilities</h2>
                <p class="rec-home__giant-letter">F</p>
                <div class="rec-home-facilities__text">
                    <p>Spicy jalapeno bacon ipsum dolor amet doner spare ribs salami, t-bone flank turkey brisket. Shoulder boudin shankle, filet mignon doner ground round turkey turducken t-bone. Boudin alcatra cow rump. Salami flank kevin, cupim boudin t-bone biltong ham hock short loin strip steak frankfurter.</p>
                    <p>Strip steak jerky landjaeger corned beef pig pork chop bresaola salami. Prosciutto pancetta chuck hamburger salami pork ground round spare ribs short loin flank pork belly pig meatloaf tri-tip. Cow short loin meatball, shankle shank ham hock picanha tongue turkey tail pork belly chicken fatback pig. Jerky t-bone corned beef chicken chuck salami, ground round pork belly ball tip bresaola spare ribs pancetta pork chop flank. Pork chop pork belly ribeye, landjaeger burgdoggen andouille tongue spare ribs short loin salami kevin. Fatback salami leberkas tenderloin porchetta ham hock. Shankle tri-tip flank picanha.</p>
                </div>
            </section>

            <section class="rec-home__sliders">
                <div class="video-slider flex-on-scroll">
                    <div class="video-slider__slide">
                        <div class="video-slide__image" style="background-image:url('images/woman-with-ropes.jpg');"></div>
                    </div>
                    <div class="video-slider__slide">
                        <div class="video-slide__image" style="background-image:url('images/woman-with-ropes.jpg');"></div>
                    </div>
                    <div class="video-slider__slide">
                        <div class="video-slide__image" style="background-image:url('images/woman-with-ropes.jpg');"></div>
                    </div>
                </div>
                <div class="text-slider">
                    <div class="text-slider__slide">
                        <h3>Crossfit Room</h3>
                        <p class="text-slide__hashtag">#Recemtech</p>
                        <p class="text-slide__quote">"Hustle for that muscle."<br />-Unknown</p>
                        <a href="#">Classes Offered</a>
                    </div>
                    <div class="text-slider__slide">
                        <h3>Crossfit Room</h3>
                        <p class="text-slide__hashtag">#Recemtech</p>
                        <p class="text-slide__quote">"Hustle for that muscle."<br />-Unknown</p>
                        <a href="#">Classes Offered</a>
                    </div>
                    <div class="text-slider__slide">
                        <h3>Crossfit Room</h3>
                        <p class="text-slide__hashtag">#Recemtech</p>
                        <p class="text-slide__quote">"Hustle for that muscle."<br />-Unknown</p>
                        <a href="#">Classes Offered</a>
                    </div>
                </div>
            </section>

            <section class="rec-home__departments">
                <div class="rec-department">
                    <h3>OPC</h3>
                    <a href="#">
                        <div class="rec-department__plus">
                          <p>Close</p>
                        </div>
                    </a>
                    <div class="rec-department__details">
                      <ul>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/index.php">Leadership Development</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/rentals.php">Equipment Rentals</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/specialevents/verticalplains.php">Vertical Plains 2017</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/trips.php">Spring 2017 Trips</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/activities.php">Weekly Activities</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/climbing.php">Climbing Wall</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/bikeshop.php">Bike Shop</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/biketech.php">Bike Tech</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/faq.php">F.A.Q's</a></li>
                      </ul>
                    </div>
                </div>
                <div class="rec-department">
                    <h3>Intramurals</h3>
                    <a href="#">
                        <div class="rec-department__plus">
                            <p>Close</p>
                        </div>
                    </a>
                    <div class="rec-department__details">
                      <ul>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/index.php">Leadership Development</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/rentals.php">Equipment Rentals</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/specialevents/verticalplains.php">Vertical Plains 2017</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/trips.php">Spring 2017 Trips</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/activities.php">Weekly Activities</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/climbing.php">Climbing Wall</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/bikeshop.php">Bike Shop</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/biketech.php">Bike Tech</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/faq.php">F.A.Q's</a></li>
                      </ul>
                    </div>
                </div>
                <div class="rec-department">
                    <h3>Aquatics</h3>
                    <a href="#">
                        <div class="rec-department__plus">
                            <p>Close</p>
                        </div>
                    </a>
                    <div class="rec-department__details">
                      <ul>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/index.php">Leadership Development</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/rentals.php">Equipment Rentals</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/specialevents/verticalplains.php">Vertical Plains 2017</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/trips.php">Spring 2017 Trips</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/activities.php">Weekly Activities</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/climbing.php">Climbing Wall</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/bikeshop.php">Bike Shop</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/biketech.php">Bike Tech</a></li>
                  	    <li><a href="http://www.depts.ttu.edu/recsports/opc/faq.php">F.A.Q's</a></li>
                      </ul>
                    </div>
                </div>
            </section>
        <!-- CONTENT END -->




        <?php include 'includes/ttu-body-bottom.php'; ?>
    </body>
</html>
