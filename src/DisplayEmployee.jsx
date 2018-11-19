import  React  from  'react';

const  DisplayQuotes = ({ simpson }) => {
    return (
        <div  className="DisplayQuotes">
            <img  src={simpson.image}  alt="picture"  />
            <ul>
                <li> quote : {simpson.quote}</li>
                <li>character : {simpson.character}</li>
                <li>characterDirection : {simpson.characterDirection}</li>
            </ul>
        </div>
    );
};


export  default  DisplayQuotes;