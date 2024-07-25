 
   function animateButton(button) {
        button.classList.remove("animate");
        setTimeout(() => {
            button.classList.add("animate");
        }, 600); //1s = 1000ms
    }

    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            animateButton(button);
        });
    });


    function handleButtonClick(event, url) {
        event.preventDefault();
        const button = event.target;
        animateButton(button);
        setTimeout(() => {
            window.location.href = url;
        }, 1000); // Delay to match the animation duration
    }

  