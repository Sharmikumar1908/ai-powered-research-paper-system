const papers = [
    {
        title: "Artificial Intelligence in Healthcare",
        description:
        "Research on using Artificial Intelligence and Machine Learning for disease prediction and medical diagnosis.",
        keywords: ["ai", "artificial intelligence", "healthcare", "machine learning", "medical"]
    },

    {
        title: "Deep Learning for Image Recognition",
        description:
        "A study of deep learning and neural networks for image classification and computer vision.",
        keywords: ["deep learning", "image", "computer vision", "neural network"]
    },

    {
        title: "Machine Learning in Cybersecurity",
        description:
        "Machine Learning techniques for detecting cyber attacks, malware and security threats.",
        keywords: ["machine learning", "cybersecurity", "security", "malware", "cyber"]
    },

    {
        title: "Natural Language Processing",
        description:
        "Research on computers understanding human language using Natural Language Processing and AI.",
        keywords: ["nlp", "natural language", "language", "ai", "text"]
    },

    {
        title: "Artificial Intelligence in Education",
        description:
        "AI-based educational systems that provide personalized learning and student recommendations.",
        keywords: ["ai", "education", "learning", "student", "personalized"]
    },

    {
        title: "Blockchain for Data Security",
        description:
        "Research on blockchain technology for secure and decentralized data management.",
        keywords: ["blockchain", "security", "data", "decentralized"]
    }
];


function searchPapers() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const results = document.getElementById("results");

    results.innerHTML = "";

    if (input === "") {
        results.innerHTML = "<p>Please enter a research topic.</p>";
        return;
    }

    const matchingPapers = papers
        .map(paper => {

            let score = 0;

            paper.keywords.forEach(keyword => {

                if (input.includes(keyword) ||
                    keyword.includes(input)) {

                    score += 1;
                }

            });

            return {
                ...paper,
                score: score
            };

        })
        .filter(paper => paper.score > 0)
        .sort((a, b) => b.score - a.score);


    if (matchingPapers.length === 0) {

        results.innerHTML =
            "<p>No related research papers found.</p>";

        return;
    }


    matchingPapers.forEach(paper => {

        const div = document.createElement("div");

        div.className = "paper";

        const percentage =
            Math.min(paper.score * 25, 100);

        div.innerHTML = `
            <h2>${paper.title}</h2>

            <p>${paper.description}</p>

            <p class="score">
                Relevance: ${percentage}%
            </p>
        `;

        results.appendChild(div);

    });
}