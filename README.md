# UrSpace

A modern, responsive multi-page website for UrSpace - connecting and empowering university communities through three main offerings: UrNetwork, UrStyle, and UrSocials.

## Project Overview

UrSpace provides three main services:

1. **UrNetwork**: Alumni engagement and networking platform
   - Connects students with alumni mentors
   - Provides career opportunities and guidance
   - Offers data-driven advising and outcome reporting
   - Facilitates department-alumni relationships

2. **UrStyle**: Premium collegiate apparel
   - Custom-made organization merchandise
   - Premium quality branded products
   - Matches organizations' unique style preferences

3. **UrSocials**: Event planning and social connections
   - Curated social events and meetups
   - Enhances campus social presence
   - Creates meaningful connections
   - Boosts organizational aura

## Project Structure

```
urspace/
├── index.html              # Main landing page
├── network/               
│   └── index.html         # UrNetwork page
├── style/               
│   └── index.html         # UrStyle page
├── socials/               
│   └── index.html         # UrSocials page
├── css/
│   ├── style.css         # Main stylesheet
│   └── network.css       # Network-specific styles
├── js/
│   └── main.js          # JavaScript functionality
└── assets/
    └── images/          # Image assets
```

## Features

- Modern, responsive design across all pages
- Consistent navigation and branding
- Service-specific landing pages
- Contact forms with email support
- Mobile-first approach
- Smooth animations and transitions
- Social media integration
- Professional footer with contact information

## Technology Stack

- HTML5 for structure
- CSS3 for styling
  - Custom properties for theming
  - Flexbox and Grid for layouts
  - Media queries for responsiveness
- Vanilla JavaScript for interactivity
- Google Fonts (Montserrat) for typography

## Browser Support

The website is compatible with modern browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties
- Modern JavaScript features
- CSS transitions and animations

## Development

To run locally:
1. Clone the repository
2. Open any of the HTML files in your browser
3. For live reload, use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

## Customization

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
    --color-primary: #000000;
    --color-secondary: #666666;
    --color-accent: #007AFF;
}
```

### Content
- Update page content in respective `index.html` files
- Modify styles in `css/` directory
- Adjust JavaScript functionality in `main.js`

## Contact

For inquiries about:
- UrNetwork: support@urspace.us
- UrStyle: support@urspace.us
- UrSocials: support@urspace.us

## Connect

- LinkedIn: [UrSpace](https://www.linkedin.com/in/avr12/)

## License

MIT License - feel free to use this template for your own projects. 