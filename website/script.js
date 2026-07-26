console.log("Welcome to AgriVision AI");

// Image Preview
const imageUpload = document.getElementById("imageUpload");

if (imageUpload) {

    imageUpload.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (e) {

                const preview = document.getElementById("preview");

                preview.src = e.target.result;
                preview.style.display = "block";

            };

            reader.readAsDataURL(file);

        }

    });

}

// Analyze Button
const analyze = document.getElementById("analyzeBtn");

if (analyze) {

    analyze.addEventListener("click", () => {

        const crop = document.getElementById("cropSelect").value;

        if (crop === "") {
            alert("Please select a crop first.");
            return;
        }

        const image = document.getElementById("imageUpload").files[0];

        if (!image) {
            alert("Please upload a crop image first.");
            return;
        }

        let disease = "";
        let confidence = "";
        let severity = "";
        let recommendation = "";

        switch (crop) {

            case "Tomato":
                disease = "Early Blight";
                confidence = "96%";
                severity = "Medium";
                recommendation = "Spray Mancozeb within 48 hours.";
                break;

            case "Wheat":
                disease = "Leaf Rust";
                confidence = "94%";
                severity = "Low";
                recommendation = "Apply Propiconazole spray.";
                break;

            case "Cotton":
                disease = "Leaf Curl Virus";
                confidence = "91%";
                severity = "High";
                recommendation = "Remove infected plants and control whiteflies.";
                break;

            case "Soybean":
                disease = "Healthy";
                confidence = "99%";
                severity = "None";
                recommendation = "No treatment required.";
                break;

        }

        document.getElementById("cropName").textContent = crop;
        document.getElementById("disease").textContent = disease;
        document.getElementById("confidence").textContent = confidence;
        document.getElementById("recommendation").textContent = recommendation;

const badge = document.getElementById("severityBadge");

badge.textContent = severity;

if (severity === "High") {
    badge.style.color = "red";
} else if (severity === "Medium") {
    badge.style.color = "orange";
} else {
    badge.style.color = "lime";
}

        const loading = document.getElementById("loading");

loading.style.display = "block";

setTimeout(() => {

    loading.style.display = "none";

    document.getElementById("result").style.display = "block";

}, 2500);

    });

}