const api = "https://api.thedogapi.com/v1/breeds";

async function dadosCaes(){
    try {
        const resposta = await fetch(api)
        const dados = await resposta.json();

        const container = document.getElementById ("caes-container");
        container.innerHTML = "";

        dados.forEach ((cao) =>{
            const div = document.createElement("div");
            const hr = document.createElement("hr");

            for (const key in cao) {
                if (key === "name" || key === "temperament"){
                    const p = document.createElement("p");
                    p.textContent = `${key}: ${cao[key]}`;
                    div.appendChild(p);
                }
            }

            container.appendChild(div);
            container.appendChild(hr);
        })
        
        } catch (error){
            console.error ("Erro ao buscar dados", error);
            document.getElementById("caes-container").innerHTML = "Erro ao carregar os dados.";
        }
}

dadosCaes();