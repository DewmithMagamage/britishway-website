# British Way English Academy Website

A modern, responsive website for British Way English Academy built with React and Tailwind CSS.

## Features

### 🏠 **Consistent Layout System**
- **Unified Header & Navigation**: All pages use the same header with smooth navigation
- **Responsive Design**: Mobile-first approach with hamburger menu for mobile devices
- **Fixed Header**: Sticky navigation with proper spacing for content
- **Footer Integration**: Consistent footer across all pages with clickable links

### 📱 **Smooth Navigation**
- **React Router**: Client-side routing for fast navigation
- **Active State Indicators**: Current page highlighted in navigation
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Smooth Transitions**: CSS transitions for better user experience

### 🏢 **Branch Management**
- **14 Branch Locations**: Complete contact details for all branches
- **Individual Branch Pages**: Detailed pages for each branch location
- **Interactive Maps**: Google Maps integration for each branch
- **Contact Information**: Phone, email, address, and map links for each branch

### 📊 **Admin Dashboard**
- **Modern UI**: Professional admin interface with clean design
- **Overview Dashboard**: Statistics and recent activity summary
- **Events Management**: CRUD operations for events
- **News Management**: CRUD operations for news articles
- **Form Submissions**: View and manage all form submissions
- **Excel Export**: Download form data as Excel files
- **Real-time Updates**: Changes reflect immediately on the website

### 📝 **Form Data Collection**
- **Contact Forms**: Collect user inquiries and course interest
- **Data Persistence**: Form submissions stored in localStorage
- **Admin View**: All submissions visible in admin dashboard
- **Export Functionality**: Download submissions as Excel files
- **Form Validation**: Client-side validation for better UX

### 🎯 **Page Structure**
- **Home Page**: Hero section, programs, about, testimonials, news, events, contact
- **About Page**: Company history, vision, mission, timeline, awards
- **Courses Page**: Course catalog with filtering and detailed information
- **Branches Page**: All branch locations with contact details
- **News & Events Page**: Latest news and upcoming events
- **Contact Page**: Contact form and branch information
- **Careers Page**: Job openings and application form
- **Testimonials Page**: Student success stories and reviews
- **Admin Dashboard**: Content management system

### 🛠 **Technical Features**
- **React 18**: Latest React features and hooks
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Context API**: State management for form data
- **Local Storage**: Data persistence
- **Excel Export**: XLSX library for data export
- **Heroicons**: Beautiful SVG icons
- **Responsive Design**: Mobile-first approach

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd britishway-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── AboutPage.jsx
│   ├── AdminDashboard.jsx
│   ├── BranchCard.jsx
│   ├── BranchPage.jsx
│   ├── BranchesPage.jsx
│   ├── CareersPage.jsx
│   ├── Contact.jsx
│   ├── ContactUsPage.jsx
│   ├── CourseCard.jsx
│   ├── CoursesPage.jsx
│   ├── Events.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── JoinCourses.jsx
│   ├── Layout.jsx
│   ├── MapSection.jsx
│   ├── News.jsx
│   ├── NewsEventsPage.jsx
│   ├── Partners.jsx
│   ├── Programmes.jsx
│   ├── Reveal.jsx
│   ├── SplashScreen.jsx
│   ├── StayConnected.jsx
│   ├── Testimonials.jsx
│   └── TestimonialsPage.jsx
├── context/
│   └── FormContext.jsx
├── data/
│   └── branches.js
├── App.jsx
├── Home.jsx
├── index.css
└── index.js
```

## Branch Information

The website includes complete contact information for all 14 branches:

1. **Nittambuwa** (Head Office)
2. **Matara**
3. **Galle**
4. **Kandy**
5. **Polonnaruwa**
6. **Nugegoda**
7. **Kalutara**
8. **Kiribathgoda**
9. **Bandarawela**
10. **Negombo**
11. **Kurunegala**
12. **Ratnapura**
13. **Gampaha**
14. **Anuradhapura**

Each branch has:
- Phone numbers (mobile and landline)
- Email address
- Physical address
- Google Maps link

## Admin Dashboard Features

### Overview Tab
- Total students count
- Active events count
- News articles count
- Form submissions count
- Recent submissions list
- Upcoming events list

### Events Management
- Add new events
- Edit existing events
- Delete events
- Event details (title, date, time, location, description)
- Status management

### News Management
- Add new news articles
- Edit existing articles
- Delete articles
- Featured article marking
- Publication status

### Form Submissions
- View all form submissions
- Delete submissions
- Export to Excel
- Submission details (name, email, phone, course, branch, message, date)

## Form Data Collection

The website collects form data through:
- Contact forms on various pages
- Course inquiry forms
- Career application forms
- Branch inquiry forms

All form data is:
- Stored in browser localStorage
- Visible in admin dashboard
- Exportable as Excel files
- Persistent across sessions

## Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Breakpoints for mobile, tablet, and desktop
- Touch-friendly navigation
- Optimized images and content
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

The website can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## Future Enhancements

- Backend API integration
- User authentication
- Real-time notifications
- Advanced analytics
- Multi-language support
- Payment integration
- Student portal

## Support

For technical support or questions about the website, please contact the development team.

---

**British Way English Academy** - Transforming lives through quality English education since 2004.





