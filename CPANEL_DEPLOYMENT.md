# cPanel Deployment Guide

This guide will help you deploy your React application to cPanel hosting.

## Prerequisites

1. **Node.js installed** on your local machine (for building the project)
2. **cPanel access** to your hosting account
3. **FTP/SFTP client** or **cPanel File Manager** access

## Step-by-Step Deployment Instructions

### Step 1: Build the React Application

On your local machine, run the build command to create a production-ready version:

```bash
npm install
npm run build
```

This will create a `build` folder containing all the optimized files for production.

### Step 2: Locate Your Website Directory in cPanel

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to your website's root directory:
   - **For main domain**: Usually `public_html/`
   - **For subdomain**: Usually `public_html/subdomain_name/`
   - **For addon domain**: Usually `public_html/addon_domain_name/`

### Step 3: Backup Existing Files (Important!)

Before uploading new files:
1. In File Manager, select all existing files in your website directory
2. Create a backup by compressing them (right-click → Compress)
3. Download the backup or keep it in a safe location

### Step 4: Upload Build Files

**Option A: Using cPanel File Manager**
1. In File Manager, navigate to your website directory
2. Delete all existing files (except `.htaccess` if you want to keep custom settings)
3. Upload all files from the `build` folder:
   - Select all files in the `build` folder on your local machine
   - Upload them to your website directory in cPanel
   - Make sure the `.htaccess` file is uploaded (it should be in the build folder)

**Option B: Using FTP/SFTP Client**
1. Connect to your server using FTP/SFTP credentials from cPanel
2. Navigate to your website directory
3. Delete existing files (backup first!)
4. Upload all contents from the `build` folder to the website directory

### Step 5: Verify File Structure

After uploading, your website directory should contain:
```
your-website-directory/
├── index.html
├── .htaccess
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── images/
└── (other assets)
```

### Step 6: Set File Permissions

In cPanel File Manager:
1. Select the `.htaccess` file
2. Right-click → Change Permissions
3. Set permissions to `644` (readable by web server)
4. Ensure `index.html` has permissions `644`

### Step 7: Test Your Website

1. Visit your website URL in a browser
2. Test all routes (navigation links) to ensure React Router is working
3. Check that images and assets are loading correctly
4. Test on mobile devices if possible

## Important Notes

### React Router Configuration

The `.htaccess` file has been configured to handle React Router routes. This ensures that:
- Direct URL access to routes like `/about`, `/courses`, etc. works correctly
- Page refreshes on any route don't result in 404 errors
- All routes are properly redirected to `index.html`

### If Your Site is in a Subdirectory

If you're deploying to a subdirectory (e.g., `public_html/myapp/`), you need to:

1. Update `package.json` to include:
   ```json
   "homepage": "/myapp"
   ```

2. Rebuild the application:
   ```bash
   npm run build
   ```

3. Upload the new build files

### Troubleshooting

**Issue: Routes return 404 errors**
- Ensure `.htaccess` file is uploaded and has correct permissions (644)
- Check that mod_rewrite is enabled on your server (contact hosting support if needed)
- Verify the `.htaccess` file is in the root of your website directory

**Issue: Assets not loading**
- Check file paths in browser console
- Verify all files from `build` folder were uploaded
- Check file permissions (should be 644 for files, 755 for directories)

**Issue: White screen or errors**
- Check browser console for JavaScript errors
- Verify all files uploaded correctly
- Check server error logs in cPanel

**Issue: Styles not loading**
- Clear browser cache
- Verify CSS files are in `static/css/` folder
- Check file permissions

### Updating Your Website

To update your website in the future:

1. Make changes to your code locally
2. Run `npm run build` again
3. Upload only the changed files, or upload all files to replace existing ones
4. Clear browser cache if needed

## Additional Configuration

### Custom Domain Setup

If using a custom domain:
1. Point your domain's DNS to your hosting server
2. Add the domain in cPanel → Addon Domains
3. Deploy to the appropriate directory

### SSL Certificate

For HTTPS:
1. Install SSL certificate in cPanel (Let's Encrypt is free)
2. Force HTTPS redirect in `.htaccess` if needed (add after RewriteEngine On):
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## Support

If you encounter issues:
1. Check cPanel error logs
2. Check browser console for errors
3. Verify all files uploaded correctly
4. Contact your hosting provider if server configuration issues persist


