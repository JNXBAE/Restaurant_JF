# 🌿 Jungle Foods

A modern, responsive restaurant website built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The application allows customers to explore the menu, add items to their cart, and place orders directly through WhatsApp.

---

## ✨ Features

- 🍽️ Interactive Restaurant Menu
- 🛒 Shopping Cart
- 📲 WhatsApp Order Integration
- 📍 Google Maps Integration
- 📞 Contact Page
- 📷 Instagram Integration
- ⚙️ Admin Settings Panel
- 💾 Local Storage Support
- 📱 Fully Responsive Design
- ⚡ Fast Performance with Vite

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS

### State Management
- React Hooks
- Local Storage

### Icons
- Lucide React

### Deployment
- Netlify / Vercel

---

## 📂 Project Structure

```
jungle-foods/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   │   ├── use-local-storage.ts
│   │   └── use-settings.ts
│   ├── lib/
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── menu.tsx
│   │   ├── cart.tsx
│   │   ├── contact.tsx
│   │   └── admin/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/jungle-foods.git
```

## Navigate to the Project

```bash
cd jungle-foods
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

# 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# ⚙️ Restaurant Configuration

Restaurant details are managed inside:

```
src/hooks/use-settings.ts
```

Update the following information:

- WhatsApp Number
- Phone Number
- Email Address
- Instagram Profile
- Google Maps Location
- Restaurant Address
- Opening Hours

Example:

```ts
const defaultSettings = {
  whatsappNumber: "919600420706",
  instagramLink: "https://www.instagram.com/jungle_foods_",
  googleMapsLink: "https://maps.google.com/...",
  googleMapsEmbed: "https://www.google.com/maps/embed?...",
  email: "hello@junglefoods.com",
  phone: "+91 96004 20706",
  address: "Jungle Foods, Manjakuzhi, Tamil Nadu",
  openingHours: "10:00 AM - 10:00 PM"
}
```

---

# 📲 WhatsApp Ordering

Customers can place orders directly through WhatsApp.

Each order includes:

- Customer Name
- Phone Number
- Delivery Address
- Ordered Items
- Quantity
- Total Amount

---

# 🛠 Admin Panel

The application includes an Admin Settings page where restaurant information can be updated.

Settings are stored using **Local Storage**.

If changes are not visible after updating the code, clear Local Storage:

```javascript
localStorage.removeItem("jf_settings");
location.reload();
```

---

# 📱 Responsive Design

Optimized for:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥 Desktop

---

# 🚀 Future Enhancements

- Online Payment Gateway
- User Login & Authentication
- Order Tracking
- Inventory Management
- Admin Dashboard
- Coupon System
- Customer Reviews
- Database Integration
- Push Notifications

---

# 👨‍💻 Developer

**Mohamed Jubair K**

Full Stack Developer

- 🌐 Portfolio: https://jubportfolio.netlify.app/
- 💻 GitHub: https://github.com/JNXBAE

---

# 📄 License

This project is licensed for educational and commercial restaurant use.

---

## ⭐ Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.
