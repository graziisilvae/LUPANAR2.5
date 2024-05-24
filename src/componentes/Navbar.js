import '../compohome/navv.css'

function Navbar (){
return (

<nav>
  <div id="logo">
  <img src={require('../assets/LOGO LUPANAR OFC 1.png')} alt="" />
  </div>

  <ul className="navigation-menu">
    <li><a href="/">Início</a></li>
    <li><a href="/suites">Suítes</a></li>
    <li><a href="/cardapio">Cardápio</a></li>
    <li><a href="/saibamais">Saiba mais</a></li>

  </ul>
  <div className="btn-group">
    <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">Faça o seu login</span></button>
  </div>
</nav>


);
}

export default Navbar;
  