<script>
  import {islogin, mode} from "./login.js";

  function logout() {
    $islogin = false;
    $mode = '';
  }
  
</script>

<button on:click={logout}>Log Out</button>
