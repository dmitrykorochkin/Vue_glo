<template>
  <div class="best__item">
    <img src="@/assets/img/coffee-3.jpg" alt="coffee" />
    <div class="best__item-title">AROMISTICO Coffee 1kg</div>
    <div class="best__item-price">6.99$</div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      cart: [ 
        {
          id: 0,
          img: "coffee-1.jpg",
          title: "AROMISTICO Coffee 1kg",
          price: "6.99$"
        },
        {
          id: 1,
          img: "coffee-2.jpg",
          title: "Presto Coffee Beans 1kg",
          price: "15.99$"
        },
        {
          id: 2,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "6.99$$"
        }

      ]
    }
  }
}
</script>