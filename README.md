# Urspace Website

A modern, responsive website for Urspace - AI Solutions for Business. Built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
urspace/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── assets/
    └── images/        # Image assets
```

## Required Assets

Before deploying, ensure you have the following assets:

### Images
- `assets/images/case-study-1.jpg` - Case study image 1
- `assets/images/case-study-2.jpg` - Case study image 2
- `assets/images/case-study-3.jpg` - Case study image 3

## Features

- Mobile-first responsive design
- Smooth scroll navigation
- Intersection Observer animations
- Form handling with loading states
- Case studies carousel
- Mobile menu for smaller screens
- Glassmorphism UI elements
- Optimized performance

## Browser Support

The website is compatible with modern browsers that support:
- CSS Grid
- CSS Custom Properties
- Intersection Observer API
- Backdrop Filter

For older browsers, consider adding appropriate polyfills.

## Deployment

1. Replace placeholder assets with your own media files
2. Update the case studies data in `main.js` with your actual content
3. Configure your form endpoint in the contact form section
4. Deploy to any static hosting service:

### Example Deployment Methods

**Netlify:**
1. Connect your repository
2. Set build command: `N/A` (static site)
3. Set publish directory: `/`

**GitHub Pages:**
1. Enable GitHub Pages in repository settings
2. Select main branch as source
3. Site will be live at `username.github.io/repository`

**Vercel:**
1. Import your repository
2. Vercel will auto-detect static configuration
3. Deploy

## Development

To run locally:
1. Clone the repository
2. Open `index.html` in your browser
3. For live reload, use a local server:
   ```bash
   npx serve
   # or
   python -m http.server 8000
   ```

## Customization

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
    --color-primary: #000000;
    --color-secondary: #666666;
    --color-accent: #007AFF;
    /* ... */
}
```

### Typography
The site uses Montserrat from Google Fonts. To change:
1. Update font import in `index.html`
2. Modify `--font-primary` in `style.css`

### Content
- Update text content in `index.html`
- Modify case studies data in `main.js`
- Adjust form fields in the contact section

## Performance Optimization

- Images should be optimized and served in next-gen formats (WebP)
- Video files should be compressed appropriately
- Consider lazy loading for below-the-fold images
- Implement browser caching through your hosting service

## License

MIT License - feel free to use this template for your own projects.

## Support

For questions or issues, please open a GitHub issue in the repository. 