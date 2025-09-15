import { motion } from "framer-motion";
import { BookOpen, Target, Heart } from "lucide-react";
import "../App.css";

export default function About() {
    return (
        <div className="about-container">
            <motion.h1
                className="about-title"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                About Islamic Quize
            </motion.h1>

            <motion.p
                className="about-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >

                هذا الموقع يهدف إلى نشر العلم الشرعي بطريقة حديثة وسهلة الاستخدام،
                حيث يوفر أقسام مختلفة مثل السنة، العقيدة، التاريخ الإسلامي، والأذكار.
            </motion.p>

            <div className="about-cards">
                <motion.div
                    className="about-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <BookOpen className="card-icon" />
                    <h3>المصادر</h3>
                    <p>كل المعلومات  والأحاديث مصادرها رسمية وموثوقة</p>
                </motion.div>

                <motion.div
                    className="about-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Target className="card-icon" />
                    <h3>الهدف</h3>
                    <p>مساعدة المسلمين على تعلم دينهم بسهولة واختبار معلوماتهم الدينية   </p>
                </motion.div>

                <motion.div
                    className="about-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Heart className="card-icon" />
                    <h3>القيمة</h3>
                    <p>نسعى لإحياء السنن المهجورة وربط المسلم بتراثه الأصيل</p>
                </motion.div>
            </div>
        </div>
    );
}
