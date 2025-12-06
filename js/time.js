console.log('Time JS loaded', Date.now());

if (typeof document === 'undefined') {
	console.log('No document object, skipping DOM updates');
	return;
}
if (typeof window === 'undefined') {
	console.log('No window object, skipping DOM updates');
	return;
}

const brandElements = document.querySelectorAll('.brand-mark');
for (const el of brandElements) {
	if (el && typeof el === 'object') el.innerHTML = '&gt;_';
}

const yearSpan = document?.getElementById('year');
if (yearSpan && typeof yearSpan === 'object')
	yearSpan.textContent = new Date().getFullYear();
