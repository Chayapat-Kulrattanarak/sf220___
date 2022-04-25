<script>
  import Check from './check.svelte';
  import {accounts, account, mode, subjects, subject} from "./login.js";
</script>

<h1>{$accounts[$account].name}</h1>

<button on:click={()=>$mode='menu'}>Back to Menu</button>

<h1><br>รายชื่อวิชาที่ขอโควตาไปแล้ว</h1>

{#each $accounts[$account].quotasf210 as {task, done}, index}
 <span class:done={done}>{task}</span><br>
{/each}
{#each $accounts[$account].quotasf220 as {task, done}, index}
 <span class:done={done}>{task}</span><br>
{/each}
{#each $accounts[$account].quotasf230 as {task, done}, index}
 <span class:done={done}>{task}</span><br>
{/each}

<br>
<br>

<style>
  :global(body) {
    background-color: lemonchiffon;
  }
</style>