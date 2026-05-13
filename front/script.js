async function searchVideos() {
  const query = document.getElementById("searchInput").value;

  const res = await fetch(`${API_URL}/search?q=${query}`);
  const data = await res.json();

  const container = document.getElementById("results");
  container.innerHTML = "";

  data.forEach(video => {
    container.innerHTML += `
      <div class="bg-gray-900 p-4 rounded">
        <img src="${video.thumbnail}" class="w-full rounded">
        <h3 class="mt-2 text-lg">${video.title}</h3>
        <a class="text-blue-400"
           href="https://www.youtube.com/watch?v=${video.videoId}"
           target="_blank">
           Ver video
        </a>
      </div>
    `;
  });
}