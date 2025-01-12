const SIMILARWEB_API_KEY = "your_api_key_here";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getRecommendations") {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const currentUrl = new URL(tabs[0].url);
      console.log("Current URL:", currentUrl);
      const hostname = currentUrl.hostname;
      const recommendations = await fetchRecommendations(hostname);
      console.log("Recommendations:", recommendations);
      sendResponse({ recommendations });
    });
    return true; // Keeps the message channel open for async response
  }
});

async function fetchRecommendations(hostname) {
  try {
    const response = await fetch(
      `https://api.similarweb.com/v1/website/${hostname}/similar-sites?api_key=${SIMILARWEB_API_KEY}`
    );
    if (!response.ok) {
      console.error("API request failed with status:", response.status);
      return [];
    }
    const data = await response.json();
    console.log("API Response JSON:", data);
    if (!data.similar_sites) {
      console.error("No similar sites found in the response");
      return [];
    }
    return data.similar_sites.map((site) => ({
      title: site.title,
      url: site.url,
    }));
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
}
