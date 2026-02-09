$(document).ready(function () {
    // Start Left Side Bar
    $(".sidebarlinks").click(function () {
        $(".sidebarlinks").removeClass("currents");
        $(this).addClass("currents");
    });
    // End Left Side Bar
});

// Start Js Area

// Start Earning Area
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ]);

    var options = {
        title: "Sales Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };

    var chart = new google.visualization.LineChart(
        document.getElementById("curve_chart"),
    );

    chart.draw(data, options);
}
// End Earning Area

// Start Footer
const getyear = document.getElementById("getyear");
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;

// End Footer

// Start Site Setting
const getsitesettings = document.getElementById("sitesettings");

getsitesettings.addEventListener("click", function () {
    document.body.classList.toggle("show-nav");
});

// End Site Setting

/* Start Top Sidebar */

/* start notify & userlogout */

// start dropdown
function dropbtn(e) {
    // console.log(e.target);
    e.target.parentElement.nextElementSibling.classList.toggle("show");
}
// end dropdown

/* end notify & userlogout */

/* End Top Sidebar */

// Start Expense Area
const ctx = document.getElementById("mypiechart");
ctx.height = 250;
new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets: [
            {
                data: [12, 19, 3],
            },
        ],
    },
    options: {
        responsive: false,
    },
});
// End Expense Area

// Start Gauge Area
var gaugeurs = new JustGage({
    id: "gaugeusers", // the id of the html element
    width: 200,
    height: 200,
    value: 50,
    min: 0,
    max: 70,
    gaugeWidthScale: 0.6,
});

var gaugecus = new JustGage({
    id: "gaugecustomers", // the id of the html element
    width: 200,
    height: 200,
    value: 700000,
    min: 0,
    max: 900000,
    gaugeWidthScale: 0.6,
});

var gaugeemps = new JustGage({
    id: "gaugeemployers", // the id of the html element
    width: 200,
    height: 200,
    value: 80,
    min: 0,
    max: 100,
    gaugeWidthScale: 0.6,
});

var gaugeinvs = new JustGage({
    id: "gaugeinvesters", // the id of the html element
    width: 200,
    height: 200,
    value: 40,
    min: 0,
    max: 50,
    gaugeWidthScale: 0.6,
});

// update the value randomly
setInterval(() => {
    gaugeurs.refresh(Math.random() * 100);
    gaugecus.refresh(Math.random() * 100);
    gaugeemps.refresh(Math.random() * 100);
    gaugeinvs.refresh(Math.random() * 100);
}, 5000);

// End Gauge Area

// End Js Area

let saledatas = [
    {
        title: "Order Value",
        rank: 80,
        value: "120.8%",
        color: "bg-secondary",
    },
    {
        title: "Total Products",
        rank: 50,
        value: "325.2%",
        color: "bg-success",
    },
    {
        title: "Quantity",
        rank: 70,
        value: "25.60%",
        color: "bg-warning",
    },
    {
        title: "New SKU",
        rank: 43,
        value: "13.34%",
        color: "bg-info",
    },
    {
        title: "Debt",
        rank: 10,
        value: "3.40%",
        color: "bg-danger",
    },
];

function sortmaxtominnum(saledatas) {
    for (let y = 0; y < saledatas.length; y++) {
        let maxnumber = saledatas[y];
        let curidx = y;

        for (let x = y; x < saledatas.length; x++) {
            // Get Max Number
            if (saledatas[x].rank > maxnumber.rank) {
                maxnumber = saledatas[x];
                curidx = x;
            }
        }

        saledatas[curidx] = saledatas[y];
        saledatas[y] = maxnumber;
    }

    return saledatas;
}

function showsaledatas(sortdatas) {
    let getsalescnt = document.getElementById("salescontainer");

    let progress = `<div>`;

    for (let x = 0; x < sortdatas.length; x++) {
        progress += `
      <div class="mt-2">
      <div class="d-flex justify-content-between">
        <small>${sortdatas[x].title}</small>
        <small>${sortdatas[x].value}</small>
      </div>
      <div class="progress">
        <div class="progress-bar ${sortdatas[x].color}" style="width:${sortdatas[x].rank}%" aria-valuenow="${sortdatas[x].rank}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
      `;
    }

    progress += `</div>`;

    getsalescnt.innerHTML = progress;
}

window.onload = function () {
    let sortdatas = sortmaxtominnum(saledatas);
    showsaledatas(sortdatas);
};
