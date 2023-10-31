// NOTE: below comment is now obsolete since I actually decided to program
// actual programming? imagine. mark-up languages are the only languages i speak.

let folder = document.querySelector("#folder");
let coolPic = document.querySelector("#cool-pic");
let fldHighlight = false;

// maybe some folder functionality in the near future???
folder.addEventListener("click", () => {
    folder.classList.remove("folder-hover");
    if (fldHighlight) {
        folder.classList.remove("single-clicked");
        fldHighlight = false;
    } else {
        folder.classList.add("single-clicked");
        fldHighlight = true;
    }
});

folder.addEventListener("mouseover", () => {
    !fldHighlight && folder.classList.add("folder-hover");
});

folder.addEventListener("mouseout", () => {
    folder.classList.remove("folder-hover");
    fldHighlight && folder.classList.add("single-clicked");
});

folder.addEventListener("dblclick", (event) => {
    folder.classList.add("vanish");
    coolPic.classList.remove("vanish");
});