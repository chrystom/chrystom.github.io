// NOTE: below comment is now obsolete since I actually decided to program
// actual programming? imagine. mark-up languages are the only languages i speak.

let folder = document.querySelector("#folder");
let fldHighlight = false;

// maybe some folder functionality in the near future???
folder.addEventListener("click", () => {
    console.log("clicked");
    if (fldHighlight) {
        folder.classList.remove("single-clicked");
        fldHighlight = false;
    } else {
        folder.classList.add("single-clicked");
        fldHighlight = true;
    }
});

// folder.addEventListener("dblclick", (event) => {
//     console.log("double-clicked");
// });