const routes = [
    { Route: 'From EKCH/ESMS to S3 via N630', Direction: 'Climb to', Level: 190, COP: 'N630', CopLevel: 0,
    CopPosition: 'nothing', ReleaseDirection: 'Climb' , within: 20},
    { Route: 'From S3 to EKCH/ESMS via Lisan', Direction: 'Descent to', Level: 100, COP: 'Lisan', CopLevel: 160,
    CopPosition: 'or below', ReleaseDirection: 'Descent' , within: 20},
];


let currentRouteIndex = 0;
let RouteText;
const crossSelect = document.getElementById('cross-select');
const crossOptionsDiv = document.getElementById('crossOptions');
const releaseSelect = document.getElementById('release-select');
const releaseOptionsDiv = document.getElementById('releaseOptions');
const routeSelect = document.getElementById('route-select');
const atcrossselect = document.getElementById('atcross-select');

document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code goes here
    RouteText = document.getElementById('current-route');
    CopText = document.getElementById('cop-name');

    displayCurrentRoute();
  });

  function displayCurrentRoute() {
    const currentRoute = routes[currentRouteIndex];
    RouteText.textContent = currentRoute.Route;
    CopText.textContent = currentRoute.COP;
}

function handleCrossSelectChange() {
  
    // Check if the selected value is "nothing"
    if (crossSelect.value === 'nothing') {
      // If yes, hide the cross-options div
      crossOptionsDiv.style.display = 'none';
    } else {
      // If no, show the cross-options div
      crossOptionsDiv.style.display = 'flex';
    }
  }
  
function handleReleaseSelectChange() {

    // Check if the selected value is "nothing"
    if (releaseSelect.value === 'nothing') {
        // If yes, hide the cross-options div
        releaseOptionsDiv.style.display = 'none';
    } else {
        // If no, show the cross-options div
        releaseOptionsDiv.style.display = 'flex';
    }
}

function handleRouteSelectChange() {

    // Check if the selected value is "nothing"
    if (routeSelect.value === 'At') {
        // If yes, hide the cross-options div
        atcrossselect.style.display = 'flex';
    } else {
        // If no, show the cross-options div
        atcrossselect.style.display = 'none';
    }
    if (routeSelect.value === 'or below' || routeSelect.value === 'or above') {
        // If yes, hide the cross-options div
        atcrossselect.style.display = 'none';
    }
}

function resetCard() {
    atcrossselect.style.display = 'none';
    crossOptionsDiv.style.display = 'flex';
    releaseOptionsDiv.style.display = 'flex';
    crossSelect.value = 'or below';
    releaseSelect.value = 'Climb';
    routeSelect.value = 'Climb to';
}

function nextRoute() {
    // Get user inputs
    const selectedDirection = document.getElementById('route-select').value;
    const enteredLevel = document.getElementById('route-input').value;
    const enteredCopLevel = document.getElementById('cross-input').value;
    const selectedCopPosition = document.getElementById('cross-select').value;
    const selectedReleaseDirection = document.getElementById('release-select').value;
    const enteredWithin = document.getElementById('release-input').value;

    // Get current route for comparison
    const currentRoute = routes[currentRouteIndex];

    // Check if inputs match current route
    const isDirectionCorrect = selectedDirection === currentRoute.Direction;
    const isLevelCorrect = enteredLevel == currentRoute.Level; // == is intentional for loose comparison
    const isCopLevelCorrect = enteredCopLevel == currentRoute.CopLevel; // == is intentional for loose comparison
    const isCopPositionCorrect = selectedCopPosition === currentRoute.CopPosition;
    const isReleaseDirectionCorrect = selectedReleaseDirection === currentRoute.ReleaseDirection;
    const isWithinCorrect = enteredWithin == currentRoute.within; // == is intentional for loose comparison

    // Check if all inputs are correct
    const isAllCorrect = isDirectionCorrect && isLevelCorrect && isCopLevelCorrect &&
        isCopPositionCorrect && isReleaseDirectionCorrect && isWithinCorrect;

    // If all inputs are correct, move to the next route
    if (isAllCorrect) {
        // Clear input fields
        document.getElementById('route-input').value = '';
        document.getElementById('cross-input').value = '';
        document.getElementById('release-input').value = '';

        // Reset select fields to default
        document.getElementById('route-select').selectedIndex = 0;
        document.getElementById('cross-select').selectedIndex = 0;
        document.getElementById('release-select').selectedIndex = 0;
        
        currentRouteIndex++;
        if (currentRouteIndex < routes.length) {
            displayCurrentRoute();
        } else {
            alert('Congratulations! You have completed all routes.');
            // Optionally reset or redirect to another page
            currentRouteIndex = 0;
            displayCurrentRoute();
        }
    } else {
        alert('Incorrect inputs. Please try again.');
        // Optionally clear or highlight incorrect inputs
    }
}
