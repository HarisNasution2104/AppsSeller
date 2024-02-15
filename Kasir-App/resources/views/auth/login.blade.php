@extends('layouts.auth')
@section('login')

<div class="form-container">
    <p class="title">WELCOME!!!</p>
    <form action="{{ route('login') }}" method="post">
        @csrf
            <div class="form @error('email') has-error @enderror">
              <input type="email" name="email" class="input" placeholder="Email" required value="{{ old('email') }}">

              @error('email')
              <small class="text-danger">{{ $message }}</small>
              @enderror
            </div>
            <div class="form @error ('password') has-error @enderror">
                <input type="password" name="password" class="input" placeholder="Password" required>

              @error('password')
              <div class="alert alert-danger">{{ $message }}</div>
              @enderror
            </div>
      <!--
      <input type="email" name="email" class="input has-error" placeholder="Email" required>
      
      <input type="password" name="password" class="input" placeholder="Password" required>
      <span class="help-block">Help Block With Eror</span>-->
      <p class="page-link">
        <span class="page-link-label">Forgot Password?</span>
      </p>
      <button class="btn btn-primary btn-block">Log in</button>
    </form>
    <p class="sign-up-label">
      Don't have an account?<span class="sign-up-link"><a href="{{ url('register') }}">Sign up</a></span>
    </p>
</div>
@endsection