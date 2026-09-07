// Tiny IndexedDB wrapper for storing wallpaper Blobs
const DB_NAME = 'live-wallpaper';
const STORE = 'media';

function openDB() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, 1);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE)) {
				db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
			}
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}

function tx(mode, fn) {
	return openDB().then(db => new Promise((resolve, reject) => {
		const t = db.transaction(STORE, mode);
		const store = t.objectStore(STORE);
		const result = fn(store);
		t.oncomplete = () => resolve(result.__value !== undefined ? result.__value : result);
		t.onerror = () => reject(t.error);
	}));
}

const MediaDB = {
	async add(file) {
		const record = {
			name: file.name,
			type: file.type,
			size: file.size,
			blob: file,
			added: Date.now()
		};
		return tx('readwrite', store => {
			const holder = {};
			store.add(record).onsuccess = e => { holder.__value = e.target.result; };
			return holder;
		});
	},
	
	async all() {
		return tx('readonly', store => {
			const holder = {};
			store.getAll().onsuccess = e => { holder.__value = e.target.result; };
			return holder;
		});
	},
	
	async get(id) {
		return tx('readonly', store => {
			const holder = {};
			store.get(id).onsuccess = e => { holder.__value = e.target.result; };
			return holder;
		});
	},
	
	async remove(id) {
		return tx('readwrite', store => store.delete(id));
	},
	
	async clear() {
		return tx('readwrite', store => store.clear());
	}
};
