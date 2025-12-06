function mountTimeDisplay(el, initialCount = 0) {
	let count = initialCount;

	function render() {
		const time = new Date().toLocaleTimeString();
		el.innerHTML = `
      <div id="time-display">
        <p>Current Time: ${time} , ${count}</p>
      </div>
    `;
	}

	render();
	const timer = setInterval(render, 1000);

	return {
		setCount(newCount) {
			count = newCount;
			render();
		},
		destroy() {
			clearInterval(timer);
		},
	};
}

console.log('Time JS loaded', Date.now());

if (typeof document === 'undefined') {
	console.log('No document object, skipping DOM updates');
}
if (typeof window === 'undefined') {
	console.log('No window object, skipping DOM updates');
	//return;
}

const brandElements = document.querySelectorAll('.brand-mark');
for (const el of brandElements) {
	if (el && typeof el === 'object') el.innerHTML = '&gt;_';
}

const yearSpan = document?.getElementById('year');
if (yearSpan && typeof yearSpan === 'object')
	yearSpan.textContent = new Date().getFullYear();

const stateHandler = () => {
	let item = null;
	const setItem = (newItem) => {
		item = newItem;
	};
	const getItem = () => {
		return item;
	};
	return { setItem, getItem, item };
};

console.log('Time JS finished', Date.now());

const { getItem, setItem, item } = stateHandler();
setItem('Hello from time.js state!');
console.log('State item:', getItem());
setItem('Another value');
console.log('State item updated:', getItem());
console.log('Final state item:', item);

const button = document?.getElementById('test-button');
const widget = mountTimeDisplay(document.getElementById('test-display'));
let count = 0;
if (button) {
	button.addEventListener('click', () => {
		setItem(count++);
		if (!widget) {
			console.log(
				'Button or display element not found, skipping event listener setup.'
			);
			return;
		}
		widget.setCount(count);
	});
} else {
	console.log(
		'Button or display element not found, skipping event listener setup.'
	);
}
