"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Diego Sandoval
   Date:   3/1/19
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
// DVARN: Sets the donationTotal
var donationTotal = 0;
// DDOES: For each part of the donors array, it runs the callback function calcSum
donors.forEach(calcSum)
// DVARS: code for the summary table
var summaryTable = "<table>"
summaryTable += `<tr><th>Donors</th><td>${donors.length}</td></tr>`
summaryTable += `<tr><th>Total Donations</th><td>$${donationTotal.toLocaleString()}</td></tr>`
summaryTable += "</table>"
// DDOES: Applies the summaryTable string to the the Element with the ID of donationSummary in the HTML document 
document.getElementById('donationSummary').innerHTML = summaryTable;
// DVARA: Creates an array by filtering through the donors array using the callback function findMajorDonors
var majorDonors = donors.filter(findMajorDonors);
// DDOES: This then sorts the majorDonors array using the callback function donorSortDescending
majorDonors.sort(donorSortDescending);
// DVARS: Creates the variable string donorTable and give it HTML
var donorTable = "<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-mail</th></tr>";
// DDOES: Writes the rows for each of the donors in the majorDonors array
majorDonors.forEach(writeDonorRow);
// DVARS: Adds to the variable string the ending table tag
donorTable += "</table>";
// DDOES: Applies the donorTable String to the HTML document in the Element with an ID of donorTable
document.getElementById('donorTable').innerHTML = donorTable;


/*
 * 
 *    ____      _ _ ____             _      _____                 _   _                 
 *   / ___|__ _| | | __ )  __ _  ___| | __ |  ___|   _ _ __   ___| |_(_) ___  _ __  ___ 
 *  | |   / _` | | |  _ \ / _` |/ __| |/ / | |_ | | | | '_ \ / __| __| |/ _ \| '_ \/ __|
 *  | |__| (_| | | | |_) | (_| | (__|   <  |  _|| |_| | | | | (__| |_| | (_) | | | \__ \
 *   \____\__,_|_|_|____/ \__,_|\___|_|\_\ |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
 *                                                                                      
 * 
 */


function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}