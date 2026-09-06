// components/PersonalInfo.js
export default function PersonalInfo() {
  const name = "Maaz Siddiqui";
  const role = "Fullstack Developer";
  const loc = "Mumbai, Maharashtra";

  return (
    <div className="personal-info">
      <p className="personal-index">01 / IDENTITY</p>

      <h2 className="name">{name}</h2>

      <p className="role">{role}</p>

      <div className="personal-meta">
        <span>{loc}</span>

        <div className="clg-info">
          <span></span>
          2nd Year B.E. <span></span> TCET Kandivali
        </div>
        
      </div>
    </div>
  );
}
