// Google Apps Script for handling branch registration forms
// Deploy this script in Google Apps Script and get the web app URL

function doPost(e) {
  try {
    console.log('Received request:', e);
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Get the branch ID to determine which sheet to use
    const branchId = data.branchId;
    const branchName = data.branch;
    
    console.log('Branch ID:', branchId, 'Branch Name:', branchName);
    
    // Define sheet IDs for each branch (replace with your actual Google Sheet IDs)
    const branchSheets = {
      'nittambuwa': '19p76K3-weH0PhUfITnZIeNc00R-l7HynW8C2lYNQT7U',
      'matara': '1GTU-fSpiJJHwFTcaaJ4esHhj0lE77Tt5cu2WrqBeJag',
      'galle': '1y6lNHstHDBbMLw8hK2hQtPt58PwiivHz1C5PT7rZk1Y',
      'kandy': '19morJmrBQY-2uAcmiRn0WT_Xc3oOOh102TFhwUERqAU',
      'polonnaruwa': '1hO78C-oCq2jFmEs9wiUp85QziLrnwKdF1ASqskN3RXQ',
      'nugegoda': '1yLJ2Fd0pUfgtjc6y4HarChlGNAter7Vj_DplQnfbHCA',
      'kalutara': '1xsq4CRn1Ay7r4SD7hlUrRSGZyx58qbY9sCDIX_QvhSM',
      'kiribathgoda': '1ug-WaaFOrV7feS6NarujkTlXFZr6HE15umG4kvUAWGc',
      'bandarawela': '1Tqnzc_UdQqBKG28mKfiSNfdTosqiUzMsQYnzW2EMizI',
      'negombo': '1j1KTZEijkiKvG7ludPGVx0Vc60GCIRPDtUAow1N1dME',
      'kurunegala': '1q58ZJLSAAlPGUwc0Ob1XNf5pGOpwec_us5pxOnCe1xU',
      'ratnapura': '1BJwwfda3bpnSfbyjRD-GKNaJlqMzOO6zLGj39tbmXM4',
      'gampaha': '1VyQM17ZcoPv5oGvHtIf-6RcH3iLGKZnjuuHrXysdsTA',
      'anuradhapura': '1ksKjTpixqqiOo5dVd-cmsEcauBrRm9m_FecUaKKMU-Q'
    };
    
    // Get the sheet ID for the branch, or use a default sheet
    const sheetId = branchSheets[branchId] || '19p76K3-weH0PhUfITnZIeNc00R-l7HynW8C2lYNQT7U'; // Default to Nittambuwa
    
    console.log('Using sheet ID:', sheetId);
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(sheetId);
    console.log('Opened spreadsheet:', spreadsheet.getName());
    let sheet = spreadsheet.getSheetByName('Registrations');
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Registrations');
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Phone',
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
      data.phone || '',
      data.course || '',
      data.message || '',
      branchName || '',
      branchId || '',
      data.source || 'branch-registration'
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    console.log('Data added to sheet:', rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 10);
    
    // Send email notification to branch manager (optional)
    sendEmailNotification(branchName, data);
    
    console.log('Registration saved successfully');
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
      Phone: ${data.phone}
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
    phone: '0712345678',
    course: 'Weekday Diploma',
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
  
  console.log('Testing with data:', testData);
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
  return result;
}

// Simple test to check if sheets are accessible
function testSheetsAccess() {
  try {
    const branchSheets = {
      'nittambuwa': '19p76K3-weH0PhUfITnZIeNc00R-l7HynW8C2lYNQT7U',
      'matara': '1GTU-fSpiJJHwFTcaaJ4esHhj0lE77Tt5cu2WrqBeJag'
    };
    
    for (const [branchId, sheetId] of Object.entries(branchSheets)) {
      try {
        const spreadsheet = SpreadsheetApp.openById(sheetId);
        console.log(`✅ ${branchId}: ${spreadsheet.getName()}`);
      } catch (error) {
        console.log(`❌ ${branchId}: ${error.toString()}`);
      }
    }
  } catch (error) {
    console.log('Error testing sheets:', error);
  }
}
