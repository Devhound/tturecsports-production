<!DOCTYPE html>
<html>
    <head>
        <?php include '../includes/ttu-head.html'; ?>
        <title>Test | Rec Center | TTU</title>
        <meta name="Description" content="">
    </head>
    <body>
        <?php include '../includes/ttu-body-top.php'; ?>




        <!-- CONTENT START -->
        <section class="rec-header">
            <div class="rec-header__background">
              <div class="top-left-triangle"></div>
            </div>
            <h1>Test</h1>
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




  <label for="member">I am a</label>
  <select name="memberType" id="memberType">
    <option>Select option</option>
    <option value="student">Student</option>
    <option value="faculty">Faculty/Staff</option>
    <option value="SASU">SASU</option>
    <option value="other">other</option>
  </select>


  <label for="membershipFor">I want a membership for</label>
  <select name="membershipFor" id="membershipFor">
    <option>Select option</option>
    <option value="myself">Myself</option>
    <option value="child">My Child</option>
    <option value="spouse">My Spouse</option>
    <option value="adjunct">Adjunct</option>
  </select>

  <div id="childTypeContainer" style="display:none">
  <label for="childType">How old is your child?</label>
  <select name="childType" id="childType">
    <option>Select option</option>
    <option value="1">Age 0-3</option>
    <option value="2">Age 4-16</option>
    <option value="3">Age 17-24</option>
    <option value="4">Age 25+</option>
  </select>
  </div>
                                                                      
  <div id="studentType">
    <label for="membership">Select membership term</label>
    <select name="membership-length" id="membership-length">
    <option>Select option</option>
    <option value="summer">Summer</option>
    <option value="semester">Semester</option>
    <option value="year">Year</option>
  </select>
  </div>

  <div id="studentPrice">
    <h1>Membership fee =<span id="cost">$0</span></h1>
  </div>





</section>
</section>
<!-- CONTENT END -->
<?php include '../includes/ttu-body-bottom.php'; ?>

<script>

var estimator = document.getElementById("cost");
var estimateValue = 0;
var childValue = 0;
var childType = 0;

$('#memberType').on('change',function(){
  
  if( $(this).val()==="faculty"){
    $('#membershipFor').prop('selectedIndex',0);
    $('#membershipFor').on('change',function(){
      if ($(this).val()=="child"){
        $("#childTypeContainer").show()
      }
      else {
        $("#childTypeContainer").hide()
        $('#childType').prop('selectedIndex',0);
      }
    });
  }
  else{
    $('#membershipFor').prop('selectedIndex',0);
  }
  
  if( $(this).val()==="student"){
    estimator.textContent = "$0";
    $('#membership-length').prop('selectedIndex',0);
    $('#membership-length').on('change',function(){
      //reset esitmator content
      if( $(this).val()==="summer"){
        estimator.textContent = "$1";
      }
      else if( $(this).val()==="semester"){
        estimator.textContent = "$2";
      }
      else if( $(this).val()==="year"){
        estimator.textContent = "$3";
      }
    })
  }
  else if( $(this).val()==="faculty" ) {
    estimator.textContent = "$0";
    $('#membership-length').prop('selectedIndex',0);
    $('#membershipFor').on('change',function(){
      estimateValue = 0;
      estimator.innerHTML = "______"
      $('#membership-length').prop('selectedIndex',0);
      if( $(this).val()==="child" ) {
        estimateValue = 3
      }

      else if ( $(this).val()==="spouse") {
        estimateValue = 2
      }

      else if ( $(this).val()==="myself") {
        estimateValue = 1
      }
      
    })
    $('#membership-length').on('change',function(){
      if( $(this).val()==="summer" && estimateValue === 1){
        estimator.innerHTML = "Myself Summer"
      }
      else if ( $(this).val()==="summer" && estimateValue === 2 ) {
        estimator.innerHTML = "Spouse Summer"
      }
      else if( $(this).val()==="semester"){
        estimator.textContent = "$2.2";
      }
      else if( $(this).val()==="year"){
        estimator.textContent = "$3.3";
      }
    })
  }
  else if( $(this).val()==="SASU"){
    estimator.textContent = "$0";
    $('#membership-length').prop('selectedIndex',0);
    $('#membership-length').on('change',function(){
      if( $(this).val()==="summer"){
        estimator.textContent = "$1.11";
      }
      else if( $(this).val()==="semester"){
        estimator.textContent = "$2.22";
      }
      else if( $(this).val()==="year"){
        estimator.textContent = "$3.33";
      }
    })
  }
});

$('#membershipFor').on('change',function(){
  if( $(this).val()==="other"){
    $("#otherType").show()
  }
  else{
    $("#otherType").hide()
  }
});
</script>



</body>
</html>
