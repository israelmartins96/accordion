// ***IMPORTS*** //
// React
import React from 'react';
// Stylesheet
import './App.css';
// FAQs Data
import faqsData from './data-faqs';
// FAQs Component
import Faqs from './faqs';
// Loading Screen Component
import Loading from './loading';

// ***MAIN COMPONENT*** //
function App() {
  // Initialise array for FAQs data
  const [faqs, setFaqs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  // Gets all FAQs and corresponding answers
  const getFaqs = async () => {
    try {
      const response = await faqsData;
      const faqs = await response;
      setFaqs(faqs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // To get all FAQs
  React.useEffect(
    () => {
      getFaqs();
    }
  );
  
  // Show Loading Screen while content is loading
  if (isLoading === true) return <Loading />;

  return (
    <div className='container'>
      <main className='faqs-section'>
        <h2 className='section-heading'>Questions and Answers About Login</h2>
        <Faqs faqs={ faqs }/>
      </main>
    </div>
  );
}

export default App;
