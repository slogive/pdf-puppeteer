import convertHTMLToPDF from "pdf-puppeteer";

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pagaduria</title>
    <style type="text/css">
      .pagaduria {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid black;
        border-radius: 20px;
        padding: 20px;
        gap: 20px;
        margin: 20px;
        width: 1056px;
		font-family: 'Helvetica', 'Arial', sans-serif;
      }

      .pagaduria strong {
        text-transform: uppercase;
      }

      .pagaduria .title {
        color: green;
      }

      .pagaduria .info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
      }

      .pagaduria .info img {
        width: 200px;
        height: 80px;
        object-fit: contain;
      }

      .pagaduria .info .offices {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max-content;
        gap: 5px;
        font-size: 12px;
      }
      .pagaduria .info .offices .line {
        background-color: black;
        width: calc(100% + 40px);
        height: 2px;
      }
      .pagaduria .info .date-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .pagaduria .info .date-details .date-title {
        font-weight: bold;
        text-align: center;
      }
      .pagaduria .info .date-details .date-info {
        display: flex;
        justify-content: space-between;
        border: 2px solid black;
        border-radius: 10px;
        width: 100%;
        background-color: black;
      }
      .pagaduria .info .date-details .date-info .date-item {
        display: flex;
        width: calc(100% / 3);
        flex-direction: column;
        text-align: center;
      }
      .pagaduria .info .date-details .date-info .date-item .label {
        background-color: black;
        color: white;
        text-transform: uppercase;
        font-size: 12px;
        padding: 2px;
      }
      .pagaduria .info .date-details .date-info .date-item .value {
        background-color: white;
        color: black;
        font-size: 16px;
        padding: 2px;
        font-weight: bolder;
      }
      .pagaduria .info .date-details .date-info .item-1 .label {
        border-radius: 9px 0px 0px 9px;
      }
      .pagaduria .info .date-details .date-info .item-1 .value {
        border-radius: 0px 0px 0px 9px;
      }
      .pagaduria .info .date-details .date-info .item-3 .label {
        border-radius: 0px 9px 0px 0px;
      }
      .pagaduria .info .date-details .date-info .item-3 .value {
        border-radius: 0px 0px 9px 0px;
      }
      .pagaduria .company {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
      }
      .pagaduria .company .value {
        font-weight: bolder;
        text-transform: uppercase;
      }
      .pagaduria .details {
        text-align: justify;
      }
      .pagaduria .request-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
      }
      .pagaduria .request-details .request-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
      }
      .pagaduria .request-details .request-info .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 150px;
      }
      .pagaduria .request-details .request-info .info-item .value {
        text-transform: uppercase;
        font-weight: bolder;
      }
      .pagaduria .annulment {
        width: 100%;
        text-align: left;
        font-style: italic;
        margin-bottom: -10px;
      }
      .pagaduria .auth-fcc {
        width: 100%;
        text-align: left;
      }
      .pagaduria .signs {
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: flex-start;
      }
      .pagaduria .signs .employer-sign {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
      }
      .pagaduria .signs .employer-sign .identification {
        font-size: 12px;
      }
      .pagaduria .signs .employer-sign img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
      .pagaduria .signs .employer-sign .identification {
        font-weight: bolder;
      }
      .pagaduria .signs .sign-business {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .pagaduria .signs .sign-business img {
        height: 100px;
        width: 100%;
        object-fit: contain;
      }
    </style>
  </head>
  <body>
    <div class="pagaduria">
      <div class="info">
        <div class="offices">
          <div class="line"></div>
          <div class="office-item">
            Medellín: Calle 34 # 43-66 | C.C. San Diego | Bloque Norte | Of. 235
            | Tel: 4482540
          </div>
          <div class="line"></div>
          <div class="office-item">
            Rionegro: Calle 49 # 48-63 | Of. 201 | Edificio Royal Plaza | Parque
            Ppal. | Tel: 3663280
          </div>
          <div class="line"></div>
        </div>
        <div class="date-details">
          <div class="date-title">
            GARANTÍA PERSONAL<br />
            CRÉDITO POR LIBRANZA
          </div>
          <div class="date-info">
            <div class="date-item item-1">
              <div class="label">DÍA</div>
              <div class="value">DIA</div>
            </div>
            <div class="date-item item-2">
              <div class="label">MES</div>
              <div class="value">MES</div>
            </div>
            <div class="date-item item-3">
              <div class="label">AÑO</div>
              <div class="value">AÑO</div>
            </div>
          </div>
        </div>
      </div>
      <div class="company">
        <div class="label">EMPRESA</div>
        <div class="value">COMPAÑIA</div>
      </div>
      <div class="details">
        Yo <strong>FULL NAME</strong> indetificado(a) con
        <strong>IDENTIFICATION TYPE</strong> número
        <strong>IDENTIFICATION NUMBER</strong> en condición y trabajador de esta
        empresa y cliente de <strong>BUSINESS</strong> autorizo a
        pagaduría de la empresa <strong>COMPANY</strong> para que
        retengan de mi salario a favor de <strong>BUSINESS</strong> la
        suma de <strong>TOTAL</strong>, para garantizar a
        <strong>BUSINESS</strong> la oportuna cancelación de las cuotas
        del crédito número <strong>ID</strong>. Así mismo, autorizo
        retener irrevocablemente de mi salario, liquidación total y de mis
        prestaciones sociales; hasta tanto se haga el pago total de mi
        obligación.
      </div>
      <div class="request-details">
        <div>Favor realizar deducción</div>
        <div class="request-info">
          <div class="info-item">
            <div class="label">Periodicidad</div>
            <div class="value">MENSUAL</div>
          </div>
          <div class="info-item">
            <div class="label">Valor cuota</div>
            <div class="value">CUOTA</div>
          </div>
          <div class="info-item">
            <div class="label">Número de cuotas</div>
            <div class="value">TERM</div>
          </div>
        </div>
      </div>
      <div class="details">
        Sírvase además descontar, por anticipado durante el tiempo que
        permanezca en vacaciones o licencia el valor de las cuotas que deba de
        pagar, incluídos los servicios del crédito descritos anteriormente y en
        caso de mi retiro definitivo, sea con justa casa o sin justa causa, de
        la empresa, les autorizo para que deduzcan de mis prestaciones sociales,
        indemnización o cualquier otro concepto tenga derecho el valor máximo
        permitido y sea paga a <strong>BUSINESS</strong>.
      </div>
      <div class="details">
        Yo <strong>COMPANY</strong> representada legalmente por
        <strong>NOMBRE REPRESENTANTE</strong> me comprometo a realizar las
        deducciones autorizadas en la presente libranza por el trabajador
        <strong>FULL NAME</strong> con
        <strong>IDENTIFICATION TYPE IDENTIFICATION NUMBER</strong>.
      </div>
      <div class="annulment">ESTA LIBRANZA ANULA LA ANTERIOR</div>
      <div class="auth-fcc">
        Igualmente, autorizo descuento de Fondo de cobertura crediticia (FCC)
        <strong> TOTAL FCC</strong>
      </div>
      <div class="signs">
        <div class="employer-sign">
          <div>Firma empleado</div>
          <div class="identification">
            IDENTIFICATION TYPE<br/> IDENTIFICATION NUMBER
          </div>
        </div>
        <div class="company-sign-seal">Firma y Sello de la Empresa</div>
        <div class="sign-business">
		  <div>Firma</div>
          <img src="" />
          <div class="description"><strong>BUSINESS</strong></div>
        </div>
      </div>
    </div>
  </body>
</html>`;

convertHTMLToPDF(
  html,
  (pdf: any) => {
    console.log(pdf);
  },
  undefined,
  undefined,
  true
);
