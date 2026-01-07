# 🏡 Real Estate Platform

A modern, full-featured real estate web application built with **React** and **Redux**, showcasing properties across major Indian cities with comprehensive search functionality, agent profiles, and admin dashboard capabilities. Designed with professional FAANG-quality UI/UX.

![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=flat&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-4.1.0-764ABC?style=flat&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-5.3.0-DB7093?style=flat&logo=styled-components&logoColor=white)

## ✨ Features

### 🏘️ **User Features**
- **Browse Properties**: Explore premium apartments, villas, offices, and retail spaces across Indian metros (Mumbai, Bangalore, Delhi NCR, Hyderabad, Pune, Chennai)
- **Advanced Filtering**: Filter properties by category, city, price range (in ₹), and features
- **Property Details**: View comprehensive property information including:
  - High-quality image galleries
  - Detailed amenities and features
  - Location with Indian cities and landmarks
  - Pricing in Indian Rupees (₹) with realistic market rates
- **Agent Profiles**: Connect with verified real estate agents across India
- **Responsive Design**: Fully responsive interface optimized for all devices

### 🎛️ **Admin Features**
- **Dashboard**: Analytics dashboard with charts showing property distribution
- **Property Management**: Add, edit, and manage property listings
- **Agent Management**: Manage real estate agent profiles
- **Message Inbox**: View and respond to user inquiries
- **Profile Management**: Update admin profile and change password

## 🚀 Technology Stack

- **Frontend Framework**: React 17.0.2
- **State Management**: Redux with Redux Thunk for async actions
- **Routing**: React Router DOM 5.2.0
- **Styling**: Styled Components 5.3.0
- **Charts**: Chart.js 3.4.1 with react-chartjs-2
- **Animations**: React Transition Group 4.4.2
- **Dev Tools**: Redux DevTools Extension

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 12.0 or higher)
- **npm** (version 6.0 or higher) or **yarn** (version 1.22 or higher)

## 🔧 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/real-estate.git
   cd real-estate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode on [http://localhost:3000](http://localhost:3000) |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run eject` | **Note: this is a one-way operation!** Ejects from Create React App |

## 📁 Project Structure

```
real-estate/
├── public/               # Static files
│   ├── images/          # Property and agent images
│   └── index.html       # HTML template
├── src/
│   ├── components/      # Reusable UI components
│   ├── containers/      # Component containers with logic
│   ├── pages/           # Page-level components
│   │   ├── Home.js
│   │   ├── Agents.js
│   │   ├── Listings.js
│   │   ├── Dashboard.js
│   │   └── ...
│   ├── partials/        # Partial components
│   ├── redux/           # Redux store, actions, and reducers
│   │   ├── store.js
│   │   ├── actions/
│   │   └── reducers/
│   ├── dev-data/        # Mock data for development
│   │   ├── agents.js
│   │   ├── listing.js
│   │   └── messages.js
│   ├── helpers/         # Utility functions
│   ├── constants/       # Application constants and routes
│   ├── App.js           # Main application component
│   └── index.js         # Application entry point
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## 🎨 Key Components

### Compound Components Pattern
This project implements the **Compound Component Pattern**, providing flexible and reusable components:

```javascript
<Dashboard>
  <Dashboard.Header>
    <Dashboard.Title>Dashboard</Dashboard.Title>
  </Dashboard.Header>
  <Dashboard.Content>
    {/* Content here */}
  </Dashboard.Content>
</Dashboard>
```

### State Management
Redux is used for centralized state management with the following structure:
- **Properties State**: Manages all property listings and filters
- **Agents State**: Manages agent information and their listings
- **Messages State**: Handles inbox messages
- **UI State**: Controls UI elements like modals and sidebars

## 🗺️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with featured properties |
| `/agents` | Agents | List of all real estate agents |
| `/listing` | Listings | Browse all properties |
| `/agent/:id` | Agent Detail | Individual agent profile |
| `/property/:id` | Property Detail | Individual property details |
| `/login` | Login | User authentication |
| `/signup` | Signup | User registration |
| `/dashboard` | Dashboard | Admin dashboard overview |
| `/profile` | User Profile | User profile management |
| `/messages` | Messages | Inbox for user messages |
| `/add-listing/:id?` | Add/Edit Listing | Add or edit property listings |
| `/all-listing` | Admin Listings | Manage all listings (Admin) |
| `/all-agents` | Admin Agents | Manage all agents (Admin) |
| `/mylisting` | My Listings | View agent's own listings |

## 💾 Data Structure

### Properties
Properties include comprehensive information:
- Title, slug, and realistic descriptions
- Price formatted in Indian Rupees (₹)
- Location details (major Indian cities: Bangalore, Mumbai, Pune, Hyderabad, Chennai, Delhi NCR, Gurgaon, Noida)
- Multiple property images
- Amenities (Air Conditioning, Security, Parking, Gym, WiFi, etc.)
- Features (bedrooms, garage, elevator, kitchen)
- Category (Apartments, Houses, Offices, Retail)
- Type (rental/sale) with prices ranging from ₹15,000-₹85,000/month for rentals and ₹35 Lakhs-₹15 Crores for sales

### Agents
Agent profiles contain:
- Indian names and professional credentials
- Email addresses and Indian phone numbers (+91)
- Addresses in major Indian cities
- Professional profile photos
- Detailed professional bios
- Social media links (Facebook, Instagram, Twitter, LinkedIn)
- Associated property listings
- Featured status

## 🎯 Development Highlights

- **Modern UI/UX**: FAANG-quality design with gradient themes, sophisticated shadows, and smooth animations
- **India-Localized**: Realistic Indian property data with authentic city names, addresses, and INR pricing
- **Professional Aesthetics**: Premium typography (Inter, Poppins), modern color palette, and polished interactions
- **Clean Code**: ESLint warnings resolved, proper React patterns implemented
- **Best Practices**: Component-driven architecture, Redux state management, responsive design
- **Performance**: Optimized with proper state management and efficient rendering
- **Maintainability**: Well-organized file structure and clear component hierarchy
- **Portfolio-Ready**: Demonstrates full-stack capabilities suitable for FAANG interviews

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Built with ❤️ to showcase modern React/Redux development skills with India-specific real estate data and FAANG-quality UI/UX design.

## 🙏 Acknowledgments

- React team for the amazing framework
- Redux team for state management solutions
- All contributors who helped improve this project

---

**Note**: This project uses local data files for demonstration purposes. For production use, integrate with a backend API and database.
