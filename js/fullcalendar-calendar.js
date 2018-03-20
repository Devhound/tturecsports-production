<script type='text/javascript'>
$(document).ready(function() {

      $("#calendar").fullCalendar({




  header: {
          left: '',
          center: '',
          right: 'prev,next'
        },


        views: {
          listDay: { buttonText: 'Today' },
          listWeek: { buttonText: 'Week' }
        },

        defaultView: 'listDay',
  			navLinks: true, // can click day/week names to navigate views
  			editable: true,

        height: 670,
        width: 170,

        googleCalendarApiKey: 'AIzaSyAJ8F-W3G8QdVUijSeBiSNTai9bKDEcSKc',

       
            events: 'a8n57484qtiggrf5p9tr2rnveg@group.calendar.google.com',
        
      });

    });
  </script>