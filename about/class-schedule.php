<!DOCTYPE html>
<html>
    <head>
        <?php include '../includes/ttu-head.html'; ?>
        <title>Class Hours | Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include '../includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <section class="rec-header">
            <div class="rec-header__background">
              <div class="top-left-triangle"></div>
            </div>
            <h1>Class Hours</h1>
            <div class="rec-header__image">
              <div class="top-left-triangle">
                <div class="triangle-image" style="background-image: url('/images/ttu-aerial-1.jpg');"></div>
              </div>
            </div>
        </section>
        <section class="rec-sidebar">

        </section>

        <section class="rec-body">
            <section>

            <style>
                .rec-body #fitwell-calendar td {
                    font-family: 'Neue Helvetica W01', Helvetica, Arial, sans-serif;
                    font-weight: 700;
                    text-transform: capitilized;
                }

                #fitwell-calendar {
                    max-width: 600px;
                    height: 1700px;
                }

                tr.fc-list-item.fc-has-url {
                    border-bottom: solid 2px #efefef;
                }

                #fitwell-calendar td {
                    text-align: center;
                    vertical-align: middle;
                }

                #fitwell-calendar .fc-list-table {
                    margin-top: 0;
                }

                #fitwell-calendar .fc-left h2 {
                    font-size: 1.5rem;
                }

                #fitwell-calendar .fc-listDay-button {
                    display: none;
                }

                #fitwell-calendar tr {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                #fitwell-calendar .fc-list-table {
                    margin-top: 0;
                    }

                #calendar .fc-left h2:before {
                    content: none;
                }

                #fitwell-calendar .fc-left h2{
                    text-align: left;
                    text-indent: unset;
                }
                
                @media (max-width:480px){
                    #fitwell-calendar .fc-center h2 {
                    font-size: 20px;
                    text-align: left;
                    }
                }

                @media (max-width:480px){
                    #fitwell-calendar td {
                    font-size: 12px;
                    
                    }
                }

                .rec-body #paid-fitwell-calendar td {
                    font-family: 'Neue Helvetica W01', Helvetica, Arial, sans-serif;
                    font-weight: 700;
                    text-transform: capitilized;
                }

                #paid-fitwell-calendar {
                    max-width: 600px;
                    height: 1700px;
                }

                #paid-fitwell-calendar td {
                    text-align: center;
                    vertical-align: middle;
                }

                #paid-fitwell-calendar .fc-list-table {
                    margin-top: 0;
                }

                #paid-fitwell-calendar .fc-left h2 {
                    font-size: 1.5rem;
                }

                #paid-fitwell-calendar .fc-listDay-button {
                    display: none;
                }

                #paid-fitwell-calendar tr {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                #paid-fitwell-calendar .fc-list-table {
                    margin-top: 0;
                    }

                #paid-fitwell-calendar .fc-left h2{
                    text-align: left;
                    text-indent: unset;
                }
                
                @media (max-width:480px){
                    #paid-fitwell-calendar .fc-center h2 {
                    font-size: 20px;
                    text-align: left;
                    }
                }

                @media (max-width:480px){
                    #paid-fitwell-calendar td {
                    font-size: 12px;
                    
                    }
                }
            </style>

                <h3>Free Fitness Classes</h3>
                <div id="fitwell-calendar"></div>
                <h3>Paid Fitness Classes</h3>
                <div id="paid-fitwell-calendar"></div>
                

            

              

                 


           


            </section>



        </section>
        <!-- CONTENT END -->

        



        <?php include '../includes/ttu-body-bottom.php'; ?>
        

        <script>
  $(document).ready(function() {

      $('#fitwell-calendar').fullCalendar({




  header: {
          left: 'listDay',
          center: 'title',
          right: 'prev,next'
        },


        views: {
          listDay: { buttonText: '' },
          listWeek: { buttonText: '' }
        },

        defaultView: 'listDay',
  			navLinks: true, // can click day/week names to navigate views
  			editable: true,

        height: 1650,
        width: 600,

        googleCalendarApiKey: 'AIzaSyAJ8F-W3G8QdVUijSeBiSNTai9bKDEcSKc',

        // US Holidays
        events: 'ug93smefivhirore8ej64efv2s@group.calendar.google.com',

        eventClick: function(event) {
          window.open(event.url, 'gcalevent', 'width=400,height=600');
          return false;
        },

        loading: function(bool) {
          $('#loading').toggle(bool);
        },

        eventRender: function(event, element, view) { 
            	if (view.name === "listDay"){
            		element.find('.fc-list-item-marker').append(
			            "<br/>" + event.location,
            			"<br/>" + event.description);
            			}
        	}

      });

    });</script>

<script>
  $(document).ready(function() {

      $('#paid-fitwell-calendar').fullCalendar({




  header: {
          left: 'listDay',
          center: 'title',
          right: 'prev,next'
        },


        views: {
          listDay: { buttonText: 'Today' },
          listWeek: { buttonText: 'Week' }
        },

        defaultView: 'listDay',
  			navLinks: true, // can click day/week names to navigate views
  			editable: true,

        height: 1100,
        width: 320,

        googleCalendarApiKey: 'AIzaSyAJ8F-W3G8QdVUijSeBiSNTai9bKDEcSKc',

        // US Holidays
        events: '5u3sni9034pefhqk30rj6e5pr4@group.calendar.google.com',

        eventClick: function(event) {
          
          return true;
          
        },

        loading: function(bool) {
          $('#loading').toggle(bool);
        },

        eventRender: function(event, element, view) { 
            	if (view.name === "listDay"){
            		element.find('.fc-list-item-marker').append(
			            "<br/>" + event.location,
            			"<br/>" + event.description);
            			}
        	}

      });

    });</script>

  

    </body>
</html>