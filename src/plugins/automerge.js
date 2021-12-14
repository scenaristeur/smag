import * as Automerge from 'automerge'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$createAM = async function(data){
      return await Automerge.from(data)
    }

    Vue.prototype.$changeAM = async function(docu, patch){

      let newDoc = await Automerge.change(docu, doc => {
        doc = Object.assign(doc, patch);
        console.log(doc)
        //  doc.property = patch
      })
      return newDoc
    }



    Vue.prototype.$saveAM = async function(doc){
      return {id: Automerge.getActorId(doc) , doc: await Automerge.save(doc)}
    }


    Vue.prototype.$loadAM = async function(data){
      return await Automerge.load(data)
    }

    Vue.prototype.$loadAMWithId = async function(data){
      return await Automerge.load(data.doc, data.id)
    }


    Vue.prototype.$automergeTest = async function(){

      // Let's say doc1 is the application state on device 1.
      // Further down we'll simulate a second device.
      // We initialize the document to initially contain an empty list of cards.
      let doc1 = Automerge.from({ cards: [] })

      // The doc1 object is treated as immutable -- you must never change it
      // directly. To change it, you need to call Automerge.change() with a callback
      // in which you can mutate the state. You can also include a human-readable
      // description of the change, like a commit message, which is stored in the
      // change history (see below).

      doc1 = Automerge.change(doc1, 'Add card', doc => {
        doc.cards.push({ title: 'Rewrite everything in Clojure', done: false })
      })

      console.log(doc1)
      // Now the state of doc1 is:
      // { cards: [ { title: 'Rewrite everything in Clojure', done: false } ] }

      // Automerge also defines an insertAt() method for inserting a new element at
      // a particular position in a list. Or you could use splice(), if you prefer.
      doc1 = Automerge.change(doc1, 'Add another card', doc => {
        doc.cards.insertAt(0, { title: 'Rewrite everything in Haskell', done: false })
      })
      console.log(doc1)
      // { cards:
      //    [ { title: 'Rewrite everything in Haskell', done: false },
      //      { title: 'Rewrite everything in Clojure', done: false } ] }

      // Now let's simulate another device, whose application state is doc2. We
      // initialise it separately, and merge doc1 into it. After merging, doc2 has
      // a copy of all the cards in doc1.

      let doc2 = Automerge.init()
      doc2 = Automerge.merge(doc2, doc1)

      // Now make a change on device 1:
      doc1 = Automerge.change(doc1, 'Mark card as done', doc => {
        doc.cards[0].done = true
      })
      console.log(doc1, doc2)

      // { cards:
      //    [ { title: 'Rewrite everything in Haskell', done: true },
      //      { title: 'Rewrite everything in Clojure', done: false } ] }

      // And, unbeknownst to device 1, also make a change on device 2:
      doc2 = Automerge.change(doc2, 'Delete card', doc => {
        delete doc.cards[1]
      })
      console.log(doc1, doc2)

      // { cards: [ { title: 'Rewrite everything in Haskell', done: false } ] }

      // Now comes the moment of truth. Let's merge the changes from device 2 back
      // into device 1. You can also do the merge the other way round, and you'll get
      // the same result. The merged result remembers that 'Rewrite everything in
      // Haskell' was set to true, and that 'Rewrite everything in Clojure' was
      // deleted:

      let finalDoc = Automerge.merge(doc1, doc2)
      console.log(finalDoc)
      // { cards: [ { title: 'Rewrite everything in Haskell', done: true } ] }

      // As our final trick, we can inspect the change history. Automerge
      // automatically keeps track of every change, along with the "commit message"
      // that you passed to change(). When you query that history, it includes both
      // changes you made locally, and also changes that came from other devices. You
      // can also see a snapshot of the application state at any moment in time in the
      // past. For example, we can count how many cards there were at each point:

      let hist =   Automerge.getHistory(finalDoc).map(state => [state.change.message, state.snapshot.cards.length])
      console.log(finalDoc, hist)
      // [ [ 'Initialization', 0 ],
      //   [ 'Add card', 1 ],
      //   [ 'Add another card', 2 ],
      //   [ 'Mark card as done', 2 ],
      //   [ 'Delete card', 1 ] ]
    }




  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
