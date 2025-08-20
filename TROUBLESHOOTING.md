# Firebase Authentication Troubleshooting

## Current Error: CONFIGURATION_NOT_FOUND

The error you're seeing indicates that your Firebase project doesn't have authentication properly configured.

## Quick Fix Steps

### 1. Enable Authentication in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `data-connect-47bf4`
3. Click **Authentication** in the left sidebar
4. Click **Get started** if you haven't set up authentication yet

### 2. Enable Sign-in Methods

1. In Authentication, click **Sign-in method** tab
2. Enable **Email/Password**:
   - Click on "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

3. Enable **Google**:
   - Click on "Google"
   - Toggle "Enable" to ON
   - Add your support email
   - Click "Save"

### 3. Add Authorized Domains

1. In Authentication, click **Settings** tab
2. Under "Authorized domains", add:
   - `localhost` (for development)
   - Your production domain (if any)

### 4. Verify Project Configuration

Make sure your Firebase project has:
- ✅ Authentication enabled
- ✅ At least one sign-in method enabled
- ✅ Proper domain authorization

## Test the Fix

After enabling authentication:

1. Refresh your browser
2. Check browser console for Firebase logs
3. Try Google sign-in again
4. Check for any new error messages

## Common Issues

### "CONFIGURATION_NOT_FOUND"
- **Cause**: Authentication not enabled in Firebase project
- **Fix**: Enable Authentication in Firebase Console

### "UNAUTHORIZED_DOMAIN"
- **Cause**: Domain not authorized for authentication
- **Fix**: Add domain to authorized domains list

### "POPUP_CLOSED_BY_USER"
- **Cause**: User closed the popup
- **Fix**: This is normal user behavior, not an error

## Still Having Issues?

1. Check browser console for detailed error messages
2. Verify Firebase project ID matches exactly
3. Ensure you're using the correct API key
4. Try clearing browser cache and cookies
5. Check if ad-blockers are interfering with popups

## Support

If issues persist:
- Check [Firebase Console](https://console.firebase.google.com/) for project status
- Review [Firebase Auth Documentation](https://firebase.google.com/docs/auth)
- Ensure your project is on the correct Firebase plan
