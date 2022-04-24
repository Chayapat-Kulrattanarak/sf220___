<script>
    import {accounts, islogin, mode, account} from './login.js';
    let username = '';
    let pin = '';

    function checkLogin(){
      if (!(username in $accounts) || $accounts[username].pin != pin){
        alert('Incorrect Username or Password');
        } else {
          $islogin = true;
          $mode = 'menu';
          $account = username;
          username = '';
          pin = '';
        }   
    }
</script>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


<style>
  :global(body) {
    background-color: lemonchiffon;
  }
</style>


<body class="text-center">
    <div class="container">
        <div class="main">
        <div class="form-login">
            <form  id="form_id" method="post" name="myform">
                
                <h1 class="mb-3"><b>Login</b></h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="username" placeholder="Username" bind:value={username}>
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="password" placeholder="Password" bind:value={pin}>
                    <label for="floatingPassword">Password</label>
                  </div>

                  <button type="button" id="submit" class="btn btn-primary w-100 mt-3" on:click={checkLogin}>Login</button>
            </form>
        </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>