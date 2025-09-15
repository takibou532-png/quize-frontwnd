import logo from "../assets/logo.png";
import "../App.css"; // نزيدو التنسيقات هنا

export default function Home() {
  return (
    <div className="home-container">
      {/* اللوقو */}
      <img src={logo} alt="Islamic Quiz Logo" className="home-logo" />

      {/* النصوص */}
      <h1 className="home-title">
        Welcome to Islamic Quiz Platform
      </h1>
      <h2 className="home-title-ar">
        مرحبًا بكم في منصة الاختبارات الإسلامية
      </h2>

      <p className="home-subtitle">
        Learn, explore and test your knowledge about Islam.<br />
        تعلم، استكشف، واختبر معلوماتك عن الإسلام.
      </p>
    </div>
  );
}
