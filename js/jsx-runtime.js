export function h(type, props, ...children) {
	props = props || {};

	if (typeof type === 'function') {
		return type({ ...props, children });
	}

	const el = document.createElement(type);

	for (const [key, value] of Object.entries(props)) {
		if (key === 'className') {
			el.className = value;
		} else if (key === 'style' && typeof value === 'object') {
			Object.assign(el.style, value);
		} else if (key.startsWith('on') && typeof value === 'function') {
			el.addEventListener(key.slice(2).toLowerCase(), value);
		} else {
			el.setAttribute(key, value);
		}
	}

	const flatChildren = children.flat(Infinity);
	for (let child of flatChildren) {
		if (child == null || child === false) continue;
		if (typeof child === 'string' || typeof child === 'number') {
			child = document.createTextNode(String(child));
		}
		el.appendChild(child);
	}

	return el;
}

export function Fragment({ children }) {
	return children;
}
