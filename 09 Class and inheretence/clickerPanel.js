(function() {
	class ClickerPanel extends HTMLElement {
			constructor() {
					super();
					this.attachShadow({ mode: 'open' });

					const style = document.createElement('style');
					this.setStyle(style);
					this.shadowRoot.appendChild(style);
					this.onReached10 = null;

					this.root = document.createElement('div');
					this.shadowRoot.appendChild(this.root);
					this.model = {
							clickCount: 0,
							pointsPerClick: 1,
					};

			}

			connectedCallback() {
					const startValue = this.getAttribute('startvalue');
					if (startValue) {
							this.model.clickCount = parseInt(startValue);
					}
					this.updateView();
			}

			startTimer(callback) {
					setInterval(() => this.timerElapsed(callback), 1000);
			}

			timerElapsed(callback) {
					const data = callback();
					//this.model.data = data;
					this.updateView();
			}

			stopTimer() {

			}

			setStyle(style) {
					style.innerText = `
							button {
									background-color: green;
							}
							`;
			}

			updateView() {
					this.root.innerHTML = /*html*/ `
							<button>+</button>
							<h1>${this.model.clickCount}</h1>
					`;
					let btn = this.root.getElementsByTagName('button')[0];
					btn.onclick = this.click.bind(this);
			}

			click() {
					this.model.clickCount++;
					if (this.model.clickCount === 10 && this.onReached10 !== null) {
							this.onReached10(this);
					}
					this.updateView();
			}

			boost() {
					this.model.clickCount += 10;
					this.updateView();
			}
	}

	customElements.define('clicker-panel', ClickerPanel);
})();