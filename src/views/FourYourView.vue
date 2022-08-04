<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
           <nav-bar-components />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
                <cart-components />
                <cart-components />
                <cart-components />
                <cart-components />
                <cart-components />
                <cart-components />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </main>
</template>

<script>
import NavBarComponents from "@/components/NavBarComponents.vue";
import CartComponents from "@/components/CartComponents.vue";

export default {
    components: {NavBarComponents, CartComponents},
    data() {
    return {
      cart: [
        {
          id: 0,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          text: "10.73$",
          price: "",
        },
        {
          id: 1,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          text: "10.73$",
          price: "",
        },
        {
          id: 2,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          text: "10.73$",
          price: "",
        },
        {
          id: 3,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          text: "10.73$",
          price: "",
        },
        {
          id: 4,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          text: "10.73$",
          price: "",
        },
        {
          id: 5,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          text: "10.73$",
          price: "",
        },
      ],
    };
  },
}
</script>