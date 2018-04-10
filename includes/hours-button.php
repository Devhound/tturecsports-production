<a href="#" class="rec-hours-button">Rec Hours</a>
<section class="rec-hours">
<button class="rec-hours__close"></button>
<div class="rec-hours__week">
    <!-- <p>Hours</p>
    <h3>
        <?php echo date("n/j"); ?>
    </h3> -->
</div>
<div class="rec-hours__grid">
<div class="rec-hours__department">
    <h4>Hours</h4>

    <div id="calendar"></div>
</div>
</div>
</section>


<script type="text/javascript" src="/recsports/includes/js/fullcalendar.min.js"></script>
<script type="text/javascript" src="/recsports/includes/js/gcal.js"></script>
<script type="text/javascript">// <![CDATA[
$(document).ready(function() {

      $("#calendar").fullCalendar({




  header: {
          left: 'title',
          center: 'listDay,listWeek',
          right: 'prev,next'
        },


        views: {
          listDay: { buttonText: 'Today' },
          listWeek: { buttonText: 'Week' }
        },

        defaultView: 'listDay',
  			navLinks: true,
  			editable: true,

        height: 1200,
        width: 170,

        googleCalendarApiKey: 'AIzaSyAJ8F-W3G8QdVUijSeBiSNTai9bKDEcSKc',

       
            events: 'a8n57484qtiggrf5p9tr2rnveg@group.calendar.google.com',
        
      });

    });
// ]]></script>


