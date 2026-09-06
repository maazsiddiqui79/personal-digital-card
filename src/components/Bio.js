// components/Bio.js

export default function Bio() {
  const bioText = (
    <>
      I’m <strong>Maaz Siddiqui</strong>, a{" "}
      <strong>Computer Engineering student and Full-Stack Developer</strong>{" "}
      focused on <strong>building scalable web applications</strong> and solving
      real-world problems with clean, structured code. I work with{" "}
      <strong>Python, JavaScript, Java, React, Django, Flask, and Git</strong>,
      while exploring{" "}
      <strong>AI, automation, and modern web technologies</strong>. I completed
      my <strong>Diploma in Computer Engineering</strong> from{" "}
      <strong>MHSSP</strong> and am currently pursuing my{" "}
      <strong>B.E. in Computer Engineering at TCET, Kandivali</strong>.
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
    "Web Scraping",
  ];

  return (
    <div className="bio-section">
      {/* ABOUT */}

      <div className="about-section">
        <div className="section-heading">
          <span>03</span>
          <h3>About</h3>
        </div>

        <p className="bio-text">{bioText}</p>
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
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
