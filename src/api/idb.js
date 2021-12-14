const DB_NAME = 'smag';
const DB_VERSION = 1;
let DB;
// https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);

			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};

			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};

			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore('node', { keyPath:'id' });
			};
		});
	},
	async deleteItem(item) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['node'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('node');
			store.delete(item.id);
		});
	},
	async clearStore(){
		console.log("clear store")
		try{
			let db = await this.getDb();
			var transaction = db.transaction(['node'], "readwrite");
			// create an object store on the transaction
			var objectStore = transaction.objectStore('node');

			// Make a request to clear all the data out of the object store
			var objectStoreRequest = objectStore.clear();

			objectStoreRequest.onsuccess = function(event) {
				console.log(event)
				// report the success of our request
				//note.innerHTML += '<li>Request successful.</li>';
			};
			//window.indexedDB.deleteDatabase(DB_NAME)
		}catch(e){
			alert(e)
		}
		await this.getItems()
	},
	async getItems() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['node'],'readonly');
			trans.oncomplete = () => {
				resolve(items);
			};

			let store = trans.objectStore('node');
			let items = [];

			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					items.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveItem(item) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['node'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('node');
			store.put(item);

		});

	}

}
