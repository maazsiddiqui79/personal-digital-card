// components/Header.js
export default function Header() {
    const year = new Date()
    return (
        <header className="portfolio-header">

            <div className="header-brand">
                Siddiqui <span>.</span> 
            </div>

            <div className="header-status">
                <span></span>
                DIGITAL IDENTITY
            </div>

            <div className="header-year">
                {year.getFullYear()}
            </div>

        </header>
    );
}