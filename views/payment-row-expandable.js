class PaymentRowExpandable extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const expandable = this.getElementsByClassName('expandable')[0];
        let me = this;
        expandable.addEventListener('click', function () {
            this.classList.toggle('active');
            let panel = me.getElementsByClassName('panel')[0];
            if (panel && panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else if (panel) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    set payment(payment) {
        this.innerHTML = `
                            <style>
                                @import "../styles/payment-row-expandable.css";
                            </style>
                            <div class="expandable">
                                <div class="details-flexbox">
                                    <span id="left_column" class="flexbox-item">
                                        <div class="left payment-description">${payment.description}</div>
                                        <div class="left payment-category">${payment.category}</div>
                                    </span>
                                    <span id="right_column" class="flexbox-item">
                                        <div class="right">${payment.paymentDate}</div>
                                        <div class="right payment-amount">-${payment.amount}</div>                                    
                                        <div class="right payment-amount">GEL</div>
                                    </span>
                                </div>                                
                            </div>
                            <div class="panel">
                                <p>${payment.comment}</p>
                            </div>
                            `;
    }
}

customElements.define('payment-row-expandable', PaymentRowExpandable);