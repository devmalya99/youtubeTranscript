# masterplan.md

## 🧠 App Name (Working Title)
**RecipeSnap AI** – Smart recipe discovery from YouTube, filtered by dietary preference and meal timing, with AI-extracted ingredient lists.

---

## 🌟 Vision

Build a modern, mobile-first web app that helps users discover and save cooking recipes from YouTube. It intelligently extracts video transcripts and uses AI to present clean, structured ingredient lists. Future versions will personalize results based on user preferences and behavior.

---

## 👥 Target Audience

- Home cooks looking for visual recipe guides  
- Users with specific dietary needs (Vegan, Veg+Egg, etc.)  
- People who browse YouTube for meals but want structured, searchable summaries  
- Mobile-first users cooking on the go

---

## 🧭 User Flow (MVP)

1. **Welcome / Input Stage**
   - Select dietary preference: Veg / Non-Veg / Vegan / Veg+Egg
   - Select meal time: Morning, Noon, Afternoon, Night, Midnight Craving

2. **Search & Fetch**
   - Backend uses YouTube API or scraper to find top relevant videos
   - Fetch and process transcript

3. **AI Parsing**
   - AI model (e.g., GPT or custom NLP) processes the transcript
   - Extracts structured ingredient list (limit to 20 items for MVP)

4. **Display Results**
   - Embed video
   - Show cleaned-up ingredients list
   - Allow users to save recipes (localStorage for MVP)

5. **Saved Recipes View**
   - Lightweight page for previously saved recipes

---

## 🎨 UI/UX Guidelines

- **Style**: Modern, minimalist, mobile-first
- **Themes**: Toggle between light and dark mode
- **Layout**:
  - Full-width cards for search input
  - Scrollable, responsive results view
  - Bottom navigation (like mobile apps)
- **Interactions**:
  - Smooth transitions, loading states
  - Save with heart icon or swipe gesture
  - Skeleton loaders during fetch/parse

---

## 🔧 Tech Stack (MVP)

### Frontend
- React + Vite
- Tailwind CSS
- Zustand (if needed for state)
- Responsive, mobile-first layout
- Light/dark theme toggle

### Backend
- Node.js + Express
- YouTube search & transcript parsing (official API or fallback scraper)
- OpenAI API or similar for transcript → ingredients parsing
- CORS, rate limiting, and caching (basic for MVP)

---

## 🛡️ Security & Reliability (Later Phases)

- Use Google Translate API to handle multilingual transcripts
- Implement rate limiting for public endpoints
- Migrate from localStorage to MongoDB/Prisma for persistence
- Add user accounts (JWT auth or OAuth via Google)
- Error logging/monitoring with Sentry
- Input validation + API usage protection

---

## 📈 Phase-Based Roadmap

### Phase 1 – MVP
- UI filters for diet + meal time
- YouTube video fetch + transcript extraction
- AI-generated ingredient list
- Embed video and display ingredients
- Save to localStorage

### Phase 2 – Infrastructure Upgrade
- Move to MongoDB (users, saved recipes)
- Add auth (simple login or OAuth)
- Admin dashboard for moderation/debugging
- Basic rate limiting & error handling

### Phase 3 – Personalization
- Learn from user preferences
- Personalized recipe suggestions
- In-app history of viewed/saved content
- Tags and smart filtering

### Phase 4 – Advanced Features
- Translate videos with Google Translate
- Weekly suggestions via email (newsletter)
- Shopping list generator
- Export to grocery apps or PDFs

---

## 🚧 Known Challenges & Mitigations

| Challenge                         | Mitigation |
|----------------------------------|------------|
| Inaccurate transcripts           | Option to flag/refresh transcript; fallback to top comments |
| AI mislabeling ingredients       | Fine-tune prompts; show confidence score or allow edit |
| YouTube API quota limits         | Implement caching, rate limiting, YouTube Data API fallback |
| Multilingual content             | Use Google Translate on transcript before parsing |
| Device compatibility             | Design mobile-first, test across screen sizes |

---

## 💬 Future Considerations

- Convert to PWA or React Native app
- Community features: upvotes, comments, shared lists
- Recipe rating & difficulty tagging
- Offline mode for saved videos + ingredients

---

> 🚀 You're building something unique: functional, smart, and user-focused. Keep it lean, ship fast, and polish iteratively.

