(function(){const r=document.createElement("link").relList;
if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};
return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();
function s(n){let r=0;const o=i=>{r=i,n.innerHTML=`Subscribe for 5$/month`};n.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    
    <img src="logo_aos.png" class="logo" alt="WaxedSpades" />
    <h1>WaxedSpades!</h1>
  <section id="main" align="center">
  <p class="read-the-docs">
  <strong>WaxedSpades on WAX blockchain - Team Death Match Build and Shoot</strong><br>
  Welcome to WaxedSpades, where intense 32 versus 32 player battles unfold in a continuous Team Death Match Build and Shoot experience.<br>
  Here are the rules and mechanics that make this game exciting and competitive.
  <br><br>
  <strong>Initial Purchase</strong><br>
  To join the game, players must purchase the game client for 100 WAX through a WAX NFT. <br>
  This NFT serves as your entry ticket to the world of WaxedSpades and supports ongoing game development.
  <br><br>
  <strong>Entry Fee</strong><br>
  In addition to the initial purchase, every time you enter a new game, you must pay an entry fee of 1 WAX. <br>
  This entry fee goes into the prize pool for the match.
  <br><br>
  <strong>Earnings through Eliminations</strong><br>
  Every time you eliminate an opponent, you earn 1 WAX from the prize pool. It's not just about survival; <br>
  it's about taking down your enemies to bolster your WAX balance
  <br><br>
  <strong>Team-Based Warfare</strong><br>
  The game is divided into two teams, each consisting of 32 players. Team coordination and <br>
  strategy are key to victory. Work together to outsmart the opposing team.
  <br><br>
  <strong>Leaderboard and Rewards</strong><br>
  WaxedSpades keeps track of your eliminations, deaths, and WAX earnings. <br>
  Compete for a spot on the leaderboard and earn special rewards for your performance.
  <br><br>
  <strong>Continuous Development</strong><br>
  Your initial purchase of the game client supports ongoing game development.<br>
   Expect regular updates, new maps, and exciting features to keep the gameplay fresh and engaging.
  <br><br>
  WaxedSpades combines the thrill of FPS combat with blockchain economics, offering players a dynamic and challenging gaming experience.<br>
  So, gear up, strategize with your team, and dive into the battle for WAX supremacy!
  <br><br>
<strong>About WaxedSpades</strong>
<br>
Welcome to the world of WaxedSpades! We are a passionate team of web developers with a special <br>
focus on blockchain technologies. Our goal is to bring the magic of Ace of Spades to the blockchain community.
<br><br>
<strong>Key Features</strong>
<br>
"Compatible with Ace of Spades 0.75"<br>
"Connects to WAX blockchain"<br>
"Utilizes OpenGL/AL for an Immersive Experience"<br>
"Open Source and Cross-Platform Compatibility"<br><br>
<strong>Our Mission</strong>
<br>
Our mission is to leverage blockchain technology to create innovative gaming experiences. <br>
Join us as we explore the endless possibilities that blockchain can offer to the gaming world.<br>
 

        <br><strong>WAX blockchain</strong><br>
        <a href="https://github.com/extrasaucestudio/waxedspades_client" target="_blank">Repo Client</a> - <a href="https://github.com/extrasaucestudio/waxedspades_server" target="_blank">Repo Server</a><br>
        <a href="https://wax.bloks.io/account/freecitygamx" target="_blank">WAX Game Contract</a> -
        <a href="https://wax.bloks.io/account/eosio.token" target="_blank">WAX Token Contract</a>
        <br>  
 Contact/Join/Hire Us
 <br>
 <strong>Jordan Bourbonnais</strong><br>
 <a href="https://jordanbourbonnais.com/" target="_blank">Full-Stack Developper</a><br>
 <a href="https://www.facebook.com/messages/t/jordanbourbonnais" target="_blank">Messenger</a><br>
 <a href="https://github.com/internetbuilder/" target="_blank">Github internetbuilder</a><br>
 <a href="https://github.com/extrasaucestudio/" target="_blank">Github extrasaucestudio</a><br>
 &<br>
 <strong>Tien Nguyen</strong><br>
 <a href="https://t.me/tn102021" target="_blank">Telegram</a>
</p>
</section>
<a href="https://extrasaucestudio.com/" target="_blank"><img src="logo-extrasaucestudio.png" height="50" class="logo" alt="ExtraSauceStudio" /></a>

  </div>

`;s(document.querySelector("#counter"));
