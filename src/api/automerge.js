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

	async change(old, patch){
			let newDoc = await Automerge.change(old.doc, doc => {
				doc = Object.assign(doc, patch);
				console.log(doc)
			})
			let id = await Automerge.getActorId(newDoc)
			let uint8 = await Automerge.save(newDoc)
			return {id: id , uint8: uint8 }
		}
}
