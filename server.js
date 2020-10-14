//var SHEET_URL = 'https://docs.google.com/spreadsheets/d/1H5Qu0ac1J0ORFKeqniEHESGD9tMQvfw9ugBXhtIkOLw/edit#gid=1085853738';

/**
 * Loads main web app page.
 * Learm more about web apps:
 * https://developers.google.com/apps-script/guides/web
 *
 * @param {Object} e - HTTP GET event.
 */
function doGet(e) {
//  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('Page');
}

/**
 * Writes phone number into spreadsheet .
 *
 * @param {number} phoneNumber - number submitted from web app.
 */
//function userClicked(phoneNumber){
//  var spreadsheet = SpreadsheetApp.openByUrl(SHEET_URL);
//  var sheet = spreadsheet.getSheets()[0];
//  
//  sheet.appendRow([new Date(), phoneNumber]);
//}


function saveFile(e) {
  var blob = Utilities.newBlob(e.bytes, e.mimeType, e.filename);
  var dir = DriveApp.getFoldersByName("share001").next();  
  var file = dir.createFile(blob);
  return "Done.";
}