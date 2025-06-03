const contentEl = document.getElementById("content");
const toneEl = document.getElementById("tone");
const generateBtn = document.getElementById("generateBtn");
const resultContainer = document.getElementById("resultContainer");
const resultEl = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", async () => {
  const content = contentEl.value.trim();
  const tone = toneEl.value;

  if (!content) {
    alert("Please enter some content to generate the email.");
    return;
  }

  generateBtn.disabled = true;
  generateBtn.textContent = "Generating...";

  try {
    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, tone }),
    });

    const data = await response.json();
    if(data.generated) {
      resultEl.textContent = data.generated;
      resultContainer.classList.remove("hidden");
    } else {
      resultEl.textContent = "Oops! No response.";
    }
  } catch (error) {
    resultEl.textContent = "Error generating email. Try again later.";
    resultContainer.classList.remove("hidden");
  }

  generateBtn.disabled = false;
  generateBtn.textContent = "Generate Email";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.textContent).then(() => {
    alert("Copied to clipboard!");
  });
});
