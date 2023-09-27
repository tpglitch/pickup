function onSubmit(e) {
    e.preventDefault();
    
    document.querySelector("#joke").textContent = "Loading...";
    try {
        generateJoke();
    } catch (error) {
        console.error(error);
        document.querySelector("#joke").textContent = error;

    }
}

async function generateJoke() {
    try {
        const response = await fetch("/r", {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error("Sorry man, f**king api failed u bro");
        }

        const data = await response.json();

        document.querySelector("#joke").textContent = data.joke;
    } catch(e) {
        console.error(e);
        document.querySelector("#joke").textContent = e;
    }
}

document.getElementsByTagName("form")[0].addEventListener("submit", onSubmit);