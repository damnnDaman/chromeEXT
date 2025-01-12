document.getElementById("refresh").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "getRecommendations" }, (response) => {
    displayRecommendations(response.recommendations);
  });
});

function displayRecommendations(recommendations) {
  const container = document.getElementById("recommendations");
  container.innerHTML = "";

  if (recommendations && recommendations.length > 0) {
    recommendations.forEach((site) => {
      const link = document.createElement("a");
      link.href = site.url;
      link.textContent = site.title;
      link.target = "_blank";
      container.appendChild(link);
      container.appendChild(document.createElement("br"));
    });
  } else {
    container.textContent = "No recommendations found.";
  }
}
