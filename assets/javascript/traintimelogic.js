/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new trains - then update the html + update the database
// 3. Create a way to retrieve trains from the train database.
// 4. Create a way to calculate the next train. Using first train, train frequency and current time.
//    Then use moment.js formatting to set difference in minutes.
// 5. Calculate next train

// 1. Initialize Firebase
  var config = {
    apiKey: "AIzaSyADDa4LHB6OwtmcuMl4LVeeuJLLm1k1iq4",
    authDomain: "traintime-32495.firebaseapp.com",
    databaseURL: "https://traintime-32495.firebaseio.com",
    projectId: "traintime-32495",
    storageBucket: "traintime-32495.appspot.com",
    messagingSenderId: "1075455037939"
  };
firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainFirstDeparture = moment($("#first-train-input").val().trim(), "HH:mm").format("LT");
  var trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTrain: trainFirstDeparture,
    frequency: trainFrequency
  };
  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;
  // var timeNow = now.getTime();

  // train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(firstTrain);
  console.log(frequency);
//  console.log(timeNow);


  // Prettify the first train
  // var firstTrainPretty = moment.unix(firstTrain).format("HH:mm");

  // Calculate the next arrival using hardcore math
  // To calculate the next arrival
  // take first train, add frequency until after now
// nextArrival = firstTrain + frequency < timeNow
// convert frequency to Unix time

//   unixFrequency = frequency*60*1000
  nextArrival = firstTrain
  var minutesAway = 5
//    while (nextArrival < timeNow) {
//        nextArrival = nextArrival + unixFrequency;
//    }

//    console.log(nextArrival);


  // Calculate minutes away

  // var minutesAway = nextArrival - timeNow;

  // console.log(minutesAway);

  // Add each train's data into the table
 $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>"); });

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case
