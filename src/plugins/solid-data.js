import {
  getSolidDataset,
  //getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  //getSolidDatasetWithAcl,
  //getPublicAccess,
  //getAgentAccess,
  getFile,
  // isRawData,
  // getContentType,
  //saveFileInContainer,
  getContainedResourceUrlAll,
  // getStringNoLocaleAll,
  createContainerAt,
  getSourceUrl,
  // deleteFile,
  //removeThing,
  // removeAll,
  //removeStringNoLocale,
  //deleteContainer,
  //addStringNoLocale,
  // setThing,
  // saveSolidDatasetAt,
  //createSolidDataset,
  // createThing,
  // addUrl,
  // buildThing,
  overwriteFile,
  // getStringNoLocale,
  // getThing,
  // getUrlAll,
  // getUrl,
  //addDatetime,
  //  getDatetime,
  //setUrl,
  //setStringNoLocale,
  //setDecimal,
  //setInteger,
  //  getDecimal,
  //getInteger,
  // setDatetime
} from "@inrupt/solid-client";
// import { /*FOAF,*/ /*LDP,*/ /*VCARD,*/ /*RDF,*/ AS,/* RDFS, OWL*/  } from "@inrupt/vocab-common-rdf";
// import { /*WS ,*/ SOLID} from "@inrupt/vocab-solid-common";
//
import * as sc from '@inrupt/solid-client-authn-browser'
// import {   WebsocketNotification,} from "@inrupt/solid-client-notifications";
// import * as diffler from 'diffler'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$getResources = async function(path){
      console.log("path", path)
      //let resources = []
      const dataset = await getSolidDataset( path, { fetch: sc.fetch });
      let resources  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
      .map(u => {

let r = {url: u, parent: path}
        let parts = u.split('/')
        if(u.endsWith('/')){
          r.name = parts[parts.length - 2]
          r.type = "folder"
          r.icon = "📁"
        }else{
          r.name = parts[parts.length - 1]
          r.type = "file"
          r.icon = "📄"
        }

      return r
      })
      //  console.log("remotes",remotesUrl)
      return resources
    }

    Vue.prototype.$getResourcesDetails = async function(path){
      console.log("path", path)
      let resources = []
      const dataset = await getSolidDataset( path, { fetch: sc.fetch });
      let remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
      //  console.log("remotes",remotesUrl)

      for(const u of remotesUrl){
        //resources = remotesUrl.map(function (u) {
        let r = {url: u, parent: path}
        r.file = await getFile(
          u,               // File in Pod to Read
          { fetch: sc.fetch }       // fetch from authenticated session
        );

        let parts = u.split('/')
        if(u.endsWith('/')){
          r.name = parts[parts.length - 2]
          r.type = "folder"
          r.icon = "📁"
          //r.resources = this.$getResources(r.url)
          //store.commit('app/addFolder',r)
          //child.value = {type:'folder', url:c, text: text}
          //  child.html= "📁"+text
        }else{
          r.name = parts[parts.length - 1]
          r.type = "file"
          r.icon = "📄"
          //store.commit('app/addFile',r)
          //child.value = {type: "file", url:c, text: child.text}
        }

        //return r
        resources.push(r)
      }

      return resources
    }
    Vue.prototype.$getResourcesFull = async function(path){
      console.log("path", path)
      let resources = []
      const dataset = await getSolidDataset( path, { fetch: sc.fetch });
      let remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
      //  console.log("remotes",remotesUrl)

      for(const u of remotesUrl){
        //resources = remotesUrl.map(function (u) {
        let r = {url: u, parent: path}
        r.file = await getFile(
          u,               // File in Pod to Read
          { fetch: sc.fetch }       // fetch from authenticated session
        );

        let parts = u.split('/')
        if(u.endsWith('/')){
          r.name = parts[parts.length - 2]
          r.type = "folder"
          r.icon = "📁"
          r.resources = this.$getResources(r.url)
          //store.commit('app/addFolder',r)
          //child.value = {type:'folder', url:c, text: text}
          //  child.html= "📁"+text
        }else{
          r.name = parts[parts.length - 1]
          r.type = "file"
          r.icon = "📄"
          //store.commit('app/addFile',r)
          //child.value = {type: "file", url:c, text: child.text}
        }

        //return r
        resources.push(r)
      }

      return resources
    }

    Vue.prototype.$getResource = async function(r){
      //file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
      console.log("read",r)
      const file = await getFile(
        r.url,               // File in Pod to Read
        { fetch: sc.fetch }       // fetch from authenticated session
      );

      //  console.log( `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`);
      //  console.log("The file is rawdata "+ `${isRawData(file)}`);
      r.file = file

      return r
      //  this.$store.commit('bureau/setResource',r)
      //this.$getContent(r.url)
    }

    Vue.prototype.$updateFile = async function(f){
      console.log(f)
      // f.url == undefined ? f.url = f.path+f.name : ""
      // let ext = f.name.split('.')[1]
      let contentType = f.file.type
      // switch (ext) {
      //   case "jsonld":
      //   contentType = "application/ld+json"
      //   break;
      //   case "json":
      //   contentType = "application/json"
      //   break;
      // }

      try{
        const savedFile = await overwriteFile(
          f.url,
          new Blob([f.content], {type: contentType}),
          { contentType: contentType, fetch: sc.fetch }
        );
        console.log(`File saved at ${getSourceUrl(savedFile)}`);
        //n.url = await getSourceUrl(savedFile)
        //  store.dispatch('nodes/saveNode', n)

        return savedFile
      }catch(e){
        console.log(e)
      }

    }

    //
    // Vue.prototype.$createRemote = async function(n){
    //   console.log(store.state.solid.pod)
    //
    //   console.log(store.state.solid.pod.neuroneStore, n)
    //   n['ve:url'] = store.state.solid.pod.neuroneStore+n.id
    //   n['ve:synchronized'] = Date.now()
    //   try{
    //     const savedFile = await overwriteFile(
    //       n['ve:url'],
    //       new Blob([JSON.stringify(n, undefined, 2)], { type: "application/ld+json" }),
    //       { contentType: "application/ld+json", fetch: sc.fetch }
    //     );
    //     console.log(`File saved at ${getSourceUrl(savedFile)}`);
    //     //n.url = await getSourceUrl(savedFile)
    //     //  store.dispatch('nodes/saveNode', n)
    //     return n
    //   }catch(e){
    //     console.log(e)
    //   }
    // }
    //
    // Vue.prototype.$deleteRemote = async function(n){
    //   console.log(n, store.state.solid.pod.neuroneStore)
    //
    //   await deleteFile(
    //     n['ve:url'],
    //     {fetch: sc.fetch }
    //   )
    //   console.log("deleted",n['ve:url'])
    //   // const index = subscriptions.indexOf(c.url);
    //   // if (index > -1) {
    //   //   subscriptions.splice(index, 1);
    //   // }
    //   //this.$getNodes()
    // }
    //
    // // Vue.prototype.$onLoad = async function( remotes){
    // //   console.log(remotes, this)
    // //   let remote = JSON.parse(this.result)
    // //   console.log(remote)
    // //   remotes.push(remote)
    // // }
    //
    //
    //
    //
    //
    // Vue.prototype.$compare = async function(remote){
    //   let local = store.state.nodes.nodes.find(n => n.id == remote.id)
    //   if (local == undefined){
    //     store.commit('nodes/addNotBoth',{id: remote.id, local: null, remote: remote})
    //   }else{
    //     try{
    //       const diff =  diffler(local, remote)
    //       delete  diff['ve:updated']
    //       delete  diff['ve:synchronized']
    //       // console.log("real diff", diff)
    //       if(Object.entries(diff).length > 0){
    //         // console.log("diff", diff)
    //         store.commit('nodes/addMustUpdate', {id: remote.id, local: local, remote: remote, difference : diff})
    //       }
    //     }catch(e){
    //       store.commit('nodes/addMustUpdate', {id: remote.id, local: local, remote: remote})
    //
    //     }
    //   }
    // }
    //
    // Vue.prototype.$getChildren = async function(parent){
    //   // console.log(parent)
    //   const dataset = await getSolidDataset( parent, { fetch: sc.fetch });
    //   let remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
    //   // console.log(remotesUrl)
    //   return remotesUrl
    // }
    //
    // Vue.prototype.$changeWorkspace = async function(space){
    //   console.log(space)
    //   if(space == undefined){
    //     store.commit('nodes/setCurrentWorkspace',null)
    //     this.$checkChanges()
    //   }else{
    //
    //     //let plugin = this
    //     let remotesUrl = []
    //     space.nodes = []
    //     try{
    //       const dataset = await getSolidDataset( space.url, { fetch: sc.fetch });
    //       remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
    //       //console.log("Phase 2",remotesUrl)
    //       // for (const local of store.state.nodes.nodes){
    //       //   //  console.log(local.id, remotesUrl.includes(local['ve:url']))
    //       //   if (!remotesUrl.includes(local['ve:url'])){
    //       //     store.commit('nodes/addNotBoth',{id: local.id, local: local, remote: null})
    //       //   }
    //       // }
    //       const filePromises = remotesUrl.map(async function(url) {
    //         // Return a promise per file
    //         const file = await getFile(url, { fetch: sc.fetch });
    //         return new Promise( function(resolve, reject) {
    //
    //           const reader = new FileReader();
    //           reader.onload = async () => {
    //             try {
    //               //response =
    //               // Resolve the promise with the response value
    //               resolve(JSON.parse(reader.result));
    //             } catch (err) {
    //               reject(err);
    //             }
    //           };
    //           reader.onerror = (error) => {
    //             reject(error);
    //           };
    //           reader.readAsText(file);
    //         });
    //       });
    //
    //       // Wait for all promises to be resolved
    //       space.nodes = await Promise.all(filePromises);
    //
    //       // for (const u of remotesUrl){
    //       //   const file = await getFile(u, { fetch: sc.fetch });
    //       //   const reader = new FileReader();
    //       //   reader.onload = async () => {
    //       //     //  plugin.$compare(JSON.parse(reader.result));
    //       //     //  console.log(reader.result)
    //       //     space.nodes.push(JSON.parse(reader.result))
    //       //   };
    //       //   reader.onerror = (error) => {
    //       //     console.log(error);
    //       //   };
    //       //   reader.readAsText(file);
    //       // }
    //       console.log("space",space)
    //       let index = store.state.solid.pod.workspaces.findIndex(w => w.url == space.url)
    //       console.log(index)
    //       if(index === -1){
    //         store.state.solid.pod.workspaces.push(space)
    //       }else{
    //         Object.assign(store.state.solid.pod.workspaces[index], space);
    //       }
    //       store.commit('nodes/setCurrentWorkspace',space)
    //
    //     }catch(e){
    //       console.log(e)
    //     }
    //
    //   }
    //
    // }
    //
    //
    // Vue.prototype.$updateFile = async function(f){
    //   console.log(f)
    //   f.url == undefined ? f.url = f.path+f.name : ""
    //   let ext = f.name.split('.')[1]
    //   let contentType = "text/html; charset=utf-8"
    //   switch (ext) {
    //     case "jsonld":
    //     contentType = "application/ld+json"
    //     break;
    //     case "json":
    //     contentType = "application/json"
    //     break;
    //   }
    //
    //   try{
    //     const savedFile = await overwriteFile(
    //       f.url,
    //       new Blob([f.content], {type: contentType}),
    //       { contentType: contentType, fetch: sc.fetch }
    //     );
    //     console.log(`File saved at ${getSourceUrl(savedFile)}`);
    //     //n.url = await getSourceUrl(savedFile)
    //     //  store.dispatch('nodes/saveNode', n)
    //     return savedFile
    //   }catch(e){
    //     console.log(e)
    //   }
    //
    // }
    Vue.prototype.$getContent = async function(url){
      console.log("get content de ",url)
      try {
        // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
        const file = await getFile(
          url,               // File in Pod to Read
          { fetch: sc.fetch }       // fetch from authenticated session
        );

        // console.log( `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`);
        // console.log("The file is rawdata "+ `${isRawData(file)}`);

        //if(`${getContentType(file)}` == 'text/html' /*|| `${getContentType(file)}` == "application/ld+json"*/)  {
        const reader = new FileReader();
        reader.onload = async () => {
          //  console.log(reader.result)
          let content = reader.result
          // if (getContentType(file) == 'application+json'){
          //   content = JSON.parse(reader.result);
          // }
          console.log("content",content)
          store.commit('bureau/setContent',content)
        };
        reader.onerror = (error) => {
          console.log(error);
        };
        reader.readAsText(file);
        //  }
        // else{
        //   console.log("is a dataset")
        //   alert ("i can't read '"+file.url +"' as text or html, use another editor"  )
        // }




        //  return file
      } catch (err) {
        console.log(err);
      }
    }

    Vue.prototype.$createFolder = async function(f){
      await createContainerAt( f, { fetch: sc.fetch });
    }


    Vue.prototype.$subscribe = async function(path){
      // SPEC https://github.com/solid/solid-spec/blob/f225c349dc3b804cdbe114c36ded8adb5b9f0b99/api-websockets.md
      //https://github.com/scenaristeur/solid-vue-panes/blob/b9b4446d7976242ba46a94c33f99f97079fc2401/src/store/modules/agora.js
    //  console.log("subscribe", path)
      let plugin = this

      let websocket = "wss://"+path.split('/')[2];
      let socket = new WebSocket(websocket, ['solid.0.1.0']);
      socket.onopen = function() {
        this.send('sub '+path);
      //  console.log("--------- STORE SUBSCRIBE TO",websocket, path)
      }
      socket.onmessage = async function(msg) {
        //  console.log("m",msg)
        if (msg.data && msg.data.slice(0, 3) === 'pub') {
          console.log("pub",msg.data)
          let url = msg.data.split(' ')[1]
          if (msg.data.endsWith('/')){
            let resources = await plugin.$getResources(url)
            resources.forEach((r) => {
              plugin.$subscribe(r.url)
            });
            //console.log("socket", socket)
            //
          }else{
            let file = await plugin.$getResource(url)
            console.log("66666666666",file)
          }
          // const activityResource = await getSolidDataset(path);
          // const activities = getThingAll(activityResource);
          //  context.commit('setActivities', activities)
        }
      };
    }




    //     Vue.prototype.$subscribeEss = async function(resourceURL){
    //       //https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/subscribe-to-notifications/
    //       console.log("Subscribing", resourceURL)
    //       // const gateway = "https://notification.pod.inrupt.com/";
    //
    //       const websocket = new WebsocketNotification(
    //         resourceURL,
    //         { fetch: sc.fetch/*, gateway*/ }
    //       );
    //       console.log("Subscription to", resourceURL)
    //       websocket.on("connected", () =>
    //       console.log("connected", websocket)
    //       // setMessages((prev) => [
    //       //   ...prev,
    //       //   `Websocket connected; watching ${podRoot}`,
    //       // ])
    //     );
    //
    //     websocket.on("message", (message) =>
    //     {
    //       console.log('message', JSON.parse(message))
    //     }
    //     // setMessages((prev) => [...prev, formatMessage(message)])
    //   );
    //
    //   websocket.on("closed", () =>
    //   console.log("websocket closed")
    //   //  setMessages((prev) => [...prev, "Websocket closed"])
    // );
    //
    // websocket.on("error", (error) => {
    //   /* eslint no-console: 0 */
    //   console.error(error);
    //   // setMessages((prev) => [
    //   //   ...prev,
    //   //   "Websocket error (see console for details)",
    //   // ]);
    // });
    //
    // // websocket.on("message", console.log);
    // // websocket.on("*", console.log);
    // // websocket.on("connect", console.log);
    // // websocket.on("CREATE", console.log);
    //
    // websocket.connect();
    // }
    //
    // Vue.prototype.$addWorkspaceToPod = async function(s){
    //   console.log(s, )
    //   let pod = store.state.solid.pod
    //   let publicTypeIndexUrl = pod.storage+'settings/publicTypeIndex.ttl'
    //   const pti_ds = await getSolidDataset( publicTypeIndexUrl, { fetch: sc.fetch });
    //   // pod.workspaces = await getUrlAll(profile, "https://scenaristeur.github.io/verse#space");
    //   //  try{
    //   //  const dataset = await getSolidDataset( pti_ds, { fetch: sc.fetch });
    //   let thing = await  buildThing(createThing({ name: s.name }))
    //   .addUrl("http://www.w3.org/ns/solid/terms#forClass", "https://scenaristeur.github.io/verse#Workspace")
    //   .addStringNoLocale(AS.name, s.name)
    //   .addUrl(SOLID.instance, s.url)
    //   .build();
    //   let thingInDs = setThing (pti_ds, thing)
    //   let savedThing  = await saveSolidDatasetAt(publicTypeIndexUrl, thingInDs, { fetch: sc.fetch } );
    //   console.log("savedThing",savedThing)
    //
    //   //"https://scenaristeur.github.io/verse#Workspace"
    //   //   let profile = await getThing( dataset, pod.webId );
    //   // await addUrl(profile, "https://scenaristeur.github.io/verse#space", s.url);
    //   // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
    //   // store.commit("vatch/addToNetwork", pod.publicTags)
    //   //this.$subscribe(pod.storage)
    //   //  console.log("getpodinfos",pod)
    //   //  }
    //   // catch(e)
    //   // {
    //   //   console.log("erreur",e, pod)
    //   // }
    //
    //
    // }
    //
    // Vue.prototype.$checkChanges = async function(){
    //   console.log("$checkChanges",store.state.solid.pod.neuroneStore)
    //   let plugin = this
    //   let remotesUrl = []
    //   try{
    //     const dataset = await getSolidDataset( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
    //     remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
    //     //console.log("Phase 2",remotesUrl)
    //     for (const local of store.state.nodes.nodes){
    //       //  console.log(local.id, remotesUrl.includes(local['ve:url']))
    //       if (!remotesUrl.includes(local['ve:url'])){
    //         store.commit('nodes/addNotBoth',{id: local.id, local: local, remote: null})
    //       }
    //     }
    //
    //     for (const u of remotesUrl){
    //       const file = await getFile(u, { fetch: sc.fetch });
    //       const reader = new FileReader();
    //       reader.onload = async () => {
    //         plugin.$compare(JSON.parse(reader.result));
    //       };
    //       reader.onerror = (error) => {
    //         console.log(error);
    //       };
    //       reader.readAsText(file);
    //     }
    //
    //   }catch(e){
    //     console.log(e)
    //   }
    // }
    //
    // Vue.prototype.$processSource = async function(s){
    //   console.log("Source",s.source)
    //   //  let source = {url: s}
    //
    //
    //   const file = await getFile(s.source, { fetch: sc.fetch });
    //   //  console.log(file)
    //   const reader = new FileReader();
    //   reader.onload = async () => {
    //     //  console.log(reader.result)
    //     let source = JSON.parse(reader.result);
    //     store.commit('nodes/setSource',source)
    //   };
    //   reader.onerror = (error) => {
    //     console.log(error);
    //   };
    //   reader.readAsText(file);
    //
    //
    // }
    //
    //
    // Vue.prototype.$checkChanges1 = async function(){
    //   console.log("$checkChanges",store.state.solid.pod.neuroneStore)
    //   //let remotes = []
    //   try{
    //     const dataset = await getSolidDataset( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
    //     let remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
    //     // let files = await remotesUrl.map(async function(ru) {return `${await getFile(ru, { fetch: sc.fetch })}`})
    //
    //     // console.log(`${JSON.parse(files)}`)
    //     const filePromises = remotesUrl.map(async function(url) {
    //       // Return a promise per file
    //       const file = await getFile(url, { fetch: sc.fetch });
    //       return new Promise( function(resolve, reject) {
    //
    //         const reader = new FileReader();
    //         reader.onload = async () => {
    //           try {
    //             //response =
    //             // Resolve the promise with the response value
    //             resolve(JSON.parse(reader.result));
    //           } catch (err) {
    //             reject(err);
    //           }
    //         };
    //         reader.onerror = (error) => {
    //           reject(error);
    //         };
    //         reader.readAsText(file);
    //       });
    //     });
    //
    //     // Wait for all promises to be resolved
    //     const fileInfos = await Promise.all(filePromises);
    //     console.log(fileInfos)
    //     // var reader = new FileReader();
    //     //
    //     // for await  (const r of remotes_urls){
    //     //   const file = await getFile(r.url, { fetch: sc.fetch });
    //     //
    //     //   reader.onload = this.$onLoad(remotes);
    //     //   reader.readAsText(file);
    //     // }
    //     // console.log(remotes)
    //     // for await (const u of versesUrl){
    //     //   verses.push (await this.$readVerse(u))
    //     // }
    //     // console.log("remotes",remotes)
    //     // store.commit('nodes/setRemotes',remotes)
    //     // for( const v of urls){
    //     //   this.$subscribe(v.url)
    //     // }
    //   }catch(e){
    //     console.log(e.message)
    //     await createContainerAt( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
    //   }
    //
    // }


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
