document.addEventListener('DOMContentLoaded', () => {
    console.log("Terhubung");
    linkNavbar();
    validasiEmailNewsletter();
});

// scroll navbar offset
const linkNavbar = () => {
    const links = document.querySelectorAll('a.nav-link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const offset = window.innerHeight * 0.15;
                const targetPosition =
                    target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// validasi newsletter
const validasiEmailNewsletter = () => {
    const forms = document.querySelectorAll('.needs-validation');
    const modalElement = document.getElementById('newsletterModal');
    const modal = new bootstrap.Modal(modalElement);

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!form.checkValidity()) {
                e.stopPropagation();
            } else {
                modal.show();
                form.reset();
            }

            form.classList.add('was-validated');
        });
    });
};
