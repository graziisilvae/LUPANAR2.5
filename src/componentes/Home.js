function Home() {
    return (
      <div className="Home">

        <section className="hero">
          <h1>Garantindo o seu êxtase, Lupanar ideal para o seu patamar. </h1>
          <div className="btn-group">
            <button className="btn-filled-dark"><span className="material-symbols-outlined">Conecte-se</span></button>
          </div>
        </section>
        <section>
          <h2>Serviços</h2>
          <ul className="services">
            <li className="card-large card-dark card-wide" id="serv-groom">
              <div className="card-image"></div>
              <ul>
                <span className="subtitle">Suítes</span>
                <li><a href="#">Os nossos quartos possuem conforto e acomodidade que você merece. A partir de R$99,90</a></li>
                <button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button>
              </ul>
            </li>
            <li className="card-large card-dark card-wide" id="serv-board">
              <div className="card-image"></div>
              <ul>
                <span className="subtitle">Aperitivos e Bebidas</span>
                <li><a href="#">Dos mais diversos pensados de acordo com as suas preferências individuais, oferecendo as recomendações mais acessíveis.</a></li>
                <button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button>
              </ul>
            </li>
          </ul>
  
          
        </section>
        <section id="locate">
          <div>
            <h2>Quem Somos</h2>
            <p>Somos uma plataforma de Massagens e outros aspectos comprometida em proporcionar experiências inesquecíveis para todos os mais diversos grupos. Acreditamos que o relaxamento e prazer é um direito universal e estamos empenhados em tornar isso o mais agradável possível.</p>
            <div className="btn-group">
              <button className="btn-filled-dark"><span className="material-symbols-outlined">pin_drop</span> Find a Store</button>
              <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">contact_support</span> Contact Us</button>
            </div>
          </div>
        </section>
  
      </div>
    );
  }
  
  export default Home;
  
  
