<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          |
          <li>
            <router-link :to="{ name: 'FormRegister' }">Register</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

ul {
  padding-left: 0;
}

ul li {
  display: inline-block;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
