# ELECTRO - Modern Electronics eCommerce Homepage

A pixel-perfect, production-ready electronics eCommerce homepage built with React, Tailwind CSS, and premium GSAP animations. Fully responsive, accessible, and ready for deployment.

## 🎯 Features

- **Modern UI Design** - Clean, premium design with soft beige backgrounds and blue accents
- **Responsive Layout** - Works flawlessly on mobile (320px+), tablet (768px+), and desktop (1440px+)
- **Smooth Animations** - GSAP-powered scroll animations, parallax effects, and staggered reveals
- **State Management** - Zustand for lightweight UI state (mobile menu toggle)
- **Form Validation** - Zod schema validation for newsletter subscription
- **Performance Optimized** - Fast load times, optimized images with fallbacks
- **Accessibility Ready** - Semantic HTML, ARIA labels, keyboard navigation support
- **Zero Backend** - Purely frontend showcase with mock JSON data

## 🛠 Tech Stack

- **Frontend Framework:** React 19.2.4 (with Vite)
- **Styling:** Tailwind CSS v3
- **UI Components:** shadcn/ui
- **Animations:** GSAP 3.14.2 with ScrollTrigger
- **State Management:** Zustand 5.0.11
- **Form Validation:** Zod 4.3.6
- **Routing:** React Router DOM 7.13.1
- **Icons:** Lucide React 0.576.0
- **Build Tool:** Vite 7.3.1

## 📁 Project Structure

```
electro/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with mobile menu
│   │   ├── HeroBanner.jsx       # Hero section with animated content
│   │   ├── Categories.jsx       # Category grid with scroll reveal
│   │   ├── ProductCard.jsx      # Reusable product card component
│   │   ├── FeaturedProducts.jsx # Featured products showcase
│   │   ├── NewArrivals.jsx      # New arrivals with banner and grid
│   │   ├── PromoBanner.jsx      # Promotional banner
│   │   └── Footer.jsx           # Footer with newsletter subscription
│   │
│   ├── animations/
│   │   ├── heroAnimation.js     # Hero timeline and stagger animations
│   │   └── revealAnimation.js   # Scroll-based reveal animations
│   │
│   ├── pages/
│   │   └── Home.jsx             # Main homepage composition
│   │
│   ├── store/
│   │   └── useUIStore.js        # Zustand UI state management
│   │
│   ├── data/
│   │   ├── categories.json      # Category mock data
│   │   ├── featuredProducts.json # Featured products mock data
│   │   └── newArrivals.json     # New arrivals mock data
│   │
│   ├── lib/
│   │   └── validations.js       # Zod validation schemas
│   │
│   ├── App.jsx                  # Main app router
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global Tailwind imports
│
├── public/                      # Static assets
├── package.json                 # Project dependencies
├── tailwind.config.js           # Tailwind customization
├── vite.config.js               # Vite build configuration
└── README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/electro.git
   cd electro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run linter**
   ```bash
   npm run lint
   ```

## 🎨 Design System

### Colors
- **Primary:** `#2563EB` (Blue)
- **Background:** `#F6EFEA` (Soft Beige)
- **Card:** White
- **Text:** Dark gray (#1a1a1a)

### Typography
- **Font Family:** Inter, system-ui, sans-serif
- **Font Sizing:** Responsive scale using Tailwind defaults

### Spacing
- **Container:** `max-w-7xl mx-auto px-4`
- **Section Padding:** `py-16`
- **Card Padding:** `p-4` to `p-10`

### Border Radius
- Default: `rounded-lg` (0.5rem)
- Shadows: Subtle shadow-sm to shadow-lg for depth

## 🎬 Animation Architecture

### GSAP Integration

All animations use GSAP with ScrollTrigger plugin registered globally.

#### Hero Section
```javascript
// src/animations/heroAnimation.js
- Text slides left with fade (x: -50 → 0, opacity: 0 → 1)
- Image scales up with fade (scale: 0.9 → 1)
- Button staggered with delay
- Timeline-based for synchronization
```

#### Scroll-Based Reveals
```javascript
// src/animations/revealAnimation.js
- Categories on scroll: fade up (y: 40 → 0) with stagger 0.1s
- Product cards: fade up with stagger
- triggered at: start: "top 80%"
- once: true (animate only once per session)
```

#### Performance Notes
- All animations use `ease: "power3.out"` for smooth easing
- ScrollTrigger set to `once: true` to prevent repeated triggers
- No janky animations; smooth 60fps performance
- GPU-accelerated transforms only

### Adding New Animations

1. Create animation function in `src/animations/`
2. Use `useRef` to target elements
3. Call animation in `useEffect` with dependency array
4. Use GSAP timeline or fromTo for sequences

Example:
```jsx
import { animateStaggerCards } from '../animations/heroAnimation.js';

const MyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    animateStaggerCards(containerRef);
  }, []);

  return <div ref={containerRef}>...</div>;
};
```

## 🧠 State Management (Zustand)

### useUIStore

Simple, lightweight store for UI-only state:

```javascript
// src/store/useUIStore.js
const useUIStore = create((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));
```

### Usage Example

```jsx
import useUIStore from '../store/useUIStore';

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useUIStore();

  return (
    <nav>
      <button onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};
```

**Note:** Zustand is only for UI state. No data persistence or API calls.

## ✅ Form Validation (Zod)

### Newsletter Schema

```javascript
// src/lib/validations.js
export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});
```

### Validation Example

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  const result = newsletterSchema.safeParse({ email });

  if (!result.success) {
    setError(result.error.errors[0].message);
  } else {
    alert("Subscribed successfully!");
    setEmail("");
  }
};
```

## 📱 Responsive Breakpoints

```
Mobile:    320px+  (1 column, hamburger menu)
Tablet:    768px+  (2 column grids, horizontal nav)
Desktop:   1024px+ (4 column grids)
Large:     1440px+ (max-w-7xl container)
```

All components use Tailwind's responsive prefixes:
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

## 🖼 Images & Assets

### Image Sources
- **Electronics Products:** Unsplash (free stock photos)
- **Fallback Placeholders:** via.placeholder.com
- **Image Optimization:** Query params for sizing (w=500&h=500&fit=crop)

### Image Fallback Handler
```jsx
<img
  src={imageUrl}
  alt="Product name"
  onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }}
/>
```

All product images have fallback handlers to prevent broken image icons.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite configuration
4. Deploy with one click

```bash
npm run build  # Creates optimized dist/ folder
```

### Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/repo-name/',
     plugins: [react()],
   };
   ```

2. Deploy:
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

## 🔄 Git Workflow

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit: ELECTRO eCommerce homepage"
git branch -M main
git remote add origin https://github.com/yourusername/electro.git
git push -u origin main
```

### Feature Branch Workflow
```bash
git checkout -b feature/new-section
# Make changes
git add .
git commit -m "Add new section"
git push origin feature/new-section
# Open Pull Request on GitHub
```

## 📦 Production Checklist

- [x] All components error-free (linting passing)
- [x] Images have fallback handlers
- [x] Tailwind CSS optimized (unused styles purged)
- [x] GSAP animations smooth and performant
- [x] Mobile responsive on 320px+
- [x] Form validation working
- [x] Zustand state properly isolated
- [x] No console errors or warnings
- [x] Accessibility basics covered (alt text, semantic HTML)
- [x] Ready for deployment

## 🐛 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Built as part of the Octanet internship program.

## 🙏 Acknowledgments

- **Unsplash** - Free stock photography
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **shadcn/ui** - Component library built on Radix UI
- **Lucide Icons** - Beautiful open source icons

## 📞 Support

For issues, feature requests, or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed steps to reproduce
3. Include screenshots or screen recordings if applicable

## 🔮 Future Enhancements

- [ ] Product detail pages with routing
- [ ] Shopping cart functionality
- [ ] Wishlist feature
- [ ] User authentication (Firebase/Auth0)
- [ ] Backend API integration
- [ ] Payment gateway (Stripe/PayPal)
- [ ] Product search and filtering
- [ ] Customer reviews and ratings
- [ ] Admin dashboard for product management

---

**Happy coding! 🚀** Feel free to fork, modify, and share this project.
