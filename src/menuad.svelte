<script>
  import {accounts, account, mode} from "./login.js";
  
</script>

<h1>{$accounts[$account].name}</h1>
<button on:click={()=>$mode='approve'}>อนุมัติ</button>
<button on:click={()=>$mode='adddrop'}>เพิ่ม/ลด โควตารายวิชา</button>
<button on:click={()=>$mode='menuad'}>Back to Menu</button>
