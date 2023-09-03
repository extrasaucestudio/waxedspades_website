(function(){const r=document.createElement("link").relList;
if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};
return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();
function s(n){let r=0;const o=i=>{r=i,n.innerHTML=`Subscribe for 5$/month`};n.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    
    <img src="logo_aos.png" class="logo" alt="WaxedSpades" />
    <h1>WaxedSpades!</h1>
    <p class="read-the-docs">
    <strong>Ace Of Spades on WAX blockchain</strong>
    <center>
    <table>
    <tr>
      <th>Sandbox building and FPS videogame</th>
    </tr>
    <tr>
      <td>WaxedSpades is a compatible client of Ace of Spades 0.75.<br>
      Can connect to a vanilla/pyspades/pysnip server.<br>
      Uses OpenGL/AL for better experience.<br>
      Open source, and cross platform.</td>
    </tr>
  </table>
  </center>
  <section id="main" align="center">
<p>Waxio Team Projects Labs
        <br><br>
        Welcome, we are the Waxio team. Passionate but especially web development, we focus our efforts on technologies that can be realized from the WAX/EOS blockchain. Here are our different projects.
        <br><br>
        <hr><br>
        #1
        <br>FreeCityGame - Platform Multi Game Interacting With Wax NFT Standard Assets.<br>
        <a href="https://remixworlds.com/" target="_blank">Visit Remixworlds.com!</a><br>
        <a href="https://github.com/internetbuilder/wax_remixworlds3" target="_blank">Repo</a> -
        <a href="https://wax.bloks.io/account/freecitygamx" target="_blank">Game Contract</a> -
        <a href="https://wax.bloks.io/account/remixgamingx" target="_blank">Token Contract</a>
         <br>
         Team: <a href="https://jordanbourbonnais.com/" target="_blank">Jordan Bourbonnais</a> & <a href="https://t.me/tn102021" target="_blank">Tien Nguyen</a>
        <br><br><hr><br>
#2
<br>WaxAffiliation - Affiliate program between advertiser and pubisher on wax blockchain.<br>
<a href="https://waxaffiliation.io/" target="_blank">Visit Waxaffiliation.io!</a> <br>
         Repo - Contract
         <br>
         Team: <a href="https://jordanbourbonnais.com/" target="_blank">Jordan Bourbonnais</a> & <a href="https://t.me/tn102021" target="_blank">Tien Nguyen</a>
        <br><br><hr><br>
        #3
<br>WaxPOS - Multi merchant POS platform on wax blockchain working with phisical WAX/EOS payment gateway. <br>
         Repo - <a href="https://wax.bloks.io/account/waxioiopos11" target="_blank">Contract</a>
         <br>
         Team: <a href="https://jordanbourbonnais.com/" target="_blank">Jordan Bourbonnais</a> & <a href="https://t.me/tn102021" target="_blank">Tien Nguyen</a>
        <br><br><hr><br>
        #4
        <br>Wax Betting - Casino platform based on wax blockchain.  <br>
        Repo - Contract
        <br>
         Team: <a href="https://jordanbourbonnais.com/" target="_blank">Jordan Bourbonnais</a> & <a href="https://t.me/tn102021" target="_blank">Tien Nguyen</a>
                <br><br>
        <hr>
        <br>
 Join the team or Hire Us<br>
 Contact me on <a href="https://www.facebook.com/messages/t/jordanbourbonnais" target="_blank">Messenger</a>
</section>
  </div>

`;s(document.querySelector("#counter"));
