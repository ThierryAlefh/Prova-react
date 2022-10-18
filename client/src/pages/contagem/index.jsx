import { useState } from "react";
import "./index.sass";
import { Contagem } from "../../services";
 


const Index = () => {
	const [inicio, setInicio] = useState();
	const [final, setFinal] = useState();
    const [resultado , setResultado] = useState('')

    function verificar() {
		if (inicio >= final) {
			alert('')
			return;
		}
        else if (inicio == final) {
			alert('Não são Contados Números Negativos');
			return;
		}
       
        
        setResultado(Contagem(inicio,final))
    
	}
    
   
	return (
		<div className="contagem">
			<main>
				<h1>Contagem</h1>
				<div>
					Inicio: <input type="number" value={inicio} onChange={(e) => setInicio(Number(e.target.value))}/>
					
				
                    Final: <input type="number" value={final} onChange={(e) => setFinal(Number(e.target.value))}/>
                   
                
                    <button onClick={() => verificar() }>Contar</button>   
					
				</div>
                 {resultado}
                
                
			</main>
		</div>
	);

};
export default Index;



