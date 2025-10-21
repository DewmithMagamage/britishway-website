# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheets for Each Branch

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet for each branch with the following naming convention:
   - `British Way - Nittambuwa Registrations`
   - `British Way - Matara Registrations`
   - `British Way - Galle Registrations`
   - etc.

3. In each spreadsheet, create a sheet named "Registrations" with these columns:
   - Timestamp
   - Name
   - Email
   - Phone
   - Age
   - Course Interest
   - Message
   - Branch
   - Branch ID
   - Source

## Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Replace the default code with the content from `google-apps-script.js`
4. Update the sheet IDs in the `branchSheets` object with your actual Google Sheet IDs
5. Update the email addresses in the `branchEmails` object with actual branch manager emails

## Step 3: Deploy the Script

1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set execution to "Me"
4. Set access to "Anyone"
5. Click "Deploy"
6. Copy the web app URL

## Step 4: Update the Frontend

1. Open `src/components/RegistrationPopup.jsx`
2. Replace `YOUR_SCRIPT_ID` in the fetch URL with your actual Google Apps Script web app URL

## Step 5: Test the Integration

1. Deploy your React app
2. Visit a branch page
3. Click "REGISTER NOW"
4. Fill out the form and submit
5. Check the corresponding Google Sheet to verify the data was saved

## Branch Manager Access

Each branch manager will have access to their specific Google Sheet where they can:
- View all registrations for their branch
- Export data to Excel/CSV
- Set up email notifications for new registrations
- Track registration trends over time

## Security Notes

- The Google Apps Script is set to "Anyone" access for form submissions
- Consider adding basic validation or rate limiting if needed
- Branch managers should have edit access to their respective sheets
- Consider setting up automated backups of the registration data

## Troubleshooting

- If submissions fail, check the Google Apps Script logs
- Ensure the web app URL is correct and accessible
- Verify that the Google Sheets have the correct permissions
- Test with a simple form submission first
