<template>
  <div class="div">
    <nav>
      <!-- aタグだとページ全体が読み込みされてしまう、けどHTMLではaタグになる、tag属性で他のに指定もできる-->
      <!-- active-classはアクティブなコンポーネントにだけ適用し、exact属性を付けるとtoURLが完全一致したものだけに適用させる -->
      <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
      <router-link to="/users" active-class="link--active" exact class="link">Users</router-link>
    </nav>
    <!-- router-viewが動的コンポーネントの役割をする。つまりurlによってコンポーネントの内容を変えてくれている -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .div {
    width: 700px;
    margin: auto;
    padding-top: 50px;
  }

  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
  }
</style>