<!DOCTYPE html>
<html>
    <head>
        <?php include '../includes/ttu-head.html'; ?>
        <title>About | Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include '../includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <section class="rec-header rec-header--large">
            <div class="rec-header__background">
              <div class="top-left-triangle"></div>
            </div>
            <h1>West Rec Turf Fields</h1>
            <div class="rec-header__image">
              <div class="top-left-triangle">
                <div class="triangle-image" style="background-image: url('../images/flag-football2.jpg');"></div>
              </div>
            </div>
        </section>
        <section class="rec-about__header">
          <h2>/// About</h2>
          <p>
            Turf Complex is 278,000 square feet and opened February 20th, 2015. The complex is lined with four flag football fields, two full size soccer fields, one Men's Lacrosse field, and one Women's Lacrosse field with plenty of room for open rec. On site, we offer equipment checkout which includes footballs, soccer balls, cones, and a variety of other sports equipment for users. The facility also houses a picnic area and has both men's and women's restrooms that are open during open hours.
          </p>
        </section>
        <section class="rec-about__info">
            <div id="rec-map"></div>
            <div class="rec-hours">
                <h2>/// Hours</h2>
                <h3>Spring 2017 - Open</h3>
                <h4>Sundays - Thrusdays / 6PM - 9PM | Fridays / 5PM - 9PM | Satrudays / Closed</h4>
                <p>
                    These times reflect Tuesday February 7th - Wednesday March 8th
                    Facility will be closed Wednesday March 9th - Sun. March 19th (Spring Break)
                    Turf will be closed for all university holidays and scheduled break times, including Labor Day weekend (Sun &amp; Mon).
                </p>
            </div>
        </section>
        <section class="rec-about__rules">
            <h2>/// Rules &amp; Regulations</h2>
            <p>The West Rec Complex is available for use by fee paying TTU students, faculty, and staff. TTU issued ID cards are required for use.Rec Sports reminds all participants that their participation is entirley voluntary and that due to inherent risk of accident or injury, Rec Sports assumes no responsibility for those injuries. Equipment may not be moved without permission of the Rec Sports staff. Fields may only be used when supervised by Rec Sports staff. If gates are locked, the complex is closed; unauthorized access may be considered trespassing.</p>
            <p><em>The following items are not allowed in the West Rec Complex:</em></p>
            <ul>
                <li>Pets</li>
                <li>Alcoholic Beverages</li>
                <li>Tobacco Products</li>
                <li>Glass Containers</li>
                <li>Metal Cleats</li>
            </ul>
            <p><em>In order to better protect the Turf, the following items are prohibited from the Turf playing area:</em></p>
            <ul>
                <li>Drinks (water is allowed)</li>
                <li>Food, including sunflower seeds and gum</li>
                <li>Bicycles, please use bike racks and do not lock to poles, fences, or trees</li>
                <li>Chairs of any kind</li>
            </ul>
            <p>Rec Sports staff have the authority to remove patrons who fail to abide by these rules. For more information on reservations, please contact <a href="tel:8067422945">806-742-2945</a> or visit <a href="http://www.recsports.ttu.edu">www.recsports.ttu.edu</a></p>
            <div class="rec-about-bottom-image"></div>
        </section>

        <script type="text/javascript">
            function initMap() {
                var latLng = {lat: 33.5827037, lng: -101.884669}

                var recMap = new google.maps.Map(document.getElementById('rec-map'), {
                  center          : latLng,
                  zoom            : 16,
                  disableDefaultUI: true,
                  scrollwheel     : false
                });

                var marker = new google.maps.Marker({
                  position : latLng,
                  map      : recMap,
                  animation: google.maps.Animation.DROP,
                  title    : 'Student Recreation Center (Robert H. Ewalt)',
                  icon     : '../images/double-t-marker.png'
                });
            }
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLJCBhcZGPsbDph1RxvuHPhUyfs2tE6uM&callback=initMap"
    async defer></script>
        <!-- CONTENT END -->




        <?php include '../includes/ttu-body-bottom.php'; ?>
    </body>
</html>
