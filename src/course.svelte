

<h1>{$accounts[$account].name}</h1>
<select id="mySelect">
  <option value="SF210.html">SF210</option>
  <option value="SF220.html">SF220</option>
  <option value="SF230.html">SF230</option>
  
</select>
<button type="button" onclick="redirect()">Go</button>
<script>
  import {accounts, account, mode} from "./login.js";
  
  function goPage() {
          if (document.frm.language.value != '') {   
              document.frm.action = document.frm.language.value;
              
              document.frm.submit();   
          }
  }
  function select(SF210) {
  var x = document.getElementById("mySelect").selectedIndex;
} 
  function redirect(SF210) {
  window.location.href('SF210.html');
  }
</script>

<style>
  :global(body) {
    background-color: lemonchiffon;
  }
</style>
 

<button on:click={()=>$mode='menu'}>Back to Menu</button>
