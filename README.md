# 🏗️ Civil Engineering Website

A modern, responsive website for civil engineering services with integrated admin panel for content management.

## 🌟 Features

### Public Website
- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern UI** - Beautiful Tailwind CSS styling
- ✅ **Contact Forms** - Integrated with Firebase
- ✅ **Testimonials** - Dynamic content from database
- ✅ **Project Portfolio** - Showcase your work
- ✅ **SEO Optimized** - Search engine friendly

### Admin Panel
- ✅ **Secure Authentication** - Firebase Auth integration
- ✅ **Dashboard** - Real-time statistics and analytics
- ✅ **Callback Management** - View and manage form submissions
- ✅ **Testimonials Management** - Add, edit, delete testimonials
- ✅ **Project Management** - Manage portfolio (coming soon)
- ✅ **Real-time Updates** - Live data synchronization

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd civil-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:3000
```

## 🔐 Admin Panel Access

### Setup Admin User
1. Go to [Firebase Console](https://console.firebase.google.com/project/civil-website-7dc1a)
2. Navigate to **Authentication** → **Users**
3. Click **Add User**
4. Enter admin email and password

### Access Admin Panel
- **Local**: `http://localhost:3000/admin`
- **Production**: `https://civil-website-7dc1a.web.app/admin`

## 🚀 Deployment

### Option 1: Firebase Hosting (Recommended)

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Deploy**
```bash
npm run build
firebase deploy
```

### Option 2: Quick Deploy (Windows)
```bash
deploy.bat
```

### Option 3: Netlify
1. Build: `npm run build`
2. Drag `build` folder to [netlify.com](https://netlify.com)

## 📁 Project Structure

```
civil-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.js      # Navigation header
│   │   ├── CallbackForm.js # Contact form
│   │   ├── TestimonialsSection.js # Customer reviews
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.js        # Landing page
│   │   ├── ServicesPage.js # Services page
│   │   ├── ProjectsPage.js # Portfolio page
│   │   └── AboutUsPage.js # About page
│   ├── AdminPanel.js      # Admin dashboard
│   ├── firebase.js        # Firebase configuration
│   └── App.js             # Main app component
├── firebase.json          # Firebase hosting config
├── tailwind.config.js     # Tailwind CSS config
└── package.json           # Dependencies
```

## 🔧 Configuration

### Firebase Setup
The project is pre-configured with Firebase:
- **Project ID**: `civil-website-7dc1a`
- **Database**: Firestore
- **Authentication**: Email/Password
- **Storage**: File uploads
- **Analytics**: User tracking

### Environment Variables
Create `.env` file for custom configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

## 📊 Database Collections

### Firestore Collections
- **`callback-requests`** - Contact form submissions
- **`testimonials`** - Customer reviews
- **`projects`** - Portfolio items (coming soon)

### Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /testimonials/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /callback-requests/{document} {
      allow read, write: if true;
    }
  }
}
```

## 🎨 Customization

### Styling
- **Framework**: Tailwind CSS
- **Colors**: Customizable in `tailwind.config.js`
- **Components**: Modular and reusable

### Content
- **Text**: Edit in component files
- **Images**: Replace in `public/` folder
- **Data**: Manage through admin panel

## 🔍 SEO Features

- ✅ **Meta tags** - Optimized for search engines
- ✅ **Structured data** - Rich snippets support
- ✅ **Fast loading** - Optimized images and code
- ✅ **Mobile friendly** - Responsive design
- ✅ **Accessibility** - WCAG compliant

## 📱 Mobile Responsive

- ✅ **Mobile-first design**
- ✅ **Touch-friendly navigation**
- ✅ **Optimized images**
- ✅ **Fast loading on mobile**

## 🔒 Security Features

- ✅ **Firebase Authentication**
- ✅ **Secure admin panel**
- ✅ **Data validation**
- ✅ **HTTPS enforced**

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**
   ```bash
   npm install
   npm run build
   ```

2. **Firebase not working**
   - Check internet connection
   - Verify Firebase configuration
   - Check browser console for errors

3. **Admin panel access denied**
   - Verify admin user exists in Firebase
   - Check authentication rules
   - Clear browser cache

### Support
- **Documentation**: Check `DEPLOYMENT.md`
- **Firebase Console**: [console.firebase.google.com](https://console.firebase.google.com)
- **React Docs**: [reactjs.org](https://reactjs.org)

## 📈 Analytics

### Firebase Analytics
- **User behavior tracking**
- **Page view analytics**
- **Performance monitoring**
- **Real-time data**

### Admin Dashboard
- **Form submission tracking**
- **Testimonial management**
- **Project portfolio stats**

## 🎯 Future Features

- [ ] **Project portfolio management**
- [ ] **File upload system**
- [ ] **Email notifications**
- [ ] **Multi-language support**
- [ ] **Advanced analytics**
- [ ] **Payment integration**

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 🎉 Success!

Your civil engineering website is now ready for deployment!

**🌐 Public Website**: `https://civil-website-7dc1a.web.app`
**🔐 Admin Panel**: `https://civil-website-7dc1a.web.app/admin`

For detailed deployment instructions, see `DEPLOYMENT.md`
