<template>
  <div 
    class="character-block"
    @click="detailedInfo"
  >
      <div class="character-block__image">
          <img :src="character.image" :alt="character.name">
      </div>
      <div class="character-block__info">
        <span 
            class="title"
        >
            {{character.name}}
        </span>
        <span>
            {{character.status}} - {{character.species}}
        </span>
        <span>Last know location: {{character.location.name}}</span>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'character-block',
    props: {
        character: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: 'Character Block'
        }
    },
    methods: {
        detailedInfo() {
            this.$router.push({name: 'CharacterDetails', params: {id: this.character.id}})
        }
    }
}
</script>

<style>

</style>