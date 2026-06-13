

const topics = {

    Technology: [
        "Technology has transformed the way people communicate, learn, and work. With digital tools becoming increasingly accessible, individuals can connect with others across the globe instantly.",

        "Artificial Intelligence is one of the fastest-growing technologies today. It powers recommendation systems, virtual assistants, and various automation solutions used by businesses.",

        "Cloud computing allows organizations to store and manage data efficiently. It reduces infrastructure costs and improves accessibility for users worldwide.",

        "Cybersecurity plays a critical role in protecting personal and organizational data. Strong security measures help prevent cyberattacks and unauthorized access."
    ],

    Travel: [
        "Traveling introduces people to new cultures, traditions, and perspectives. It encourages personal growth and creates unforgettable memories.",

        "Exploring historical landmarks provides valuable insights into the past. Every destination tells a unique story through its architecture and heritage.",

        "Meeting people from different backgrounds helps develop communication skills and cultural awareness. Travel often broadens one's worldview.",

        "Adventure travel offers exciting experiences such as hiking, trekking, and wildlife exploration. These activities promote confidence and resilience."
    ],

    Fitness: [
        "Regular exercise improves physical health and boosts overall energy levels. Even simple daily workouts can have long-term benefits.",

        "A balanced diet complements an active lifestyle. Proper nutrition supports muscle growth, recovery, and mental well-being.",

        "Consistency is more important than intensity when building healthy habits. Small efforts repeated daily often produce significant results.",

        "Physical activity helps reduce stress and improve mood. Exercise releases endorphins that contribute to emotional well-being."
    ],

    Education: [
        "Education empowers individuals with knowledge and critical thinking skills. It plays a vital role in personal and professional development.",

        "Reading regularly enhances vocabulary, concentration, and imagination. It is one of the simplest ways to continue learning.",

        "Online learning platforms have made education more accessible than ever. Students can acquire new skills from anywhere in the world.",

        "Lifelong learning helps individuals remain adaptable in a rapidly changing world. Continuous improvement creates new opportunities."
    ],

    Nature: [
        "Nature provides a peaceful environment that helps people relax and recharge. Spending time outdoors can improve mental health significantly.",

        "Forests, rivers, and mountains support diverse ecosystems. Protecting natural resources is essential for future generations.",

        "Environmental conservation helps maintain ecological balance. Sustainable practices reduce the impact of human activities on the planet.",

        "Observing wildlife encourages appreciation for biodiversity. Every species contributes to the health of its ecosystem."
    ]

};

function generateParagraphs() {

    const count = parseInt(document.getElementById("count").value);
    const output = document.getElementById("output");
    const topicHeading = document.getElementById("topic");

    output.innerHTML = "";

    if (!count || count < 1) {
        alert("Please enter a valid number.");
        return;
    }

    const topicNames = Object.keys(topics);

    const randomTopic =
        topicNames[Math.floor(Math.random() * topicNames.length)];

    topicHeading.innerText = `Topic: ${randomTopic}`;

    const selectedParagraphs = topics[randomTopic];

    for (let i = 0; i < count; i++) {

        const para = document.createElement("p");

        para.textContent =
            selectedParagraphs[i % selectedParagraphs.length];

        output.appendChild(para);
    }
}
