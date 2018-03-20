<!DOCTYPE html>
<html>
    <head>
        <?php include '../includes/ttu-head.html'; ?>
        <title>OPC Trips | Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include '../includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <section class="rec-header">
            <div class="rec-header__background">
              <div class="top-left-triangle"></div>
            </div>
            <h1>O.P.C Trips</h1>
            <div class="rec-header__image">
              <div class="top-left-triangle">
                <div class="triangle-image" style="background-image: url('../images/people-walking-mountains.jpg');"></div>
              </div>
            </div>
        </section>
        <section class="rec-sidebar">

        </section>

        <section class="rec-body">
            <section>
              <h2>Sheetsu OPC Trips</h2>
            
            <style>
            
                    .l-main-pagecontent h4, .delta .card-product-hover-title {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    line-height: 2rem;
                    margin-top: 0;
                    }

                    .card-product-hover {
                    position: relative;
                    line-height: 1.2rem;
                    transition: all 0.35s ease;
                    margin: 1.5rem auto;
                    max-width: 350px;
                    width: 100%;
                    }

                    .card-product-hover-details {
                    -webkit-flex: 1 0 auto;
                        -ms-flex: 1 0 auto;
                            flex: 1 0 auto;
                    padding: 1rem;
                    }

                    .card-product-hover-details > :last-child {
                    margin-bottom: 0;
                    }

                    .card-product-hover-date {
                    margin: 3rem 0;
                    line-height: 3rem;
                    font-weight: 400;
                    font-size: 1.5rem;
                    color: #333;
                    }

                    .card-product-hover-deadline {
                        margin: 3rem 0;
                        line-height: 3rem;
                        font-weight: 400;
                        font-size: 1.5rem;
                        color: #333;
                    }

                    .card-product-hover-price {
                        margin: 3rem 0;
                        line-height: 3rem;
                        font-weight: 400;
                        font-size: 1.5rem;
                        color: #333;
                    }


                    
            </style>
            <?php
            echo '<div class="row" sheetsu="https://sheetsu.com/apis/v1.0/2bbdf2909047">';
        ?>


            <div class="large-12 column tilespacer">
                <div class="card card-product-hover placeholdcard">
                    <img src="{{Image}}" alt="image" />
                    <div class="card-product-hover-details">
                        <h4 class="card-product-hover-title">{{Trip}}</h4>
                        <span class="card-product-hover-date"><b>Date:</b> {{Date}}<br></span>
                        <span class="card-product-hover-deadline"><b>Deadline</b>: {{Deadline}}<br></span>
                        <span class="card-product-hover-price"><b>Cost</b>: {{Cost}}<br></span>
                        <span class="card-product-hover-price"><b>Spots Open</b>: {{Spots Open}}</span>
                        
                    </div>
                </div>
            </div>

    
        </div>

        

            </section>



        </section>
        <!-- CONTENT END -->




        <?php include '../includes/ttu-body-bottom.php'; ?>
        <script src="https://load.sheetsu.com"></script>
    </body>
</html>