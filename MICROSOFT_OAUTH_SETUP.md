# Microsoft OAuth Setup Guide for Firebase

This guide will help you set up Microsoft OAuth authentication in your Firebase project.

## Prerequisites

- A Firebase project (you already have one: `fir-auth-3bf56`)
- A Microsoft Azure account with an App Registration

## Step 1: Create Microsoft App Registration

1. Go to [Azure Portal](https://portal.azure.com/)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Fill in the details:
   - **Name**: Your app name (e.g., "Firebase Auth App")
   - **Supported account types**: Choose based on your needs
   - **Redirect URI**: 
     - Type: Web
     - URI: `https://fir-auth-3bf56.firebaseapp.com/__/auth/handler`
   - Click **Register**

## Step 2: Configure Microsoft App

1. In your app registration, go to **Authentication**
2. Add the redirect URI if not already added
3. Go to **Certificates & secrets**
4. Create a new client secret:
   - Click **New client secret**
   - Add a description and choose expiration
   - **Copy the secret value** (you won't see it again!)
5. Go to **API permissions**
6. Add permissions:
   - **Microsoft Graph** > **Delegated permissions**
   - Add: `User.Read`, `email`, `profile`, `openid`

## Step 3: Configure Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `fir-auth-3bf56`
3. Go to **Authentication** > **Sign-in method**
4. Click on **Microsoft** provider
5. Click **Enable**
6. Fill in the details:
   - **Client ID**: Copy from Azure App Registration (Application ID)
   - **Client secret**: Paste the client secret from Azure
   - **Tenant ID**: Your Azure AD tenant ID (or leave empty for multi-tenant)
7. Click **Save**

## Step 4: Update Authorized Domains

1. In Firebase Console, go to **Authentication** > **Settings**
2. Under **Authorized domains**, make sure your domain is listed:
   - `fir-auth-3bf56.firebaseapp.com`
   - Add any custom domains if you have them

## Step 5: Test the Integration

1. Run your React app
2. Click the "Continue with Microsoft" button
3. You should be redirected to Microsoft's login page
4. After successful login, you'll be redirected back to your app

## Troubleshooting

### Common Issues:

1. **"Microsoft sign-in is not enabled"**
   - Make sure Microsoft provider is enabled in Firebase Console
   - Check that Client ID and Secret are correct

2. **"Invalid redirect URI"**
   - Verify the redirect URI in Azure matches exactly: `https://fir-auth-3bf56.firebaseapp.com/__/auth/handler`
   - Check for typos and trailing slashes

3. **"AADSTS50011: The reply URL specified in the request does not match the reply URLs configured for the application"**
   - This means the redirect URI in Azure doesn't match what Firebase is sending
   - Double-check the redirect URI configuration

4. **"account-exists-with-different-credential"**
   - This is handled automatically in the code
   - User will be prompted to sign in with their existing method first

### Testing with Different Accounts:

- Test with personal Microsoft accounts
- Test with work/school accounts (if configured)
- Test the account linking flow when users have accounts with different providers

## Security Considerations

1. **Client Secret**: Never expose your client secret in client-side code
2. **Scopes**: Only request the scopes you actually need
3. **Redirect URIs**: Keep your redirect URIs secure and specific
4. **HTTPS**: Always use HTTPS in production

## Additional Features

The implementation includes:
- ✅ Microsoft OAuth sign-in
- ✅ Account linking for existing users
- ✅ Error handling for common scenarios
- ✅ Proper state management
- ✅ Responsive UI design

## Next Steps

After successful setup:
1. Test with different user types
2. Implement additional Microsoft Graph API calls if needed
3. Add user profile information display
4. Consider implementing sign-in with redirect for better mobile experience

## Support

If you encounter issues:
1. Check Firebase Console logs
2. Check browser console for errors
3. Verify Azure App Registration configuration
4. Check Firebase documentation: [Microsoft OAuth Guide](https://firebase.google.com/docs/auth/web/microsoft-oauth)
