<template>
  <div class="container">
    <h1 class="display-1">One Stop Shop</h1>
    <!-- Welcome banner -->
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
        <p class="col-md-8 fs-4 mx-auto">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button class="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>

    <!-- Items -->
    <div class="row">
      <div v-for="item,i in items" class="card col-12 col-md-6 mt-2" :key="i">
        <img :src="stripImages(item.Images)" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{item.Name}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{item["Short description"]}}</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <router-link :item="item" name="Item" class="card-link" :to="{path: 'Item'}">Card link</router-link>
          <!-- <a href="#" class="card-link">Card link</a> -->
        </div>
      </div>
      <!-- <div class="card col-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card col-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card col-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card col-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card col-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card col-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import data from "../../sample_shop_data.json";

export default {
  data() {
    return {
      items: data

    }
  },
  methods: {
    stripImages(text) {
      return text.split(",")[0]
    }
  }
};
</script>

<style>
</style>