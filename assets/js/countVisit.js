//// Function to fetch the visit count from the Count API
//async function fetchVisitCount() {
//  try {
//    const response = await fetch('https://api.countapi.xyz/hit/namazifar.github.io/visits');
//    const data = await response.json();
//    return data.value;
//  } catch (error) {
//    console.log('Error fetching visit count:', error);
//    return 0;
//  }
//}

//// Function to update the visit count on the webpage
//async function updateVisitCount() {
//  const visitCountElement = document.getElementById('visitCount');
//  const visitCount = await fetchVisitCount();
//  visitCountElement.textContent = visitCount;
//}

//// Call the function to update the visit count when the page loads
//updateVisitCount();