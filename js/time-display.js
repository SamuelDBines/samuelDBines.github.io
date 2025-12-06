import { h } from './jsx-runtime.js';

class TimeDisplay extends HTMLElement {
	connectedCallback() {
		this._count = Number(this.getAttribute('count') || 0);
		this._render();
		this._timer = setInterval(() => this._render(), 1000);
	}

	disconnectedCallback() {
		if (this._timer) clearInterval(this._timer);
	}

	static get observedAttributes() {
		return ['count'];
	}

	attributeChangedCallback(name, _old, value) {
		if (name === 'count') {
			this._count = Number(value) || 0;
			this._render();
		}
	}

	_render() {
		const time = new Date().toLocaleTimeString();
		// 👇 no shadow, just regular innerHTML
		this.innerHTML = `
      <div id="test-display">
        <p>Current Time: ${time} , ${this._count}</p>
      </div>
    `;
	}
}

customElements.define('time-display', TimeDisplay);

export default TimeDisplay;
