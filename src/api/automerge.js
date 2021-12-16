import * as Automerge from 'automerge'

export default {

	async create(item){
		let doc = await Automerge.from(item)
		let id = await Automerge.getActorId(doc)
		let uint8 = await Automerge.save(doc)
		return {id: id , uint8: uint8 }
	},

	async load(node){
		return await Automerge.load(node.uint8)
	},

	async change(item){
		console.log(item)
		let old = await Automerge.load(item.am.uint8)
		console.log("old", old)
		let newData = Object.assign({}, item)
		delete newData.am
		console.log("newData", newData)
			let newDoc = await Automerge.change(old, doc => {
				console.log(old)
				doc = newData
				console.log(doc)
			})
			let id = await Automerge.getActorId(newDoc)
			let uint8 = await Automerge.save(newDoc)
			return {id: id , uint8: uint8 }
		}
}
