# Deployment Guide: The Pineapple Hater's Sanctuary

This guide will walk you through deploying your blog to GitHub Pages at `https://djpitgamer.github.io/`.

## Prerequisites

Before you begin, ensure you have the following:

- A GitHub account (you already have one: `djpitgamer`)
- Git installed on your computer
- The blog files ready to deploy

## Step 1: Prepare Your Repository

First, navigate to your project directory on your computer:

```bash
cd /path/to/pineapple-hater-blog
```

Initialize a Git repository (if you haven't already):

```bash
git init
```

Add all files to the repository:

```bash
git add .
```

Create your first commit:

```bash
git commit -m "Initial commit: Pineapple Hater Blog"
```

## Step 2: Create/Update Your GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the **+** icon in the top-right corner and select **New repository**
3. Name your repository: **djpitgamer.github.io**
   - This is the special repository name that GitHub Pages recognizes
4. Make sure it's set to **Public** (required for GitHub Pages)
5. Do **NOT** initialize with a README, .gitignore, or license
6. Click **Create repository**

## Step 3: Connect Your Local Repository to GitHub

After creating the repository on GitHub, you'll see instructions. Follow these commands in your terminal:

```bash
git remote add origin https://github.com/djpitgamer/djpitgamer.github.io.git
git branch -M main
git push -u origin main
```

**Note:** You may be prompted to authenticate. If you're using HTTPS, you'll need to:
- Either use a Personal Access Token (PAT) instead of your password
- Or set up SSH keys for authentication

### Option A: Using Personal Access Token (Easier)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **Generate new token (classic)**
3. Give it a name like "Blog Deployment"
4. Select scopes: `repo` (full control of private repositories)
5. Click **Generate token** and copy it
6. When Git asks for a password, paste the token instead

### Option B: Using SSH (More Secure)

If you prefer SSH, follow [GitHub's SSH setup guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

## Step 4: Push Your Files to GitHub

Once your remote is configured, push your code:

```bash
git push -u origin main
```

This uploads all your blog files to GitHub.

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/djpitgamer/djpitgamer.github.io`
2. Click **Settings** (gear icon)
3. In the left sidebar, click **Pages**
4. Under "Source," select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

GitHub will now build and deploy your site. This usually takes 1-2 minutes.

## Step 6: Verify Your Deployment

After a few moments, you should see a message saying:

> "Your site is published at https://djpitgamer.github.io/"

Visit this URL in your browser to see your live blog!

## Making Updates to Your Blog

Whenever you want to update your blog, follow these steps:

### 1. Make Changes Locally

Edit your HTML, CSS, or JavaScript files as needed.

### 2. Commit Your Changes

```bash
git add .
git commit -m "Update: Description of your changes"
```

### 3. Push to GitHub

```bash
git push origin main
```

Your changes will be live within 1-2 minutes.

## Project Structure

Your blog is organized as follows:

```
djpitgamer.github.io/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── app.js              # Main application logic
├── db.js               # IndexedDB management
└── DEPLOYMENT_GUIDE.md # This file
```

## Features Explained

### Blog Posts

The blog includes 4 pre-written posts about pineapple and pizza. To add more posts, edit the `blogPosts` array in `app.js`:

```javascript
const blogPosts = [
    {
        id: 5,
        title: 'Your New Post Title',
        date: 'March 20, 2024',
        excerpt: 'A short preview of your post...',
        content: `Full content of your post...`
    },
    // ... more posts
];
```

### Comments System

Comments are stored locally in your browser using IndexedDB. Each visitor's comments are saved on their device and won't sync across browsers or devices. This is intentional for privacy.

### Ratings System

The ratings feature lets visitors rate foods as "YUMMY" or "NOT YUMMY". Ratings are also stored locally in IndexedDB.

## Customization

### Change the Site Title

Edit the `<title>` tag in `index.html`:

```html
<title>Your New Title</title>
```

### Change the Header

Edit the header in `index.html`:

```html
<h1>🍍 Your Custom Title 🍍</h1>
<p class="tagline">Your custom tagline</p>
```

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ff6b6b;      /* Main color */
    --secondary-color: #ffd93d;    /* Accent color */
    --dark-color: #2c3e50;         /* Text color */
    /* ... more colors */
}
```

### Add More Blog Posts

Simply add new objects to the `blogPosts` array in `app.js` with unique IDs.

## Troubleshooting

### Site Not Showing Up

- Wait 2-3 minutes after pushing
- Check that your repository is named exactly `djpitgamer.github.io`
- Verify the repository is **Public**
- Check the Pages settings in your repository

### Changes Not Appearing

- Make sure you've committed and pushed your changes
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Wait a minute for GitHub to rebuild the site

### Comments Not Saving

Comments are stored in your browser's IndexedDB. If they're not saving:
- Check that your browser allows IndexedDB (not in private/incognito mode)
- Try a different browser
- Check the browser console for errors (F12 → Console tab)

### Git Authentication Issues

If you're having trouble pushing:
- Make sure you're using a Personal Access Token (not your password)
- Verify your remote URL: `git remote -v`
- If the URL is wrong, fix it: `git remote set-url origin https://github.com/djpitgamer/djpitgamer.github.io.git`

## Advanced: Custom Domain

If you want to use a custom domain instead of `djpitgamer.github.io`, you can:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Go to your repository Settings → Pages
3. Under "Custom domain," enter your domain
4. Update your domain's DNS settings to point to GitHub Pages

See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Need Help?

- GitHub Pages Documentation: https://pages.github.com/
- GitHub Help: https://docs.github.com/en/pages
- Check the browser console for JavaScript errors: Press F12

## Summary

You now have a fully functional pineapple hater blog deployed to the internet! Share your URL with friends and let them join the sanctuary. Happy blogging! 🍍❌
