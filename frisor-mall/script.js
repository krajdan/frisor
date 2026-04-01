document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.querySelector(".close-btn");
    const mobileMenu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Hitta ALLA knappar som har klassen btn-book eller mobile-book-btn
    const bookButtons = document.querySelectorAll('.btn-book, .mobile-book-btn');

    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });
    });

    // Stäng modalen när man klickar på X
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        }
    }

    // Stäng modalen om man klickar på den mörka bakgrunden
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Hamburgermeny Toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Stäng menyn när man klickar på en länk
    document.querySelectorAll('.nav-links').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});