document.addEventListener("DOMContentLoaded", () => {

    const fetchIbge = () => {

        const getIbgeUrl = UF => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}`
        const ibgePromises = []
        for (let i = 11; i <= 53; i++) {
            ibgePromises.push(fetch(getIbgeUrl(i)).then(response => response.json()))
        }


        Promise.all(ibgePromises)
            .then(ibge => {

                const liIbge = ibge.reduce((accumulator, ibgeDados) => {

                    accumulator +=
                        `<li><h2> ${ibgeDados.nome}</h2></li>
                        <li><h2> ${ibgeDados.sigla}</h2></li>`


                    return accumulator


                }, '');

                console.log(liIbge)

                const outputElement = document.getElementById("output")
                outputElement.innerHTML = `<ul>${liIbge}</ul>`;


            });
    }

    fetchIbge();

});