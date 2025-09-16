import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Information() {
    const [infos, setInfos] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        axios
            .get("https://islamicquize.onrender.com/informations")
            .then((res) => setInfos(res.data))
            .catch((err) => console.error("❌ Error fetching infos:", err));
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center fw-bold text-success">
                🌿 قائمة السنن والأذكار
            </h2>

            {infos.length === 0 ? (
                <p className="text-center text-muted fw-semibold">
                    ⏳ جاري تحميل المعلومات...
                </p>
            ) : (
                <div className="row">
                    {infos.map((info) => (
                        <div key={info.id} className="col-md-6 mb-4">
                            <div
                                className={`card shadow-sm border-0 h-100 info-card ${expandedId === info.id ? "expanded" : ""
                                    }`}
                                onClick={() => toggleExpand(info.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-success">
                                        {info.title}
                                    </h5>

                                    {expandedId === info.id && (
                                        <div className="mt-3 fade-in">
                                            <p className="card-text text-muted">{info.description}</p>
                                            {info.resources && (
                                                <p className="text-success fw-semibold mt-2">
                                                    📖 {info.resources}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Information;
