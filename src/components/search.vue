<template>
    <div class="search">
      <label for="searchInput">Type unit name</label>
      <input v-model="searchValue" type="text" v-on:keydown.enter="SearchMethod" placeholder="I.E. Skirmisher">
    </div>
</template>

<script>
import Claim from '../components/claim.vue'
import { mapMutations } from 'vuex'

export default {
    name: 'Search',
    components: {
        Claim
    },
    data() {
		return {
            searchValue: '',
            unit:'',
		};
    },
    methods:{
      ...mapMutations([
          'SearchMethod'
      ]),
    SearchMethod() {
      let foundUnit = this.$store.state.units.filter((unit) =>  { return unit.name === this.searchValue })
      if(foundUnit.length) {
          this.$store.state.foundUnit = foundUnit[0]
          this.$store.state.scrollDown = true;
          }else {
          this.$store.state.foundUnit = ''
      } 
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {


    margin-top: 30px;
    height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 0;
    color: whitesmoke;
}
.search {
    text-align: center;
    align-content: center;
    color: whitesmoke;

     @media (min-width: 1024px) {
    width: 400px
         
        }
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	width: 200px;
    margin-top: 100px;
}
input {
    @media (min-width: 768px) {
    font-size: 25px;

        }
    @media (min-width: 1024px) {
    font-size: 32px;

    }
    font-weight: 200;
    margin-top: 20px;
    color: whitesmoke;
    text-align: center;
    font-size: 20px;
	border: 0;
	border-bottom: 2px solid gray;
    background: none;
    transition: box-shadow .5s;
}
input:focus {
    outline: none;
    box-shadow: 0 10px 12px -8px white;
}

label {
    @media (min-width: 768px) {
    font-size: 25px;
    font-weight: 600;
         
        }
     @media (min-width: 1024px) {
    font-size: 40px;
    }

    font-size: 20px;
	text-align: center;
}
.unitfound {
    display: flex;
    flex-flow: row;
    margin: 0px;
}
</style>
