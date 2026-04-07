import styles from "./CorpoClinico.module.css";
import { useRef, useEffect } from "react";

const corpoClinico = [
{
setor:"UTI Adulto",
medicos:[
{
nome:"Dr. ANTONIO RORIZ NETO",
crm:"15081-CE",
foto:"roriz.jpeg"
},
{
nome:"Dr. JEAN MAIA MAGALHAES",
crm:"23809-CE",
foto:".png"
},
{
nome:"Dra. THAYS COSTA GOMES",
crm:"20566-CE",
foto:".png"
},
{
nome:"Dra. NADINE DE MORAIS BEZERRA",
crm:"22830-CE",
foto:".png"
},
{
nome:"Dr. FRANCISCO CARLOS OLIVEIRA JUNIOR",
crm:"16231-CE",
foto:".png"
},
{
nome:"Dr. FELIPE COUTINHO VASCONCELOS",
crm:"27178-CE",
foto:".png"
},
{
nome:"Dr. ÊNIO LIMA SOUSA",
crm:"22142-CE",
foto:".png"
},
]
},
{
setor: "UTI Pediátrica",
medicos: [
{
nome:"DRA. GABRIELLA MONTEIRO FEITOSA DE SÁ RORIZ",
crm:"15128-CE",
foto:"gabi.jpeg"
},
{
nome:"DRA. AMABYLLE COSTA PASSOS",
crm:"28112-CE",
foto:"amabyle.jpeg"
},
{
nome:"DR. MOABE BATISTA DE LIMA",
crm:"20703-CE",
foto:"moabe.jpeg"
},
{
nome:"DRA. ROSYANE PEREIRA TAVARES",
crm:"14970-CE",
foto:"rosyane.PNG"
},
{
nome:"DR. JACQUES TAVARES PEREIRA FILHO",
crm:"24111-CE",
foto:".png"
},
{
nome:"DR. REIKSON RONILDES FILGUEIRA BRASIL",
crm:"11663-CE",
foto:".png"
},
{
nome:"DR. HELIO FILLIPE DA SILVA FERREIRA",
crm:"26416-CE",
foto:"helio.jpeg"
},
{
nome:"DR. JOSE RENATO LUCAS",
crm:"23731-CE",
foto:"renato.jpeg"
},
{
nome:"DR. NATANAEL ALVES DE LIMA",
crm:"28816''-CE",
foto:"natanael.jpeg"
},
]
},
{
setor: "Clínica Médica Adulta",
medicos: [
{
nome:"DR. CARLOS ANTONIO SOBREIRA ALEXANDRE",
crm:"20559-CE",
foto:"carlos1.png"
},
{
nome:"DRA. LETICIA GUIMARAES DAMIAO PINTO",
crm:"24875-CE",
foto:".png"
},
{
nome:"DRA. BRUNA BASTOS DE LUCENA",
crm:"28328-CE",
foto:".png"
},
{
nome:"DRA. RAQUEL VIANA DOS SANTOS",
crm:"28305-CE",
foto:".png"
},
{
nome:"DRA. MYLENA BANDEIRA ORIÁ RIOS",
crm:"26577-CE",
foto:".png"
},
{
nome:"DRA. LAISA QUEIROGA DE ARAUJO",
crm:"26799-CE",
foto:".png"
},
{
nome:"DRA. DANIELLY BATISTA BRAGA RICARTE",
crm:"25692-CE",
foto:".png"
},
{
nome:"DRA. VIRNA MARIA GOMES MENEZES",
crm:"29888-CE",
foto:".png"
},
{
nome:"DR. ANTONIO NELSON ALENCAR DE ARAUJO",
crm:"23410-CE",
foto:".png"
},
{
nome:"DR. LUCAS SIDRONE BANDEIRA FREITAS",
crm:"24855-CE",
foto:".png"
},
{
nome:"DR. ANTONIO HILDECARLOS MELO JUNIOR",
crm:"30410-CE",
foto:".png"
},
{
nome:"DRA. MÔNICA CURINGA COUTINHO",
crm:"28981-CE",
foto:".png"
},


]

},
{
setor: "Pediatria",
medicos: [
{
nome:"DRA. SUELANI ALVES BEZERRA",
crm:"14795-CE",
foto:".png"
}
]
}
];

function CorpoClinico(){

const scrollRefs = useRef([]);

const scroll = (index,direction)=>{

const container = scrollRefs.current[index];
if(!container) return;

const card = container.querySelector(`.${styles.medicoCard}`);
const gap = 25;
const amount = card.offsetWidth + gap;

container.scrollBy({
left: direction === "right" ? amount : -amount,
behavior:"smooth"
});

};

useEffect(()=>{

const intervals = scrollRefs.current.map(container=>{

if(!container) return;

return setInterval(()=>{

const card = container.querySelector(`.${styles.medicoCard}`);
if(!card) return;

const gap = 25;
const step = card.offsetWidth + gap;

container.scrollBy({
left: step,
behavior:"smooth"
});

const maxScroll = container.scrollWidth - container.clientWidth;

if(container.scrollLeft >= maxScroll - 5){
setTimeout(()=>{
container.scrollTo({left:0,behavior:"smooth"});
},500);
}

},3000); 

});

return ()=>intervals.forEach(i=>clearInterval(i));

},[]);

return(

<div className={styles.container}>

<div className={styles.titleRow}>
<h1>Corpo Clínico</h1>
<div className={styles.line}></div>
</div>

{corpoClinico.map((setor,setorIndex)=>(

<div key={setorIndex} className={styles.setorSection}>

<h2 className={styles.setorTitle}>{setor.setor}</h2>

<div className={styles.sliderWrapper}>

<button
className={`${styles.arrow} ${styles.left}`}
onClick={()=>scroll(setorIndex,"left")}
>
❮
</button>

<div
className={styles.cardsScroll}
ref={(el)=>scrollRefs.current[setorIndex]=el}
>

{setor.medicos.map((medico,index)=>(

<div key={index} className={styles.medicoCard}>

<img
src={medico.foto}
alt={medico.nome}
loading="lazy"
className={styles.foto}
/>

<div className={styles.info}>

<h3>{medico.nome}</h3>
<p><strong>CRM:</strong> {medico.crm}</p>


</div>

</div>

))}

</div>

<button
className={`${styles.arrow} ${styles.right}`}
onClick={()=>scroll(setorIndex,"right")}
>
❯
</button>

</div>

</div>

))}

</div>

);

}

export default CorpoClinico;