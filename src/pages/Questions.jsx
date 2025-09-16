import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle, XCircle, Loader2, Trophy } from "lucide-react";
import "../App.css";
import questionIcon from "../assets/question.png";

export default function Questions() {
    const { categoryname } = useParams();
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://islamicquize.onrender.com/questions/by_category/${categoryname}`
                );
                setQuestions(res.data);
            } catch (err) {
                console.error("Error fetching questions:", err);
                setError("❌ فشل تحميل الأسئلة. حاول مجددًا لاحقًا.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [categoryname]);

    const handleAnswerClick = (questionId, answer) => {
        setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer.id }));
    };

    // 🔥 حساب النقاط باستخدام useMemo (أداء أفضل)
    const score = useMemo(() => {
        return questions.reduce((acc, q) => {
            const selectedId = selectedAnswers[q.id];
            const correctAnswer = q.answers.find((a) => a.correct);
            if (selectedId && correctAnswer && correctAnswer.id === selectedId) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }, [selectedAnswers, questions]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Loader2 className="spin" size={40} />
                <span className="ms-2 fs-5">جاري تحميل الأسئلة...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger text-center mt-5" role="alert">
                {error}
            </div>
        );
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "750px" }}>
            {/* 📌 Score Section */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-success"> <img src={questionIcon} alt="home" width="30" className="me-2" /> {categoryname}</h2>
                <div className="card shadow-sm border-0 px-3 py-2 bg-light d-flex flex-row align-items-center gap-2">
                    <Trophy size={22} className="text-warning" />
                    <span className="fw-semibold">
                        النتيجة: {score} / {questions.length}
                    </span>
                </div>
            </div>

            {questions.map((q, index) => (
                <div key={q.id} className="card mb-4 shadow-sm border-0 rounded-3">
                    <div className="card-header bg-light fw-semibold">
                        سؤال {index + 1}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title mb-3 " >{q.questiontext}</h5>
                        <div className="d-flex flex-column gap-3">
                            {q.answers.map((a) => {
                                const selected = selectedAnswers[q.id];
                                let classes =
                                    "btn d-flex justify-content-between align-items-center text-start py-3 px-4 fs-6 rounded-3 border transition";
                                let icon = null;

                                if (selected) {
                                    if (a.correct) {
                                        classes += " bg-success text-white shadow";
                                        icon = <CheckCircle size={18} className="ms-2" />;
                                    } else if (selected === a.id) {
                                        classes += " bg-danger text-white shadow";
                                        icon = <XCircle size={18} className="ms-2" />;
                                    } else {
                                        classes += " bg-light text-muted";
                                    }
                                } else {
                                    classes += " bg-light";
                                }

                                return (
                                    <button
                                        key={a.id}
                                        onClick={() => handleAnswerClick(q.id, a)}
                                        className={classes}
                                        disabled={!!selected}
                                    >
                                        {a.answertext}
                                        {icon}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
