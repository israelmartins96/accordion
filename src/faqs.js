// ***IMPORTS*** //
import React from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';

// ***COMPONENT FOR THE FAQs*** //
const Faqs = ( {faqs} ) => {
    return(
        <div className='faqs'>
        {
            faqs.map(
                (faq) => {
                    return(
                        <Faq key={ faq.id } {...faq} />
                    );
                }
            )
        }
        </div>
    );
};

// ***COMPONENT FOR EACH FAQ*** //
const Faq = ( {id, question, answer} ) => {
    const [isAnswerExpanded, setIsAnswerExpanded] = React.useState(false);

    // Toggles the display of a question's corresponding answer
    const toggleAnswer = (id) => {
        setIsAnswerExpanded(!isAnswerExpanded);
    };
    
    return(
        <div className='faq'>
            <header onClick={ () => { toggleAnswer(id); } }>
                <h3 className='question'>{ question }</h3>
                <button className='answer-toggle' title={ isAnswerExpanded ? 'Hide answer' : 'Show answer' }>{ isAnswerExpanded ? <FaMinus /> : <FaPlus /> }</button>
            </header>
            { isAnswerExpanded ? <p className={ 'answer' }>{ answer }</p> : '' }
        </div>
    );
}

// ***EXPORT*** //
export default Faqs;