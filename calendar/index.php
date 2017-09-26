<!DOCTYPE html>
<html>
    <head>
        <?php include '../includes/ttu-head.html'; ?>
        <title>Calendar | Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include '../includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <?php
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        // Requiring Google php client
        require_once '../includes/vendor/autoload.php';
        require_once '../includes/Google/Model.php';
        require_once '../includes/Google/Client.php';
        require_once '../includes/Google/Collection.php';
        require_once '../includes/Google/Exception.php';
        require_once '../includes/Google/Service.php';
        require_once '../includes/Google/AuthHandler/AuthHandlerFactory.php';
        require_once '../includes/Google/AuthHandler/Guzzle5AuthHandler.php';
        require_once '../includes/Google/AuthHandler/Guzzle6AuthHandler.php';
        require_once '../includes/Google/Http/Batch.php';
        require_once '../includes/Google/Http/MediaFileUpload.php';
        require_once '../includes/Google/Http/REST.php';
        require_once '../includes/Google/Service/Calendar.php';
        require_once '../includes/Google/Service/Logging.php';
        require_once '../includes/Google/Service/Resource.php';
        require_once '../includes/Google/Task/Exception.php';
        require_once '../includes/Google/Task/Retryable.php';
        require_once '../includes/Google/Task/Runner.php';
        require_once '../includes/Google/Utils/UriTemplate.php';
        $calendarFiles1 = glob('../includes/Google/Service/Calendar/*.php');
        foreach ($calendarFiles1 as $file) {
            require($file);
        }
        $calendarFiles2 = glob('../includes/Google/Service/Calendar/Resource/*.php');
        foreach ($calendarFiles2 as $file) {
            require($file);
        }
        // Getting application credentials
        putenv('GOOGLE_APPLICATION_CREDENTIALS=../keys/TTU-Rec-Calendar-91afd645eae9.json');

        $client = new Google_Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Google_Service_Calendar::CALENDAR_READONLY);
        $client->setAccessType('offline');
        // $client->setClientId('919261439824-djcfsgf2s87pltk2045fdd8s9krmhh9d.apps.googleusercontent.com');

        $service = new Google_Service_Calendar($client);

        // Save token in session
        // if ($client->getAccessToken()) {
        //   $_SESSION['token'] = $client->getAccessToken();
        // }

        // Print the next 10 events on the user's calendar.
        $calendarId = 'primary';
        $optParams = array(
          'maxResults' => 10,
          'orderBy' => 'startTime',
          'singleEvents' => TRUE,
          'timeMin' => date('c'),
        );
        $results = $service->events->listEvents($calendarId, $optParams);

        if (count($results->getItems()) == 0) {
          print "No upcoming events found.\n";
        } else {
          print "Upcoming events:\n";
          foreach ($results->getItems() as $event) {
            $start = $event->start->dateTime;
            if (empty($start)) {
              $start = $event->start->date;
            }
            printf("%s (%s)\n", $event->getSummary(), $start);
          }
        }

        echo "<h2>Done!</h2>";

        ?>
        <!-- CONTENT END -->




        <?php include '../includes/ttu-body-bottom.php'; ?>
    </body>
</html>
