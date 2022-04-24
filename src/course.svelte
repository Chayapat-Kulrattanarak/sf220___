<script>
  import {accounts, account, mode} from "./login.js";
  
  function goPage() {
          if (document.frm.language.value != '') {   
              document.frm.action = document.frm.language.value;
              
              document.frm.submit();   
          }
  }
     
</script>

<h1>{$accounts[$account].name}</h1>


<form name="frm" method="get">  
     <select name="language">
        <option value="">select </option>
        <option value="SF210.html">SF210</option>
        <option value="SF220.html">SF220</option>
        <option value="SF230.html">SF230</option>
        
     </select>
     <input type="button" value="Go" onclick="javascript:goPage()" />

</form>
<style>
  :global(body) {
    background-color: lemonchiffon;
  }
</style>
 

<button on:click={()=>$mode='menu'}>Back to Menu</button>
