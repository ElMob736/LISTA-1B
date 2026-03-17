 function calcular() {
      const capital = 1000;
      const taxa = 0.05; // 5%
      const meses = parseInt(document.getElementById("meses").value);

      if (isNaN(meses) || meses <= 0) {
        document.getElementById("resultado").innerHTML = "Digite um número de meses válido!";
        return;
      }

      // Fórmula: J = C * i * t
      const juros = capital * taxa * meses;
      const total = capital + juros;
      const jurosMensal = capital * taxa;

      // Formatação
      const formatar = (valor) => {
        return valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        });
      };

      let lista = "<ul>";
      let acumulado = capital;

      for (let i = 1; i <= meses; i++) {
        acumulado += jurosMensal;
        lista += `<li>Mês ${i}: ${formatar(acumulado)}</li>`;
      }
      lista += "</ul>";

      document.getElementById("resultado").innerHTML = `
        Valor inicial: ${formatar(capital)} <br>
        Juros mensal: ${formatar(jurosMensal)} <br>
        Total de juros: ${formatar(juros)} <br>
        <strong>Total a pagar: ${formatar(total)}</strong>
        <br><br>
        <strong>Evolução mês a mês:</strong>
        ${lista}
      `;
    }