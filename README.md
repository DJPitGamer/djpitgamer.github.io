# The Pineapple Hater's Sanctuary 🍍❌

A modern, fully-functional blog for pineapple haters everywhere. Share your thoughts, rate foods, and connect with like-minded individuals who believe pineapple has no place on pizza (or anywhere else, really).

## Features

- **📝 Blog System**: Read and comment on blog posts about pineapple and pizza
- **💬 Comments with IndexedDB**: Leave comments on blog posts with local browser storage
- **⭐ Food Ratings**: Rate any food as "YUMMY" or "NOT YUMMY" 
- **📊 Aggregated Ratings**: See what the community thinks about different foods
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **🚀 Lightning Fast**: Pure vanilla HTML/CSS/JavaScript, no frameworks needed
- **🔒 Privacy First**: All data stored locally in your browser using IndexedDB

## What's Included

```
├── index.html           # Main HTML structure
├── styles.css           # Complete styling with responsive design
├── app.js               # Blog logic and UI interactions
├── db.js                # IndexedDB database management
├── README.md            # This file
└── DEPLOYMENT_GUIDE.md  # Step-by-step GitHub Pages deployment guide
```

## Quick Start

### Local Testing

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start exploring!

### Deployment to GitHub Pages

See `DEPLOYMENT_GUIDE.md` for complete step-by-step instructions to deploy your blog to `https://djpitgamer.github.io/`.

## How It Works

### Blog Posts

The blog comes with 4 pre-written posts about pineapple and pizza. To add more:

1. Open `app.js`
2. Find the `blogPosts` array
3. Add a new object with `id`, `title`, `date`, `excerpt`, and `content`

### Comments

Comments are stored in your browser's IndexedDB database. Each browser/device has its own comment storage. This ensures privacy and fast loading.

### Ratings

The ratings system lets visitors vote on foods. Results are aggregated and displayed as percentages. All data is stored locally.

## Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ff6b6b;      /* Change this */
    --secondary-color: #ffd93d;    /* And this */
    --dark-color: #2c3e50;         /* And this */
}
```

### Change Site Title

Edit the `<title>` tag in `index.html` and the header text.

### Add More Blog Posts

Edit the `blogPosts` array in `app.js` to add new posts.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: IndexedDB is supported in all modern browsers. If using private/incognito mode, IndexedDB may not work.

## Technical Details

### IndexedDB Schema

**Comments Store**
- `id` (auto-increment primary key)
- `postId` (indexed)
- `name` (commenter's name)
- `text` (comment content)
- `timestamp` (creation time)

**Ratings Store**
- `id` (auto-increment primary key)
- `foodName` (indexed, lowercase)
- `isYummy` (boolean)
- `timestamp` (creation time)

### Security

- All user input is escaped to prevent XSS attacks
- No server-side processing means no data leaks
- All data stays on the user's device

## File Sizes

- `index.html`: ~4 KB
- `styles.css`: ~8 KB
- `app.js`: ~10 KB
- `db.js`: ~4 KB

**Total**: ~26 KB (uncompressed)

## Performance

- **First Load**: < 1 second on most connections
- **Page Transitions**: Instant (no server requests)
- **Comments**: Instant (local storage)
- **Ratings**: Instant (local storage)

## Future Enhancement Ideas

- Add user authentication for persistent comments across devices
- Implement a backend API to share comments between visitors
- Add image uploads for blog posts
- Create a dark mode
- Add search functionality
- Implement comment moderation
- Add social sharing buttons

## License

This project is free to use and modify for personal or commercial purposes.

## Questions?

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions and troubleshooting tips.

---

**Made with ❌ for pineapple haters everywhere** 🍍
