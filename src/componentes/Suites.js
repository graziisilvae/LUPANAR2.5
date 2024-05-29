import '../compohome/suite.css';

function Suites() {
return (

<body>
<div className="quartos">

      <div className='qrtoTerapy'>
        <img src={require('../assets/mass1.png')} alt="Quarto Terapy" />
        <h2>Quarto Terapy</h2>
        <h4>Valor: R$67,90</h4>
      </div>

      <div className='qrtoPositive'>
          <img src={require('../assets/quarto2.png')} alt="Quarto Positive" />
          <h2>Quarto Positive</h2>
          <h4>Valor: R$67,90</h4>
      </div>

      <div className='qrtoEstime'>
        <img src={require('../assets/quart.png')} alt="Quarto Estime" />
        <h2>Quarto Estime</h2>
        <h4>Valor: R$67,90</h4>
      </div>

</div>


</body>

    );
  }
  
export default Suites;
  
