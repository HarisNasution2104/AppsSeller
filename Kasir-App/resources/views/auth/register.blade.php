@extends('layouts.auth')
@section('register')
<div class="form-container2">
    <p class="title2">Create account</p>
    <p class="sub-title2">HOI!!</p>
    <form class="form2">
      <input type="text" class="input" placeholder="Name">
      <input type="email" class="input" placeholder="Email">
      <input type="password" class="input" placeholder="Password">
      <button class="form-btn2">Create account</button>
    </form>
    <p class="sign-up-label2">
      Already have an account?<span class="sign-up-link2"><a href="{{ url('login') }}">Log in</a></span>
    </p>
  </div>
@endsection