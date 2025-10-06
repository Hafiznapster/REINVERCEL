# 🔧 OpenSolar API Not Working - Troubleshooting Guide

## 🚨 Current Issue:
Quotes are stored locally but not appearing in OpenSolar dashboard.

## 🧪 Step 1: Test the Widget ID

**Upload and test:** `test-opensolar-simple.html`

1. Upload `test-opensolar-simple.html` to your website
2. Visit: `https://your-domain.com/test-opensolar-simple.html`
3. Fill out the form and submit
4. Check the iframe result

**Expected Results:**
- ✅ **Success:** Redirect or success message = Widget ID works
- ❌ **Error:** Error message = Widget ID is wrong

## 🔍 Step 2: Check Console Logs

After submitting a quote, check browser console for:

```
🚀 Starting hybrid quote submission...
✅ Quote stored locally
🔄 Attempting OpenSolar API submission...
🔄 Trying serverless proxy...
❌ Serverless proxy failed: [error]
🔄 Trying PHP proxy...
❌ PHP proxy failed: [error]
🔄 Trying direct AJAX submission...
✅ Direct AJAX submission sent (no-cors mode)
```

## 🎯 Possible Issues & Solutions:

### **Issue 1: Wrong Widget ID**
**Symptoms:** Test page shows error
**Solution:** 
1. Login to your OpenSolar account
2. Go to Lead Capture Widgets
3. Find the correct widget ID
4. Replace `ca8ae2d8109747b496bf67a411ac789b` in the code

### **Issue 2: Widget Disabled/Inactive**
**Symptoms:** Test page works but no leads appear
**Solution:**
1. Check OpenSolar dashboard
2. Ensure widget is active/enabled
3. Check widget settings

### **Issue 3: CORS Blocking**
**Symptoms:** Console shows CORS errors
**Solution:** This is expected - we use `no-cors` mode which sends the data but can't read the response

### **Issue 4: OpenSolar Account Issues**
**Symptoms:** Widget ID is correct but no leads
**Solution:**
1. Check OpenSolar account status
2. Verify billing/subscription
3. Contact OpenSolar support

## 🔧 Quick Fixes:

### **Fix 1: Update Widget ID**
If you have the correct widget ID, update these files:
- `src/components/QuoteForm.tsx` (line with widget_id)
- `test-opensolar-simple.html` (hidden input)

### **Fix 2: Manual Lead Entry**
Since quotes are stored locally:
1. Go to `/#/admin/quotes`
2. Export quotes to CSV
3. Manually enter leads in OpenSolar dashboard

### **Fix 3: Email Notifications**
Set up email notifications in OpenSolar to get notified when leads arrive.

## 📊 Current System Status:

**✅ Working:**
- Quote form submission
- Local storage (100% reliable)
- Admin dashboard
- CSV export

**❓ Unknown:**
- OpenSolar API integration (need to test widget ID)

## 🎯 Next Steps:

1. **Test the widget ID** using the test page
2. **Check OpenSolar dashboard** for any new leads
3. **Verify widget settings** in OpenSolar account
4. **Contact OpenSolar support** if widget ID is correct but no leads appear

## 💡 Alternative Solution:

If OpenSolar API continues to fail, you can:
1. Keep the current local storage system
2. Export quotes to CSV regularly
3. Import CSV into OpenSolar manually
4. Set up email notifications for new quotes

**The local storage system ensures you never lose a lead, even if the API fails!** 🌟