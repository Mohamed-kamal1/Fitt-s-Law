var t = 0;
var width = [100, 90, 80, 70, 60, 50, 40, 30, 25, 20];
var margin = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
var ID = [], target = [];
var i = 0;
var start, end, time;
document.getElementById("center").onclick = function () {
    start = new Date().getTime();
}


document.getElementById("button2").onclick = function () {
    end = new Date().getTime();

    time = (end - start) / 1000;

    let Button1 = document.getElementById("button1");
    let Button2 = document.getElementById("button2");
    document.getElementById("time").innerHTML = time + "s";

    var Distance = Math.abs(Button1.getBoundingClientRect().left - Button2.getBoundingClientRect().left);
    ID[i] = Math.log2(2 * Distance / width[i]);
    target[i] = time;
    document.getElementById("dist").innerHTML = Distance;

    t++;
    if (t > width.length) {
        alert("Game Finished");
        t = 0;
        return;
    }

    Button1.style.width = width[i] + "px";
    Button2.style.width = width[i] + "px";

    Button1.style.marginLeft = `${margin[i]}em`;
    Button2.style.marginRight = `${margin[i]}em`;

    i++;

    new Chart("myChart", {
        type: "line",
        data: {
            labels: ID,
            datasets: [{
                data: target,
                borderColor: "red",
                fill: false
            }]
        },
        options: {
            legend: { display: false }
        }
    });
}

