import { useState } from "react";
import "./index.sass";
import {Cafe} from "../../services";

 


const Index = () => {
	const [l, setL] = useState();
	const [n, setN] = useState();
    const [d, setD] = useState();
    const [resultado , setResultado] = useState('')

 
    
   
    
   
	return (
		<div className="cafe">
			<main>
				<h1>Quero Café</h1>
				<div>
					Número de Estudantes - N: <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))}/>
					
                    Litros de Café - L: <input type="number" value={l} onChange={(e) => setL(Number(e.target.value))}/>
                   
                    Café por Aluno - ml: <input type="number" value={d} onChange={(e) => setD(Number(e.target.value))}/>
                    
                    <button onClick={() => resultado(setResultado) }>Verificar</button>   
					
				</div>
                 {resultado}
                
                
			</main>
		</div>
	);

};
export default Index;
