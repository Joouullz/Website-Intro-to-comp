<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Get Started — Bukidnon Trail Masters</title>
  <link rel="stylesheet" href="style.css">
  <style>

    /* Green nature theme for intro */
    :root {
      --green-900: #072617;
      --green-800: #0b3d2e;
      --green-700: #1e5238;
      --accent: #81c784;
      --muted: #cfe8d3;
      --text-on-green: #ffffff;
    }
    /* Minimal styles for the intro page */
    body { display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0; font-family:Segoe UI, Arial, sans-serif; background: linear-gradient(180deg,var(--green-800) 0%, var(--green-700) 100%); color:var(--text-on-green); }
    .intro { text-align:center; padding:36px; max-width:820px; }
    .intro img { width:110px; height:110px; border-radius:16px; object-fit:cover; margin-bottom:18px; box-shadow: 0 8px 24px rgba(0,0,0,0.35); }
    h1 { font-size:2.2rem; margin:0 0 8px; }
    p.lead { font-size:1.05rem; color:var(--muted); margin:0 0 20px; }
    .buttons { display:flex; gap:12px; justify-content:center; margin-top:18px; }
    .btn { background: linear-gradient(180deg,var(--accent), var(--green-700)); color:var(--green-900); padding:12px 22px; border-radius:10px; text-decoration:none; font-weight:700; box-shadow: 0 8px 20px rgba(0,0,0,0.25); }
    .btn.secondary { background: transparent; border: 1px solid rgba(255,255,255,0.12); color:var(--text-on-green); }
    .small { font-size:0.9rem; color:var(--muted); margin-top:12px; }
    .btn:focus, .btn.secondary:focus { outline: 3px solid rgba(129,199,132,0.18); outline-offset: 4px; }

    /* ----------------------------------
       ADDED ONLY: animation CSS
    ---------------------------------- */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .float {
      display: inline-block;
    }

  </style>
</head>
<body>
  <main class="intro">
    <img src="logo-btm.png" alt="Logo" class="fade-in float">
    <h1 class="fade-in">Welcome to Bukidnon Trail Masters</h1>
    <p class="lead fade-in">Find trails, plan adventures, and discover outdoor routes near you. This short intro will help you get started.</p>

    <div class="buttons fade-in">
      <a class="btn" href="home.html">Get Started</a>
    </div>
  </main>

  <!-- ADDED ONLY: link to your JS animation file -->
  <script src="animations.js"></script>
</body>
</html>
