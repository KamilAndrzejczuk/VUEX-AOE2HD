<template>
  <div class="claimWrapper">
    <h1 class="claim">Age of Empires II HD</h1>
    <div class="subclaim">
      <p>Counter your enemy units!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Claim"
};
</script>

<style lang="scss" scoped>
.claimWrapper {
  color: whitesmoke;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.claim {
  @media (min-width: 768px) {
    margin-top: 100px;
    font-size: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 70px;
  }
  width: 70%;
  font-size: 30px;
  margin: 0;
  text-align: center;
}
.subclaim {
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
  }
  width: 50%;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
}
</style>
