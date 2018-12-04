<template>
  <div style="margin: 0; width: 100vw;">
    <div class="bg">
      <Claim/>
      <Search/>
    </div>
    <div id="lowdiv" class="bgImg">
      <div class="allUnits" v-if="this.foundUnit !== ''">
        <div class="foundUnit chosenUnit hideIfSmall">
          <div class="unitImage" :style="{'background-image': `url(${this.foundUnit.imageUrl})`}"></div>
          <div class="unitInfo">
            <p>Name: {{this.foundUnit.name}}</p>
            <p>HP: {{this.foundUnit.HP}}</p>
            <p>Attack: {{this.foundUnit.Attack}}</p>
            <p>Armor Pierce: {{this.foundUnit.ArmorPierce}}</p>
            <p>Range: {{this.foundUnit.Range}}</p>
          </div>
        </div>

        <div class="strongAndWeak">
          <h1 class="hideIfSmall">
            <span style="color: rgba(12, 75, 211, 0.9)">{{this.foundUnit.name}}</span> is
            <span style="color: rgba(29, 252, 0, 0.7)">strong</span> against
          </h1>
          <h1 style="padding: 30px 0 20px 0;" class="showIfSmall">
            <span >{{this.foundUnit.name}}</span> is
            <span style="color: rgba(29, 252, 0, 0.7)">strong</span> /
            <span style="color: rgba(255, 1, 1, 0.7)">weak</span> against
          </h1>
          <carousel-3d :count="this.GoodAgainst().length">
            <slide v-for="(unit,i) in this.GoodAgainst()" :index="i" :key="i">
              <div class="foundUnit foundUnitGood">
                <div class="unitImage" :style="{'background-image': `url(${unit.imageUrl})`}"></div>
                <div class="unitInfo">
                  <p>Name: {{unit.name}}</p>
                  <p>HP: {{unit.HP}}</p>
                  <p>Attack: {{unit.Attack}}</p>
                  <p>Armor Pierce: {{unit.ArmorPierce}}</p>
                  <p>Range: {{unit.Range}}</p>
                </div>
              </div>
            </slide>
          </carousel-3d>
          <!-- Small -->
          <div class="smallContainer">
            <div class="unitImagesSmall">
              <div
                class="unitImageSmall strong"
                v-on:click="SetSmallScreenChosenUnit(unit)"
                v-for="(unit,i) in this.GoodAgainst()"
                :index="i"
                :key="i"
                :style="{'background-image': `url(${unit.imageUrl})`}"
              ></div>
            </div>
            <div class="unitImagesSmall">
              <div
                class="unitImageSmall weak"
                v-on:click="SetSmallScreenChosenUnit(unit)"
                v-for="(unit,i) in this.WeakAgainst()"
                :index="i"
                :key="i"
                :style="{'background-image': `url(${unit.imageUrl})`}"
              ></div>
            </div>
          </div>

          <div
            style="align-self: center"
            v-if="this.SmallScreenChosenUnit!= ''"
            class="unitInfoSmall foundUnit chosenUnit">
            <div class="unitImage" :style="{'background-image': `url(${this.SmallScreenChosenUnit.imageUrl})`}"></div>
            <div class="unitInfo">
              <p>Name: {{this.SmallScreenChosenUnit.name}}</p>
              <p>HP: {{this.SmallScreenChosenUnit.HP}}</p>
              <p>Attack: {{this.SmallScreenChosenUnit.Attack}}</p>
              <p>Armor Pierce: {{this.SmallScreenChosenUnit.ArmorPierce}}</p>
              <p>Range: {{this.SmallScreenChosenUnit.Range}}</p>
            </div>
          </div>
          <h1 class="hideIfSmall">
            <span style="color: rgba(12, 75, 211, 0.9)">{{this.foundUnit.name}}</span> is
            <span style="color: rgba(255, 1, 1, 0.7)">weak</span> against
          </h1>

          <carousel-3d :count="this.WeakAgainst().length">
            <slide v-for="(unit,i) in this.WeakAgainst()" :index="i" :key="i">
              <div class="foundUnit foundUnitWeak">
                <div class="unitImage" :style="{'background-image': `url(${unit.imageUrl})`}"></div>
                <div class="unitInfo">
                  <p>Name: {{unit.name}}</p>
                  <p>HP: {{unit.HP}}</p>
                  <p>Attack: {{unit.Attack}}</p>
                  <p>Armor Pierce: {{unit.ArmorPierce}}</p>
                  <p>Range: {{unit.Range}}</p>
                </div>
              </div>
            </slide>
          </carousel-3d>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/search.vue";
import Claim from "./components/claim.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    Search,
    Claim,
    Carousel3d,
    Slide
  },
  data: function(){
    return {
      SmallScreenChosenUnit: ''
    }
  },
  methods: {
    cancelScroll() {
      window.scrollTo(
        0,
        document.body.scrollHeight || document.documentElement.scrollHeight
      );
    },
    SetSmallScreenChosenUnit(unit) {
      this.SmallScreenChosenUnit = unit;
    },
    GoodAgainst() {
      return this.$store.getters.getGoodAgainst;
    },
    WeakAgainst() {
      return this.$store.getters.getWeakAgainst;
    }
  },
  computed: {
    ...mapState(["foundUnit", "scrollDown"]),

  },
  updated: function() {
    this.cancelScroll();
  },
  
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");

* {
  min-width: 0;
  min-height: 0;
}
html {
  scroll-behavior: smooth;
  display: block;
  height: 100vh;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  // width: 100vw;
  line-height: 1;
}
body {
  display: flex;
  width: 100%;
  margin: 0;
}

.allUnits {
  display: flex;
  flex-direction: column;
  color: white;
  // width: 90%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  @media (min-width: 1024px) {
  }

  font-size: 1.5vh;
}
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  height: 100vh;
  background-image: linear-gradient(rgba(19, 22, 39, 0.7), rgba(0, 0, 0, 0.5)),
    url("./assets/aoe2hd.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.bgImg {
  background-image: linear-gradient(rgba(19, 22, 39, 0.7), rgba(0, 0, 0, 0.5)),
    url("./assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0%;
}
.searchBarWhenUnitFound {
  @media (max-width: 1600px) {
    display: none !important;
    margin-top: 20px;
  }
}
.foundUnit {
  display: flex;
  margin: 20px;
  border: 2px solid rgba(116, 116, 116, 0.7);
  background-color: rgba(170, 167, 167, 0.795);
  box-shadow: 0px 0px 20px 10px rgba(12, 75, 211, 0.7);

  flex-direction: row;
  height: 20vh;
  width: 25vw;

  @media (max-width: 1024px) {
    height: 10vh;
    width: 15vw;
    font-size: 1.3em;
    max-width: 250px;
  }
}
.chosenUnit {
  @media (max-width: 1024px) {
    flex: 1;
    width: 80vw !important;
  }
}
.strongAndWeak {
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1024px) {
    flex: 5;
  }
}
.foundUnitGood {
  display: flex;
  box-shadow: 0px 0px 20px 10px rgba(29, 252, 0, 0.7) !important;
  margin: 5px !important;
  width: 100% !important;
}
.foundUnitWeak {
  display: flex;
  box-shadow: 0px 0px 20px 10px rgba(255, 1, 1, 0.7) !important;
  margin: 5px !important;
  width: 100% !important;
}

.weakAgainstFoundUnit {
  position: relative;
  display: flex;
  width: 80%;
  flex: 2;
  flex-direction: row;
}
.unitImage {
  flex: 2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
  opacity: 0.85;
}
.unitInfo {
  text-align: left;
  flex: 2;
}

.carousel-3d-container {
  display: flex;
  margin: 0;
  padding: 10px 0 0 0;
  height: 26vh !important;
  width: 100% !important;
  overflow: visible !important;
  @media (max-width: 1024px) {
    display: none;
  }
}

.carousel-3d-slider {
  flex: 1;
  justify-content: center;
  margin: 0 !important;
  overflow: visible !important;

  text-align: center;
  z-index: 2;
  height: 20vh !important;
  // width: 80vw !important;
  display: flex;
  // width: 100vw !important;
}
.carousel-3d-slide {
  justify-content: center;
  overflow: visible !important;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  display: flex;
  align-items: center;
  width: 25vw !important;
  height: 20vh !important;
}

////a
.smallContainer {
  align-self: center;
  display: flex;
  flex-flow: column nowrap;
  flex: 5;
  width: 90vw;
  @media (min-width: 1024px) {
    display: none;
  }
}
.unitInfoSmall {
  display: flex;
  flex: 2;
  flex-direction: row;
  @media (min-width: 1024px) {
display: none;
  }
}
.unitImagesSmall {
  display: flex;
  align-items: center;
  justify-content: center;
  /* You can set flex-wrap and
      flex-direction individually */
  /* Or do it all in one line
     with flex flow */
  flex-flow: row wrap;
  /* tweak where items line
      up on the row
      valid values are: flex-start,
      flex-end, space-between,
      space-around, stretch */
  align-content: flex-start;
  // display: flex;
  // flex-flow: row wrap;
}
.strong {
  border-bottom: 3px solid rgba(29, 252, 0, 0.8) !important;
}

.weak {
  border-bottom: 3px solid rgba(255, 1, 1, 0.8) !important;
}
.unitImageSmall {
  display: flex;
  height: 10vh;
  min-width: 10vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // margin-right: 10px;
  opacity: 0.85;
}

.showIfSmall {
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    display: none;
  }
}
.hideIfSmall {
  @media (max-width: 1024px) {
    display: none;
  }
}
</style>
