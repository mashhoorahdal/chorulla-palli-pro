# Chorulla Palli Pro

**Chorulla Palli Pro** is a web application designed to help users find nearby mosques that provide food during Ramadan. Users can submit new mosque locations and view a list of existing mosques with direct links to Google Maps for easy navigation.

## 🚀 Features

✅ Submit new mosque details via a simple form  
✅ List mosques stored in the database with clickable Google Maps links  
✅ Toast notifications for success and error handling  
✅ Fully responsive UI with clean design using ShadCN components  

---

## 🛠️ Tech Stack
- **Next.js** (App Router)
- **TypeScript**
- **Supabase** (Database)
- **ShadCN** (UI Components)
- **Sonner** (Toast Notifications)

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/chorulla-palli-pro.git
cd chorulla-palli-pro
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create a `.env.local` file** with the following keys:
```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Supabase Database Setup

1. Create a table called **`mosques`** with the following columns:

| Column Name | Type     |
|--------------|-----------|
| `id`          | `UUID` (Primary Key) |
| `name`        | `Text` |
| `location`    | `Text` |

2. Insert sample data for testing:
```sql
INSERT INTO mosques (id, name, location) VALUES
  (gen_random_uuid(), 'Al-Falah Mosque', 'https://maps.app.goo.gl/sample1'),
  (gen_random_uuid(), 'Masjid Al-Noor', 'https://maps.app.goo.gl/sample2');
```

---

## 🖥️ Usage

### Submit a Mosque
- Fill in the **Mosque Name** and **Google Maps Link**.
- Click **Submit Mosque** to save the details in the Supabase database.

### View Nearby Mosques
- The homepage displays a list of mosques with clickable Google Maps links.

---

## 🎯 Project Structure
```
/src
├── components
│   ├── ui
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── table.tsx
│
├── lib
│   └── supabaseClient.ts
│
├── app
│   ├── page.tsx  (Homepage)
│   ├── submit.tsx (Submit Mosque Form)
│   └── mosqueList.tsx (Mosque List Display)
```

---

## 🚨 Known Issues
- Ensure valid Google Maps links are used when submitting a mosque.
- For accurate results, verify that your Supabase table matches the expected schema.

---

## 📝 Future Enhancements
- Add geolocation logic to list mosques closer to the user.
- Improve UI/UX with better mosque detail pages.
- Add search functionality for easier mosque discovery.

---

## 🤝 Contributing
Contributions are welcome! If you'd like to improve this project, feel free to fork the repo, create a branch, and submit a pull request.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements
Special thanks to:
- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [ShadCN](https://ui.shadcn.com/)
- [Sonner](https://sonner.emilkowal.ski/)