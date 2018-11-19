import  React  from  'react';


const  GenerateQuote = ({ selectSimpson }) => {
    return (
        <div  className="GenerateQuotes">
        <button  onClick={selectSimpson}>Nouvelle citation</button>
        </div>
    );
};

export  default  GenerateQuote;