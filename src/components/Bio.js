// components/Bio.js

export default function Bio() {

    const bioText = (
    <>
        I’m <strong>Maaz Siddiqui</strong>, a{" "}
        <strong>Computer Engineering student and Full-Stack Developer</strong>{" "}
        with a strong foundation in{" "}
        <strong>programming, problem-solving, clean code, and structured development</strong>.
        I work with{" "}
        <strong>Python, JavaScript, Java, React, Django, Flask, Git, and modern web technologies</strong>,
        while exploring{" "}
        <strong>Artificial Intelligence, automation, data processing, and scalable system design</strong>.
        

        I completed my <strong>schooling at St. Stanislaus High School, Bandra</strong>,
        followed by a{" "}
        <strong>Diploma in Computer Engineering from M.H. Saboo Siddik Polytechnic, Mumbai</strong>.
        I am currently pursuing my{" "}
        <strong>B.E. in Computer Engineering at Thakur College of Engineering & Technology (TCET), Kandivali</strong>.

        I enjoy transforming ideas into{" "}
        <strong>efficient, scalable, and user-focused solutions</strong>,
        combining engineering discipline with innovative thinking.
    </>
);

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Java",
        "Python",
        "Flask",
        "Django",
        "Git",
        "GitHub",
        "AWS",
        "OOPS",
        "DSA",
        "Postman",
        "Supabase",
        "Mysql",
        "Linux",
        "Vibe Coding",
        "Web Scraping"
    ];

    return (
        <div className="bio-section">

            {/* ABOUT */}

            <div className="about-section">

                <div className="section-heading">
                    <span>03</span>
                    <h3>About</h3>
                </div>

                <p className="bio-text">
                    {bioText}
                </p>

            </div>


            {/* TECH STACK */}

            <div className="skills-section">

                <div className="section-heading">
                    <span>04</span>
                    <h3>Tech Stack</h3>
                </div>

                <div className="skills-heading">
                    <span>TECHNOLOGIES</span>
                    <span>{skills.length} TOOLS</span>
                </div>

                <div className="skills-container">

                    {skills.map((skill) => (
                        <span
                            className="skill-tag"
                            key={skill}
                        >
                            {skill}
                        </span>
                    ))}

                </div>

            </div>

        </div>
    );
}
