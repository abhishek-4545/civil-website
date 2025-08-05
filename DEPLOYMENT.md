# Deployment Guide

## 🚀 Deploy Your Civil Engineering Website

### Option 1: Firebase Hosting (Recommended)

#### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### Step 2: Login to Firebase
```bash
firebase login
```

#### Step 3: Initialize Firebase in your project
```bash
firebase init hosting
```
- Select your project: `civil-website-7dc1a`
- Public directory: `build`
- Configure as single-page app: `Yes`
- Overwrite index.html: `No`

#### Step 4: Build and Deploy
```bash
npm run build
firebase deploy
```

Your website will be live at: `https://civil-website-7dc1a.web.app`

---

### Option 2: Netlify (Alternative)

#### Step 1: Build your project
```bash
npm run build
```

#### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `build` folder
3. Your site will be live instantly!

---

### Option 3: Vercel (Alternative)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
vercel
```

---

## 🔐 Admin Panel Setup

### Step 1: Create Admin User in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/project/civil-website-7dc1a)
2. Navigate to **Authentication** → **Users**
3. Click **Add User**
4. Enter admin email and password
5. Save the credentials

### Step 2: Access Admin Panel

Your admin panel will be available at:
- **Main Website**: `https://your-domain.com/admin`
- **Firebase Hosting**: `https://civil-website-7dc1a.web.app/admin`

### Step 3: Admin Panel Features

✅ **Dashboard**: View statistics and recent activity
✅ **Callback Requests**: Manage form submissions
✅ **Testimonials**: Add/edit/delete testimonials
✅ **Projects**: Manage project portfolio (coming soon)

---

## 📊 Firebase Console Management

### View Data
1. Go to [Firebase Console](https://console.firebase.google.com/project/civil-website-7dc1a)
2. Navigate to **Firestore Database**
3. View collections:
   - `callback-requests` - Form submissions
   - `testimonials` - Customer testimonials
   - `projects` - Project portfolio

### Security Rules
Update Firestore security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to testimonials and projects
    match /testimonials/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /projects/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow public write to callback requests
    match /callback-requests/{document} {
      allow read, write: if true;
    }
  }
}
```

---

## 🔧 Environment Variables (Optional)

Create `.env` file for additional configuration:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

---

## 📱 Custom Domain (Optional)

### Firebase Hosting
1. Go to Firebase Console → Hosting
2. Click **Add custom domain**
3. Follow the DNS configuration steps

### Netlify/Vercel
1. Go to your project dashboard
2. Navigate to **Domain settings**
3. Add your custom domain

---

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails**: Check for syntax errors in your code
2. **Firebase deploy fails**: Ensure you're logged in and have correct project
3. **Admin panel not working**: Check Firebase Authentication setup
4. **Data not showing**: Verify Firestore security rules

### Support:
- Firebase Documentation: https://firebase.google.com/docs
- React Documentation: https://reactjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

## 🎉 Success!

Your civil engineering website is now:
- ✅ **Live and accessible** to the public
- ✅ **Connected to Firebase** for data management
- ✅ **Admin panel** for content management
- ✅ **Responsive design** for all devices
- ✅ **SEO optimized** for search engines

**Public Website**: `https://civil-website-7dc1a.web.app`
**Admin Panel**: `https://civil-website-7dc1a.web.app/admin` 