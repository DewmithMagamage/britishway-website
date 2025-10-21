// Google Apps Script for handling branch registration forms
// Deploy this script in Google Apps Script and get the web app URL

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the branch ID to determine which sheet to use
    const branchId = data.branchId;
    const branchName = data.branch;
    
    // Define sheet IDs for each branch (replace with your actual Google Sheet IDs)
    const branchSheets = {
      'nittambuwa': 'YOUR_NITTAMBUWA_SHEET_ID',
      'matara': 'YOUR_MATARA_SHEET_ID',
      'galle': 'YOUR_GALLE_SHEET_ID',
      'kandy': 'YOUR_KANDY_SHEET_ID',
      'polonnaruwa': 'YOUR_POLONNARUWA_SHEET_ID',
      'nugegoda': 'YOUR_NUGEGODA_SHEET_ID',
      'kalutara': 'YOUR_KALUTARA_SHEET_ID',
      'kiribathgoda': 'YOUR_KIRIBATHGODA_SHEET_ID',
      'bandarawela': 'YOUR_BANDARAWELA_SHEET_ID',
      'negombo': 'YOUR_NEGOMBO_SHEET_ID',
      'kurunegala': 'YOUR_KURUNEGALA_SHEET_ID',
      'ratnapura': 'YOUR_RATNAPURA_SHEET_ID',
      'gampaha': 'YOUR_GAMPAHA_SHEET_ID',
      'anuradhapura': 'YOUR_ANURADHAPURA_SHEET_ID'
    };
    
    // Get the sheet ID for the branch, or use a default sheet
    const sheetId = branchSheets[branchId] || 'YOUR_DEFAULT_SHEET_ID';
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(sheetId);
    let sheet = spreadsheet.getSheetByName('Registrations');
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Registrations');
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Age',
        'Course Interest',
        'Message',
        'Branch',
        'Branch ID',
        'Source'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      sheet.getRange(1, 1, 1, headers.length)
        .setBackground('#4285f4')
        .setFontColor('white')
        .setFontWeight('bold');
    }
    
    // Prepare the data row
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.age || '',
      data.course || '',
      data.message || '',
      branchName || '',
      branchId || '',
      data.source || 'branch-registration'
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 10);
    
    // Send email notification to branch manager (optional)
    sendEmailNotification(branchName, data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Registration saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing registration:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(branchName, data) {
  try {
    // Get the email address for the branch manager
    const branchEmails = {
      'nittambuwa': 'nittambuwa@britishway.lk',
      'matara': 'matara@britishway.lk',
      'galle': 'galle@britishway.lk',
      'kandy': 'kandy@britishway.lk',
      'polonnaruwa': 'polonnaruwa@britishway.lk',
      'nugegoda': 'nugegoda@britishway.lk',
      'kalutara': 'kalutara@britishway.lk',
      'kiribathgoda': 'kiribathgoda@britishway.lk',
      'bandarawela': 'bandarawela@britishway.lk',
      'negombo': 'negombo@britishway.lk',
      'kurunegala': 'kurunegala@britishway.lk',
      'ratnapura': 'ratnapura@britishway.lk',
      'gampaha': 'gampaha@britishway.lk',
      'anuradhapura': 'anuradhapura@britishway.lk'
    };
    
    const managerEmail = branchEmails[data.branchId] || 'admin@britishway.lk';
    
    const subject = `New Registration - ${branchName}`;
    const body = `
      New student registration received:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Age: ${data.age}
      Course Interest: ${data.course}
      Message: ${data.message}
      Branch: ${branchName}
      Timestamp: ${data.timestamp}
      
      Please contact the student within 24 hours.
    `;
    
    MailApp.sendEmail(managerEmail, subject, body);
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Test function to verify the script works
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '0712345678',
    age: '25',
    course: 'General English',
    message: 'Test message',
    branch: 'Nittambuwa Branch',
    branchId: 'nittambuwa',
    timestamp: new Date().toISOString(),
    source: 'branch-registration'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log(result.getContent());
}
