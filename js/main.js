// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainContent = document.querySelector('main');

    mobileMenuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Toggle menu state
        this.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        mainContent.classList.toggle('menu-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navLinks.contains(event.target) || 
                            mobileMenuToggle.contains(event.target);
        
        if (!isClickInside && navLinks.classList.contains('active')) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
            mainContent.classList.remove('menu-active');
        }
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Share buttons functionality
const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
    button.addEventListener('click', () => {
        const platform = button.getAttribute('aria-label').toLowerCase().replace('share on ', '');
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        let shareUrl;
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('#email').value;
    
    // Here you would typically send the email to your server
    console.log('Newsletter subscription for:', email);
    
    // Show success message
    alert('Thank you for subscribing!');
    newsletterForm.reset();
}); 