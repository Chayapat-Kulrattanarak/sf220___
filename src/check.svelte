<script>
  import {accounts, account, mode, subjects, subject} from "./login.js";
</script>

<h1>{$accounts[$account].name}</h1>

<button on:click={()=>$mode='menu'}>Back to Menu</button>

<style>
  :global(body) {
    background-color: lemonchiffon;
  }
</style>