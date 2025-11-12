const defaultConfig = {
    hero_headline: "India's Cleanest & Greenest Cab Service",
    hero_subheadline: "Powered 100% by Electricity. Driven by Innovation.",
    cta_primary: "Book Your Ride",
    cta_secondary: "Partner With Us",
    company_name: "Envi Cabs",
    tagline: "Cleanest. Greenest. Smartest Way to Move.",
    contact_email: "contact@malbork.in",
    contact_phone: "+91 6366954521",
    contact_address: "Malbork.in | Envi Cabs Division\nHouse No M6 Townsend\n Off Doddaballapur Road\n Singanayakanahalli Post\n Avalahalli\n Bangalore\n YELAHANKA\n Karnataka\n India\n 560064",
    background_color: "#0f766e",
    surface_color: "#f0fdf4",
    text_color: "#1a1a1a",
    primary_action_color: "#10b981",
    secondary_action_color: "#3b82f6",
    font_family: "Inter",
    font_size: 16
};

// --- SDK Configuration Update Function ---
async function onConfigChange(config) {
    const heroHeadline = config.hero_headline || defaultConfig.hero_headline;
    const heroSubheadline = config.hero_subheadline || defaultConfig.hero_subheadline;
    const ctaPrimary = config.cta_primary || defaultConfig.cta_primary;
    const ctaSecondary = config.cta_secondary || defaultConfig.cta_secondary;
    const companyName = config.company_name || defaultConfig.company_name;
    const tagline = config.tagline || defaultConfig.tagline;
    const contactEmail = config.contact_email || defaultConfig.contact_email;
    const contactPhone = config.contact_phone || defaultConfig.contact_phone;
    const contactAddress = config.contact_address || defaultConfig.contact_address;
    
    const backgroundColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;
    
    const fontFamily = config.font_family || defaultConfig.font_family;
    const fontSize = config.font_size || defaultConfig.font_size;

    // Update text content
    document.getElementById('hero-headline').textContent = heroHeadline;
    document.getElementById('hero-subheadline').textContent = heroSubheadline;
    // document.getElementById('cta-primary').textContent = ctaPrimary; // Commented out as CTA primary is commented in HTML
    document.getElementById('cta-secondary').textContent = ctaSecondary;
    
    // Note: If 'nav-logo' contains an image, setting textContent might overwrite the image. 
    // You might want to update the <span> inside the logo instead if the image is desired.
    // const navLogoSpan = document.getElementById('nav-logo').querySelector('span');
    document.getElementById('nav-logo-text').textContent = companyName;
    if (navLogoSpan) {
        navLogoSpan.textContent = companyName;
    }

    const footerLogo = document.getElementById('footer-logo');
    const footerLogoText = footerLogo.childNodes[2]; // Assuming text node is the third child
    if (footerLogoText && footerLogoText.nodeType === 3) {
         footerLogoText.nodeValue = companyName;
    }


    document.getElementById('footer-tagline').textContent = tagline;
    
    // Updated to correctly target both email elements (assuming two are intended)
    const contactEmails = document.querySelectorAll('#contact-email');
    if(contactEmails.length > 0) contactEmails[0].textContent = contactEmail;
    if(contactEmails.length > 1) contactEmails[1].textContent = "hello@malbork.in"; // Assuming second email is fixed
    
    document.getElementById('contact-phone').textContent = contactPhone;
    document.getElementById('contact-address').innerHTML = contactAddress.replace(/\n/g, '<br>');

    // Update colors
    document.querySelector('.hero').style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${secondaryActionColor} 100%)`;
    document.querySelector('.technology').style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${secondaryActionColor} 100%)`;
    
    const surfaceElements = document.querySelectorAll('.highlight-card, .about, .service-card, .contact-form');
    surfaceElements.forEach(el => {
        el.style.background = `linear-gradient(135deg, ${surfaceColor} 0%, #dbeafe 100%)`;
    });

    document.body.style.color = textColor;
    
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.style.color = backgroundColor;
    });

    const highlightNumbers = document.querySelectorAll('.stat-number, .highlight-card h3, .service-card h3, .info-icon');
    highlightNumbers.forEach(el => {
        el.style.color = primaryActionColor;
    });

    const gradientTexts = document.querySelectorAll('.logo, .section-title, .footer-logo');
    gradientTexts.forEach(el => {
        el.style.background = `linear-gradient(135deg, ${primaryActionColor}, ${secondaryActionColor})`;
        el.style.webkitBackgroundClip = 'text';
        el.style.webkitTextFillColor = 'transparent';
        el.style.backgroundClip = 'text';
    });

    // Update fonts
    const baseFontStack = '-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
    document.body.style.fontFamily = `${fontFamily}, ${baseFontStack}`;

    // Update font sizes proportionally
    document.querySelector('.hero h1').style.fontSize = `${fontSize * 2.2}px`;
    document.querySelector('.hero p').style.fontSize = `${fontSize * 1.5}px`;
    document.querySelectorAll('.section-title').forEach(el => {
        el.style.fontSize = `${fontSize * 2}px`;
    });
    document.querySelectorAll('.section-subtitle').forEach(el => {
        el.style.fontSize = `${fontSize * 1.2}px`;
    });
    document.body.style.fontSize = `${fontSize}px`;
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.background_color || defaultConfig.background_color,
                set: (value) => {
                    config.background_color = value;
                    window.elementSdk.setConfig({ background_color: value });
                }
            },
            {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (value) => {
                    config.surface_color = value;
                    window.elementSdk.setConfig({ surface_color: value });
                }
            },
            {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                    config.text_color = value;
                    window.elementSdk.setConfig({ text_color: value });
                }
            },
            {
                get: () => config.primary_action_color || defaultConfig.primary_action_color,
                set: (value) => {
                    config.primary_action_color = value;
                    window.elementSdk.setConfig({ primary_action_color: value });
                }
            },
            {
                get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                set: (value) => {
                    config.secondary_action_color = value;
                    window.elementSdk.setConfig({ secondary_action_color: value });
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                config.font_family = value;
                window.elementSdk.setConfig({ font_family: value });
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                config.font_size = value;
                window.elementSdk.setConfig({ font_size: value });
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["hero_headline", config.hero_headline || defaultConfig.hero_headline],
        ["hero_subheadline", config.hero_subheadline || defaultConfig.hero_subheadline],
        ["cta_primary", config.cta_primary || defaultConfig.cta_primary],
        ["cta_secondary", config.cta_secondary || defaultConfig.cta_secondary],
        ["company_name", config.company_name || defaultConfig.company_name],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["contact_email", config.contact_email || defaultConfig.contact_email],
        ["contact_phone", config.contact_phone || defaultConfig.contact_phone],
        ["contact_address", config.contact_address || defaultConfig.contact_address]
    ]);
}

// --- Main DOM Content Loaded Logic ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize SDK
    if (window.elementSdk) {
        window.elementSdk.init({
            defaultConfig,
            onConfigChange,
            mapToCapabilities,
            mapToEditPanelValues
        });
    }

    // --- Form submission handler ---
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw4H9gRrTlKHKJlraxZ1MENiFyJ25Ox6EYPur9ahnZKIRUHDmfIPW7gFu1-SbtQdJM_bA/exec"; // <--- PASTE YOUR DEPLOYMENT URL HERE

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const sendButton = form.querySelector('button[type="submit"]');

    // Collect form data
    const formData = new URLSearchParams();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('message', document.getElementById('message').value);

    // Disable button and show loading state
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';

    // Send data to Google Apps Script using fetch
    fetch(WEB_APP_URL, {
        method: 'POST',
        body: formData // Sends data in x-www-form-urlencoded format
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = 'background: #10b981; color: white; padding: 1rem; border-radius: 10px; margin-top: 1rem; text-align: center;';
        successMessage.textContent = 'Success! Your message has been sent.';
        form.appendChild(successMessage);
        
        // Reset form
        form.reset();
        
        // Remove success message and reset button after 3 seconds
        setTimeout(() => {
            successMessage.remove();
            sendButton.disabled = false;
            sendButton.textContent = 'Send Message';
        }, 3000);
    })
    .catch(error => {
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = 'background: #ef4444; color: white; padding: 1rem; border-radius: 10px; margin-top: 1rem; text-align: center;';
        errorMessage.textContent = 'Error sending message. Please try again.';
        form.appendChild(errorMessage);

        // Reset button
        sendButton.disabled = false;
        sendButton.textContent = 'Send Message';

        // Remove error message after 5 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    });
});

    // --- Mobile Menu Toggle Logic (Hamburger Menu) ---

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('mobile-nav-links');

if (menuToggle && navLinks) {
    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('open');
        
        // CRITICAL: Ensure the content is the correct symbol
        // If it WAS expanded (isExpanded is true), set it back to hamburger (&#9776;).
        // If it WAS NOT expanded (isExpanded is false), set it to cross (&times;).
        menuToggle.innerHTML = isExpanded ? '&#9776;' : '&times;'; 
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (for smooth scrolling)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Only close if the menu is visible (mobile view)
            if (window.innerWidth <= 768 && navLinks.classList.contains('open')) {
                toggleMenu(); 
            }
        });
    });
}

// ... (rest of the script)
    // --- Smooth scrolling for navigation links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});