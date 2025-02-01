document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const imageOne = document.querySelector(".image-1");
  const imageTwo = document.querySelector(".image-2");
  const btnYes = document.querySelector(".btn-yes");
  const btnNo = document.querySelector(".btn-no");
  const viewCollectionButton = document.getElementById("viewCollectionBtn");

  function getRandomNumber(min, max) {
    // Calculate the random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  }

  btnNo.addEventListener("mouseover", (event) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
      newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
      newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
  });

  btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");

    // Enable the "View My Collection" button when Yes is clicked
    viewCollectionButton.disabled = false;
  });

  // Show an error alert when "No" is clicked
  btnNo.addEventListener("click", function () {
    alert("Error: Forgive me muna please...");
  });

  // Redirect to a new page when "View My Collection" is clicked
  viewCollectionButton.addEventListener("click", function () {
    // Replace with the desired URL you want to redirect to
    window.location.href = "cards.html"; // Redirect to new page
  });
});
