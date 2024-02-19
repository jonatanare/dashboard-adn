const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Pink",
      "White",
      "Black",
    ],
    datasets: [
      {
        label: "# Indicadores KPI",
        data: [12, 19, 3, 5, 2, 9, 12, 11],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: 20,
      width: "100%",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    plugins: {
      tooltip: {
        // Tooltip will only receive click events
        events: ["click"],
      },
    },
  },
});
