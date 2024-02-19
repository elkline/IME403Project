function displayPopup() {
    // Create a div element for the pop-up
    var popupDiv = document.createElement('div');
    popupDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;';

    // Create content for the pop-up
    var popupContent = document.createElement('div');
    popupContent.innerHTML = 'This is your pop-up content for YouTube.';
    popupDiv.appendChild(popupContent);

    // Create a button element
    var button = document.createElement('button');
    button.innerHTML = 'Close';
    button.style.cssText = 'margin-top: 10px; padding: 5px 10px; background-color: #007bff; color: white; border: none; cursor: pointer;';

    // Add event listener to close the pop-up when the button is clicked
    button.addEventListener('click', function() {
        // Remove the pop-up from the DOM
        popupDiv.remove();
    });

    // Append the button to the pop-up
    popupDiv.appendChild(button);

    // Append the pop-up div to the body of the page
    document.body.appendChild(popupDiv);
}
