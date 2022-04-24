<script>
  import {accounts, account, mode} from "./login.js";
  
</script>

<h1>{$accounts[$account].name}</h1>
<button on:click={()=>$mode='request'}>ขอโควตา</button>
<button on:click={()=>$mode='course'}>รายชื่อวิชา</button>
<button on:click={()=>$mode='check'}>ผลการขอโควตา</button>
