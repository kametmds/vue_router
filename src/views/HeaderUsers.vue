<template>
  <div>
    <h2>Users</h2>
    <nav>
      <!-- aタグだとページ全体が読み込みされてしまう、けどHTMLではaタグになる、tag属性で他のに指定もできる-->
      <!-- active-classはアクティブなコンポーネントにだけ適用し、exact属性を付けるとtoURLが完全一致したものだけに適用させる -->
      <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
      <router-link to="/users" active-class="link--active" exact class="link">Users</router-link>
    </nav>
  </div>
</template>