<template>
  <div>
    Funktionalities
    <ol>
      <li>[ ] Tool for creating txt & graphs on mobile /
        using Automerge (CRDT) versioning https://github.com/automerge/automerge :<br>
        [ ] Using yellowPen to create a tension un json,<br>
        [ X ] create immutable object<br>
        [ X ] revoir creation d'Id avec automerge pour remplacer le uuid<br>
        [ X ] revoir la double sauvegarde dans newItem : saveItem et tension.save (await this.$store.dispatch('local/saveItem', this.item)
        await this.$store.dispatch('local/getItems', this.item)
        this.tension.save(this.item)))
      </li>
      <li>[ ] Tool for adding properties</li>
      <li>[ X ] Tool for creating a tension</li>
      <li>[ ] Tool for creating a simple txt</li>
      <li>[ ] Tool for creating a html page</li>
      <li>[ ] Tool for creating a graph</li>
      <li>[ ] Tool for creating a bunch of connected resources (locales & remote with workspaces & favorites spaces)</li>
      <li>[ X ] Storing it local first in indexedb</li>
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
