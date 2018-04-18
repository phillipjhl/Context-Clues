 $(document).ready(function () {
    //variable array assignments
    var friends = ['Obi-Wan', 'Anakin', 'Padme', 'R2-D2', 'Jedi Younglings'];
    var locations = ['Jedi Academy', 'Throne Room', 'place where it is hot', 'place where it is cold', 'Gardens back at home on Naboo',
     'Senate', 'place where that murder happended', 'High Ground', 'droid attack on the wookies', 'most wretched hive of scum and villiany'];
    var weapons = ['dank prequel-meme', 'candlestick', 'deathstick', 'lightsaber', 'rock', 'sword lvl 100', 'sharp stick', 'dull smile',
     'uncivilized weaponry', 'stern backhand', 'gun', 'blaster-rifle', 'spin because that is a cool trick', 'evil flippy twirl', 'floating pear',
      'jedi mind trick', 'weapon you would not expect', 'death star', 'mindless scream', 'Hello there'];
    
    //loop to create elements and click events
    for (var i=0; i<100; i++) {
        //create each accusation as a different <h3>
        var $Accusation = $("<h3 class='col col-sm-3'></h3>").text("Accusation " + (i+1));
        $("div.container").append($Accusation);
        //getting valid indexes
        var friendName = friends[(5+i)%5];
        var weaponName = weapons[(20+i)%20];
        var locationName = locations[(10+i)%10];
        //click event that will alert using the context of display()
        $($Accusation).click(display(i, friendName, locationName, weaponName));
        
        //function that returns a function that alerts the accusation of the current loop iteration
        function display(i, friendName, locationName, weaponName) {
            return function () {
                alert("Accusation " + (i+1) + ": I accuse " + friendName + ", with the " + weaponName + " in the " + locationName + "!");
            }
        }
    }
 });