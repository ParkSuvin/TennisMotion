const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");
const analyzeBtn = document.getElementById("analyzeBtn");

let selectedFile = null;

uploadBox.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (e) => {
    selectedFile = e.target.files[0];
    if (selectedFile) {
        uploadBox.innerHTML = `<p>${selectedFile.name} 업로드 완료</p>`;
        analyzeBtn.disabled = false;
    }
});