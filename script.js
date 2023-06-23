




<script>
var Score = 0; 

var clickerCost = 15;
var clickers = 0;
var gonutCost = 100;
var gonuts = 0;

function buyClicker() 
    if (score >= clickerCost) {
        score = score - clickerCost;
        clicker = clicker + 1;
        clickerCost = Math.round(clickerCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("clickerCost").innerHTML = clickerCost;
        document.getElementById("clickers").innerHTML = clicker;

    }
}

function buyGonut() {
    if (score >= gonutCost) {
        score = score - gonutCost;
        gonut = gonut + 1;
        gonutCost = Math.round(gonutCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("gonutrCost").innerHTML = clickerCost;
        document.getElementById("gonutsr").innerHTML = clicker;

    }
}


function addtoscore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

setInterval (function() {
    score = score + clickers;
    score = score + gonut * 5;
    document.getElementById("score").innerHTML = score;
}, 1000); // 1000ms = 1 second
</script>
