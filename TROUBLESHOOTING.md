# Registration Form Troubleshooting Guide

## Issue: Data not saving to Google Sheets

### Step 1: Test the Google Apps Script

1. **Open Google Apps Script** (https://script.google.com)
2. **Open your project** with the registration script
3. **Run the test functions**:
   - Click on `testSheetsAccess` function
   - Click "Run" button
   - Check the logs to see if sheets are accessible
   - Click on `testScript` function
   - Click "Run" button
   - Check if test data is added to the sheet

### Step 2: Check Google Sheets Permissions

1. **Open each Google Sheet** (using the IDs from the script)
2. **Check sharing settings**:
   - Right-click on the sheet → Share
   - Make sure the Google Apps Script account has "Editor" access
   - The script runs under your Google account, so you need access

### Step 3: Verify Script Deployment

1. **In Google Apps Script**:
   - Click "Deploy" → "Manage deployments"
   - Make sure the deployment is active
   - Copy the web app URL
   - Test the URL in browser (should show some response)

### Step 4: Test with the HTML Form

1. **Open `test-registration.html`** in your browser
2. **Fill out the form** with test data
3. **Submit the form**
4. **Check browser console** for any errors
5. **Check the Google Sheet** to see if data appears

### Step 5: Check Browser Console

1. **Open your website**
2. **Open browser developer tools** (F12)
3. **Go to Console tab**
4. **Try submitting the registration form**
5. **Look for any error messages**

### Common Issues and Solutions

#### Issue 1: "Script not found" or 404 error
**Solution**: 
- Redeploy the Google Apps Script
- Make sure deployment is set to "Anyone" access
- Copy the new web app URL

#### Issue 2: "Permission denied" error
**Solution**:
- Check Google Sheets sharing permissions
- Make sure the script account has Editor access to all sheets
- Try running the script manually first

#### Issue 3: Data not appearing in sheets
**Solution**:
- Check if the "Registrations" sheet exists in each Google Sheet
- Run `testScript()` function to verify it works
- Check the script logs for errors

#### Issue 4: CORS errors in browser
**Solution**:
- The script uses `mode: 'no-cors'` which is correct
- This is normal and expected behavior

### Debugging Steps

1. **Check Google Apps Script logs**:
   - In Google Apps Script, go to "Executions" tab
   - Look for recent executions
   - Check for any error messages

2. **Verify sheet IDs**:
   - Open each Google Sheet
   - Copy the ID from the URL
   - Compare with the IDs in the script

3. **Test individual components**:
   - Test if you can manually add data to sheets
   - Test if the script can access the sheets
   - Test if the web app URL responds

### Quick Fix Checklist

- [ ] Google Apps Script is deployed and active
- [ ] All Google Sheets are shared with the script account
- [ ] Sheet IDs in the script are correct
- [ ] Web app URL is correct in the React component
- [ ] No JavaScript errors in browser console
- [ ] Test functions run successfully in Google Apps Script

### If Still Not Working

1. **Create a simple test sheet** with just one branch
2. **Use a simple test script** that just logs the received data
3. **Gradually add complexity** until you find the issue
4. **Check Google Apps Script quotas** - you might have hit daily limits

### Contact Support

If none of these steps work, please provide:
1. Screenshots of Google Apps Script logs
2. Browser console error messages
3. Which specific branch you're testing
4. Whether the test functions work in Google Apps Script
