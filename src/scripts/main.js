
function createLoginLayout() {
    const container = UI.createElement("div", { class: "container-root" }, [
        UI.createElement("header", { class: "header" }, [
            UI.createElement("a", { href: "./home.html" }, "Home"),
            UI.createElement("a", { href: "./registration.html" }, "Submit"),
        ]),

        UI.createElement("div", { class: "form-wrapper" }, [
            UI.createElement("div", { class: "login-container" }, [
                UI.createElement("form", {}, [
                    UI.createElement("input", { type: "text", placeholder: "Username", required: true }),
                    UI.createElement("input", { type: "password", placeholder: "Password", required: true }),
                    UI.createElement("button", { type: "submit"}, "Login")
                ]),
            ]),
        ]),
    ]);

    const button = container.querySelector('button[type="submit"]');

    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = "./home.html"; 
    });


    UI.render(container, document.body);
}

createLoginLayout();

