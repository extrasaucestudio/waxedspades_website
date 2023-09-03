(function(){const r=document.createElement("link").relList;
if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};
return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();
function s(n){let r=0;const o=i=>{r=i,n.innerHTML=`Subscribe for 5$/month`};n.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    
    <img src="logo_aos.png" class="logo" alt="WaxedSpades" />
    <h1>WaxedSpades!</h1>
    <p class="read-the-docs">
    <strong>Ace Of Spades on WAX blockchain</strong>
    </p>
  <section id="main" align="center">
  <p class="read-the-docs">
WaxedSpades is a compatible client of Ace of Spades 0.75, offering a unique gaming experience <br>on different blockchains. Join us in our mission to create a world of endless possibilities.
<br><br>
<strong>About WaxedSpades</strong>
<br>
Welcome to the world of WaxedSpades! We are a passionate team of web developers with a special <br>focus on blockchain technologies. Our goal is to bring the magic of Ace of Spades to the blockchain community.
<br>
<strong>Key Features</strong>
<br>
"Compatible with Ace of Spades 0.75"<br>
"Connects to EOS/WAX blockchain, PySpades, and PySnip Servers"<br>
"Utilizes OpenGL/AL for an Immersive Experience"<br>
"Open Source and Cross-Platform Compatibility"<br>
<strong>Our Mission</strong>
<br>
At WaxedSpades, we are on a mission to leverage blockchain technology to create innovative gaming experiences. <br>Join us as we explore the endless possibilities that blockchain can offer to the gaming world.
 </p>
        <br><br><hr><br>
        <p class="read-the-docs">
        #1
        <br><strong>EOS/WAX blockchain</strong><br>
        <a href="https://github.com/extrasaucestudio/waxedspades_client" target="_blank">Repo Client</a> - <a href="https://github.com/extrasaucestudio/waxedspades_server" target="_blank">Repo Server</a><br>
        <a href="https://wax.bloks.io/account/freecitygamx" target="_blank">WAX Game Contract</a> -
        <a href="https://wax.bloks.io/account/eosio.token" target="_blank">WAX Token Contract</a>
        </p>
        <br><br><hr><br>
        <p class="read-the-docs">
        #2
<br><strong>IOTA blockchain</strong><br>
<a href="#" target="_blank">Repo</a> -
        <a href="#" target="_blank">Game Contract</a> -
        <a href="#" target="_blank">Token Contract</a>
        </p>
        <br><br><hr><br>
        <p class="read-the-docs">
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
  </div>

`;s(document.querySelector("#counter"));
