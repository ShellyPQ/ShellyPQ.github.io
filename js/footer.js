const footer = document.querySelector("#site-footer");

footer.innerHTML = `
    <div class="footer-content">

        <div class="footer-left">
            <span class="footer-name">MICHELLE PORTELLI</span>
            <span class="footer-role">Game Programmer</span>
        </div>

        <div class="footer-links">
            <a href="contact.html" class="footer-icon" aria-label="Contact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 5h18v14H3V5zm2 2v.5l7 5 7-5V7H5zm14 10V10l-7 5-7-5v7h14z"/>
                </svg>
            </a>

            <a href="www.linkedin.com/in/shellycodes"
               class="footer-icon"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn">

                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.1 20.45H3.54V8.98H7.1v11.47z"/>
                </svg>
            </a>

            <a href="https://shellycodes.itch.io/"
               class="footer-icon"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Itch.io">

                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3.13 1.34C2.08 1.96.04 4.29.04 5.62v2.2c0 1.39 1.3 2.61 2.67 2.61 1.58 0 2.89-1.31 2.89-2.87 0 1.56 1.27 2.87 2.85 2.87 1.59 0 2.86-1.31 2.86-2.87 0 1.56 1.29 2.87 2.87 2.87s2.85-1.31 2.85-2.87c0 1.56 1.31 2.87 2.89 2.87 1.36 0 2.64-1.22 2.64-2.61v-2.2c0-1.33-2.03-3.66-3.08-4.28C16.23.99 7.41.99 3.13 1.34zM5.57 10.96c-.64.66-1.68 1.08-2.86 1.08-.27 0-.53-.03-.78-.08-.1 1.05-.15 2.28-.15 3.77 0 2.55.18 4.63.84 5.29.68.68 3.23.83 9.38.83s8.7-.15 9.38-.83c.66-.66.84-2.74.84-5.29 0-1.49-.05-2.72-.15-3.77-.25.05-.51.08-.78.08-1.18 0-2.22-.42-2.86-1.08-.69.66-1.66 1.08-2.85 1.08-1.18 0-2.2-.42-2.87-1.08-.68.66-1.68 1.08-2.86 1.08-1.19 0-2.18-.42-2.86-1.08z"/>
                </svg>
            </a>
        </div>

    </div>
`;