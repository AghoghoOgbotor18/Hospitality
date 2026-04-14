# 🌍 Hospitality Marketing Africa (HMA) – Frontend Project

A responsive and modern hospitality landing page built to **learn and master SCSS (Sass)**, while also strengthening JavaScript skills like DOM manipulation and animations.

---

## 📌 Project Overview

This project was created as a **learning-focused frontend build** to understand:

- How SCSS works (structure, nesting, mixins, variables)
- How to organize styles in a scalable way
- How to build responsive layouts
- How to add interactivity using JavaScript

The website represents a **hospitality platform (HMA)** that connects African hospitality businesses with global travelers.

---

## 🎯 Purpose of the Project

The main goal of this project was **NOT just to build a website**, but to:

- Understand **SCSS architecture**
- Practice **clean and maintainable styling**
- Learn how to **break CSS into reusable parts**
- Combine **SCSS + JavaScript for real UI behavior**

---

## 🛠️ Technologies Used

- **HTML5** – Structure  
- **SCSS (Sass)** – Styling  
- **JavaScript (Vanilla JS)** – Interactivity  
- **Font Awesome** – Icons  

---

## 🧠 What I Learned

### 🔹 SCSS (Main Focus)

This project helped me understand:

- **Variables**
  ```scss
  $primary-color
  $accent-color
  ```

- **Mixins**
  ```scss
  @include m.flex-between;
  @include m.mobile;
  ```

- **Nesting**
  ```scss
  .navbar {
  .nav {
    .navlist {
      li {
        a { }
      }
    }
  }
}
```

## 📁 File Structure (SCSS Architecture)

- `abstracts/` → variables & mixins  
- `components/` → reusable UI parts  
- `layout/` → page sections  

👉 This made my CSS:

- Cleaner 
- Reusable 
- Easier to scale   

---

## JavaScript

I implemented:

- Responsive Navbar (Mobile Toggle)  
- Active Navigation Links  
- FAQ Accordion  
- Intersection Observer (Scroll Animations)  
- Staggered Animations (Text & Cards)  

---

## Features

### Responsive Navbar
- Mobile menu toggle (☰ / ✕)  
- Active link highlighting  
- Auto-close on click (mobile UX)  

---

### Scroll Animations
- Section-based animations using **Intersection Observer**  
- Text fades and slides into view  
- Cards animate with staggered delay  

---

### Hero Section
- Smooth staggered text animation on load  
- Clean landing page feel  

---

### FAQ Section
- Click to expand/collapse  
- Only one item open at a time  

---

### Call-To-Action (CTA)
- Highlighted animation for user engagement  
- Staggered entrance of elements  

---

## 📂 Project Structure

```bash
project-folder/
│
├── index.html
├── script.js
├── css/
│   └── index.css (compiled from SCSS)
│
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   │
│   ├── components/
│   ├── layout/
│   └── main.scss
│
└── images/
```

## ⚙️ How SCSS Works in This Project

- Write styles in `.scss` files  
- Use variables, mixins, and nesting  
- Compile SCSS → CSS  
- Link compiled CSS in HTML  

---

## Key Takeaways

- SCSS makes styling more powerful and organized  
- Mixins help avoid repetition  
- Variables make design consistent  
- Structuring files improves scalability  
- JavaScript brings the UI to life  

---

## Future Improvements

- Add React version of this project  
- Improve accessibility (ARIA roles)  
- Add backend integration (real listings)  
- Enhance animations with GSAP  

---

## Final Thoughts

This project was a major step in my frontend journey.  
It helped me move from **basic CSS styling** to writing **structured, scalable SCSS**, while also improving my JavaScript skills.

---

## Author

**Aghogho Ogbotor**  
Frontend Developer | UI/UX Enthusiast  

---

## Acknowledgment

Built as part of my learning journey to:

- Master SCSS  
- Improve frontend development skills  
