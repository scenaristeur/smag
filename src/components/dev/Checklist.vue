<template>
  <div>
    Funktionalities
    <ol>
      <li>[ ] Tool for creating txt & graphs on mobile /
        using Automerge (CRDT) versioning https://github.com/automerge/automerge :<br>
         [ ] Using yellowPen to create a tension un json,<br>
       [ ] create immutable object<br>
       [ ] revoir creation d'Id avec automerge pour remplacer le uuid<br>
       [ ] revoir la double sauvegarde dans newItem : saveItem et tension.save (await this.$store.dispatch('local/saveItem', this.item)
       await this.$store.dispatch('local/getItems', this.item)
       this.tension.save(this.item)))
      </li>
      <li>[#] Tool for creating a tension</li>
      <li>[ ] Tool for creating a simple txt</li>
      <li>[ ] Tool for creating a html page</li>
      <li>[ ] Tool for creating a graph</li>
      <li>[ ] Tool for creating a bunch of connected resources (locales & remote with workspaces & favorites spaces)</li>
      <li>[ ] Storing it local first in indexedb</li>
      <li>[ ] Personal pod synchronisation</li>
      <li>[ ] Collectif pod collaboration / share & retrieve</li>
      <li></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Checklist"
}
</script>

<style>

</style>
