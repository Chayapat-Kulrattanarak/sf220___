<script>
  import {accounts, account, mode, subject, subjects} from "./login.js";

    function addTask() {
  $accounts[$account].quotasf210.push({task: $subjects['sf210'].name, done: false});
  $accounts[$account].quotasf210 = $accounts[$account].quotasf210}
  
  function addTask1() {
    $accounts[$account].quotasf220.push({task: $subjects['sf220'].name, done: false});
    $accounts[$account].quotasf220 = $accounts[$account].quotasf220}

  function addTask2() {
    $accounts[$account].quotasf230.push({task: $subjects['sf230'].name, done: false});
    $accounts[$account].quotasf230 = $accounts[$account].quotasf230}

    function removeTask(index) { $accounts[$account].quotasf210.splice($subjects['sf210'].name,1);
  $accounts[$account].quotasf210 = $accounts[$account].quotasf210
  }
    function removeTask1(index) { $accounts[$account].quotasf220.splice($subjects['sf220'].name,1);
  $accounts[$account].quotasf220 = $accounts[$account].quotasf220
  }
    function removeTask2(index) { $accounts[$account].quotasf230.splice($subjects['sf230'].name,1);
  $accounts[$account].quotasf230 = $accounts[$account].quotasf230
  }

    function request(amount) {
    $subjects['sf210'].quota -= amount;}
    function request1(amount) {
    $subjects['sf220'].quota -= amount;}
    function request2(amount) {
    $subjects['sf230'].quota -= amount;}
    function Cancle(amount) {
    $subjects['sf210'].quota += amount;}
    function Cancle1(amount) {
    $subjects['sf220'].quota += amount;}
    function Cancle2(amount) {
    $subjects['sf230'].quota += amount;}
  
</script>

<h1>{$accounts[$account].name}</h1>

<button on:click={()=>$mode='menu'}>Back to Menu</button>

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<style>
  body{
  box-shadow:inset 0 0 0 2000px rgba(255, 0, 150, 0.3);
  }
</style>
<table class="table table-dark table-hover" id="overlay">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Subjects</th>
      <th scope="col">Instructor</th>
      <th scope="col">Section</th>
      <th scope="col">Quota</th>
      <th scope="col">    </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SF210</td>
      <td>รศ.ดร.วีรชัย อโณทัยไพบูลย์</td>
      <td>760001</td>
      <td>{$subjects['sf210'].quota}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button class="btn btn-success" on:click={() => request(1)}
        disabled={ $subjects['sf210'].quota <= 0}
        on:click={addTask}>ขอโควตา</button>
          <button class="btn btn-danger" on:click={()=>Cancle(1)}
        disabled={ $subjects['sf210'].quota >= 3 }
        on:click={removeTask}>ยกเลิก</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SF220</td>
      <td>รศ.ดร.วีรชัย อโณทัยไพบูลย์</td>
      <td>760001</td>
      <td>{$subjects['sf220'].quota}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button class="btn btn-success" on:click={() => request1(1)}
        disabled={ $subjects['sf220'].quota <= 0}
        on:click={addTask1}>ขอโควตา</button>
          <button class="btn btn-danger" on:click={()=>Cancle1(1)}
        disabled={ $subjects['sf220'].quota >= 3 }
        on:click={removeTask1}>ยกเลิก</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>SF230</td>
      <td>รศ.ดร.วีรชัย อโณทัยไพบูลย์</td>
      <td>760001</td>
      <td>{$subjects['sf230'].quota}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button class="btn btn-success" on:click|once={() => request2(1)}
        disabled={ $subjects['sf230'].quota <= 0}
        on:click={addTask2}>ขอโควตา</button>
          <button class="btn btn-danger" on:click|once={()=>Cancle2(1)}
        disabled={ $subjects['sf230'].quota >= 3 }
        on:click={removeTask2}>ยกเลิก</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<!-- <style>
  :global(body) {
    background-color: lemonchiffon;
  }
</style> -->





