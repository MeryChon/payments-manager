import "./payments-grid.js";


window.addEventListener('load', () => {
    fetchPaymentsData();
});

async function fetchPaymentsData() {
    const res = await fetch('http://localhost:3000/payments');
    const paymentsData = await res.json();
    const main = document.querySelector('main');

    const paymentsGrid = document.createElement('payments-grid');
    paymentsGrid.payments = paymentsData;
    main.root = main.attachShadow({mode:'open'});
    main.root.appendChild(paymentsGrid);
}