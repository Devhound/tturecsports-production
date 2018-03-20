<!DOCTYPE html>
<html>
    <head>
        <?php include '../includes/ttu-head.html'; ?>
        <title>Markdown test | Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include '../includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <section class="rec-header">
            <div class="rec-header__background">
              <div class="top-left-triangle"></div>
            </div>
            <h1>Markdown Test</h1>
            <div class="rec-header__image">
              <div class="top-left-triangle">
                <div class="triangle-image" style="background-image: url('/images/ttu-aerial-1.jpg');"></div>
              </div>
            </div>
        </section>
        <section class="rec-sidebar">

        </section>

        <section class="rec-body" id="content">
            




        </section>
        <!-- CONTENT END -->

        


<script async src="https://unpkg.com/contentful@5.0.1/dist/contentful.browser.min.js"></script>
<script async src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js"></script>
        <?php include '../includes/ttu-body-bottom.php'; ?>
<script async src="/js/jquery.flexslider-min.js"></script>
        <script>
            $(window).load(function() {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
            });
</script>
<script>


</script>
    </body>
</html>