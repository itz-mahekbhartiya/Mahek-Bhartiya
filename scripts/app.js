document.addEventListener('DOMContentLoaded', function () {
    const targetDivs = document.querySelectorAll('.theEffect');


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add Tailwind class on entering viewport
                
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
                
            } else {
                // Remove Tailwind class when not in viewport
                
                entry.target.classList.remove('opacity-100');
                entry.target.classList.add('opacity-0');
                
            }
        });},
        {
            root: null,           // Use the browser viewport as the container
            rootMargin: '0px',    // No margin around the container
            threshold: 0.1        // Trigger when 10% of the element is visible
    });

    targetDivs.forEach(div => {
        observer.observe(div);
    });
    
});