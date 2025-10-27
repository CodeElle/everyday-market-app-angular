# 🛒 Everyday Market App

A responsive, modular Angular application for browsing, viewing, and managing products in a marketplace. Built with [Angular CLI](https://angular.io/cli), this app demonstrates clean architecture, component-based design, and type-safe integration with backend services.

---

## 🚀 Features

- View products by category
- Add new products via a dynamic form
- Browse product details
- Responsive layout with reusable components
- Type-safe models and service integration
- Async data loading with loading indicators

---

## 🧱 Tech Stack

- **Angular** 16+
- **TypeScript**
- **RxJS** (via `firstValueFrom`)
- **Angular Router**
- **FormsModule** for template-driven forms
- **Standalone Components** for modular design
- **HttpClient** for API communication

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                 # Shared services and models
│   ├── modules/
│   │   └── market/           # Feature module for marketplace
│   │       ├── product-form/
│   │       ├── product-list/
│   │       ├── product-edit-page/
│   │       ├── product-view-page/
│   │       ├── products-page/
│   │       └── category-menu/
│   └── shared/               # Shared UI components
```

---

## ⚙️ Setup & Development

### Prerequisites

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
ng serve
```

App will be available at `http://localhost:4200`.

### Backend API Proxy (Optional)

To forward `/api` requests to your backend:

1. Create `proxy.conf.json`:
   ```json
   {
     "/api": {
       "target": "http://localhost:3000",
       "secure": false,
       "changeOrigin": true
     }
   }
   ```

2. Update `angular.json`:
   ```json
   "options": {
     "proxyConfig": "proxy.conf.json"
   }
   ```

3. Restart dev server:
   ```bash
   ng serve
   ```

---

## 🧪 Testing

To be added — unit tests and integration tests using Jasmine & Karma.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

MIT — feel free to use, modify, and share.

---

## ✨ Author

Built by Laiza  
Focused on clarity, accessibility, and empowering learners through clean code.
