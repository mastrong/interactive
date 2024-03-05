let lemon_count = 0;
let sugar_count = 0;
let water_count = 0;
let stir_count = 0;

let lemons = document.getElementById("lemons")
let water = document.getElementById("water")
let sugar = document.getElementById("sugar")
let stirring = document.getElementById("stir")
let pouring = document.getElementById("pour")

function start() {
    let start_button = document.getElementById("start_button")
    start_button.style.display = "none";

    let steps = document.getElementById("steps")
    steps.style.display = "grid";

    lemons.style.display = "grid";
}

function stop_effects(element) {
    element.style.hover = "none";
    element.style.opacity = "0.5";
    element.style.animation = "none";
}

function squeeze(button_id) {
    let squeezed = document.getElementById(button_id)
    squeezed.classList.add("sqeezed");
    squeezed.classList.remove("fa-lemon");
    squeezed.classList.add("fa-droplet")
    stop_effects(squeezed)
    // TODO: have lemons turn into droplets of same color
    lemon_count += 1;

    if (lemon_count === 5) {
        water.style.display = "grid";
    }
}

function fill(button_id) {
    console.log(button_id)

    let current_glass = document.getElementById(button_id)
    current_glass.classList.remove("fa-glass-water-droplet")
    current_glass.classList.remove("fa-flip")
    current_glass.classList.add("fa-glass-water")
    stop_effects(current_glass)

    water_count += 1
    if (water_count === 4) {
        sugar.style.display = "grid";
    }
}

function scoop(button_id) {
    console.log(button_id)

    // cubes in a grid that stack
    // drag and drop?
    sugar_count += 1
    if (sugar_count === 4) {
        stirring.style.display = "grid";
        stir()
    }
}

function stir() {
    console.log(lemon_count, sugar_count, water_count)
    let stir_count = 0;
    document.body.addEventListener('mousemove', function (e) {
        if (stir_count < 100) {
            stir_count += 1;
            console.log(stir_count)
            document.body.style.setProperty('--mouse-x', stir_count);
        } else {
            pouring.style.display = "grid";
        }
    })


}

function pour() {
    // check if all counts are what we expect
    console.log("pouring")

    // creative drinking? water flowing down screen?
}

// https://stackoverflow.com/questions/49753795/update-water-level-based-on-the-value

function get_loc() {
    let target = document.getElementById("water_circle");
    console.log(target.offsetLeft, target.offsetTop)
}


