
<script>
    import {islogin, mode} from "./login.js";
    import Login from "./login.svelte";
    import Logout from "./logout.svelte";
    import Menu from "./menu.svelte";
    import Request from "./request.svelte";
    import Course from "./course.svelte";
    import Check from "./check.svelte";
  
</script>


{#if !$islogin}
  <Login />
{:else}
    {#if $mode == 'menu'}
      <Menu />
    {:else if $mode == 'request'}
      <Request />
    {:else if $mode == 'course'}
      <Course />
    {:else if $mode == 'check'}
      <Check />
    {/if}    
  <Logout />
{/if}
{$mode}
