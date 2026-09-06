// components/SocialLinks.js

export default function SocialLinks() {

    const Platform = [
        "Email",
        "GitHub",
        "Portfolio",
        "LinkedIn",
        "Instagram",
        "X",
        "Snapchat",
        "Leetcode",
        "Discord",
        "Whatsapp",
    ];

    const Links = [
        "siddiqui.maaz79@gmail.com",
        "https://github.com/maazsiddiqui79",
        "https://www.linkedin.com/in/siddiqui-maazzz/",
        "https://the-maaz-portfolio.vercel.app/",
        "https://www.instagram.com/siddiqui.maazzz/",
        "https://x.com/siddiquimaazzz",
        "https://www.snapchat.com/@siddiqui.maazzz",
        "https://leetcode.com/u/siddiqui-maaz79/",
        "https://discord.com/users/760879100495265814",
        "https://wa.me/918850281310",
    ];

    return (
        <div className="social-links-section">

            <div className="social-heading">
                <span>02</span>
                <h3>Connect</h3>
            </div>

            <div className="social-list">

                {Platform.map((p, index) => (

                    <a
                        className="social-link"
                        key={p}
                        href={
                            index === 0
                                ? `mailto:${Links[index]}`
                                : Links[index]
                        }
                        target={
                            index === 0
                                ? undefined
                                : "_blank"
                        }
                        rel={
                            index === 0
                                ? undefined
                                : "noopener noreferrer"
                        }
                    >

                        <div className="social-left">

                            <span className="social-number">
                                0{index + 1}
                            </span>

                            <span className="social-platform">
                                {p}
                            </span>

                        </div>

                        <span className="social-arrow">
                            ↗
                        </span>

                    </a>

                ))}

            </div>

        </div>
    );
}
