<!DOCTYPE html>
<html>
    <head>
        <?php include '../includes/ttu-head.html'; ?>
        <title>Hours | Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include '../includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <section class="rec-header">
            <div class="rec-header__background">
              <div class="top-left-triangle"></div>
            </div>
            <h1>Hours</h1>
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
                .rec-body #calendar td {
                    font-family: 'Neue Helvetica W01', Helvetica, Arial, sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                #calendar {
                    max-width: 600px;
                }

                #calendar .fc-list-table {
                    margin-top: 0;
                }

                #calendar .fc-left h2 {
                    font-size: 1.5rem;
                }

                #calendar tr {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                #calendar .fc-list-table {
                    margin-top: 0;
                    }

                #calendar .fc-left h2:before {
                    content: none;
                }

                #calendar .fc-left h2{
                    text-align: left;
                    text-indent: unset;
                }
                
                @media (max-width:480px){
                    #calendar .fc-left h2 {
                    font-size: 18px;
                    text-align: left;
                    }
                }
            </style>
              
                <div id="calendar"></div>
            

              

                 


           


            </section>



        </section>
        <!-- CONTENT END -->

        



        <?php include '../includes/ttu-body-bottom.php'; ?>
        

        <script type='text/javascript'>
$(document).ready(function() {

      $("#calendar").fullCalendar({




  header: {
          left: 'listDay,listWeek',
          center: 'title',
          right: 'prev,next'
        },


        views: {
          listDay: { buttonText: 'Today' },
          listWeek: { buttonText: 'Week' },
          month: {buttonText: 'Month'}
        },

        defaultView: 'listDay',
  			navLinks: true, // can click day/week names to navigate views
  			editable: true,

        height: 1000,
        width: 170,

        googleCalendarApiKey: 'AIzaSyAJ8F-W3G8QdVUijSeBiSNTai9bKDEcSKc',

       
            events: 'a8n57484qtiggrf5p9tr2rnveg@group.calendar.google.com',
        
      });

    });
  </script>

  

    </body>
</html>
