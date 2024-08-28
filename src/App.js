import React from 'react';


const App = () => {
  const questions = [
    {
      id: 1,
      title: 'What is the virtual DOM?',
      body: 'The virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as ReactDOM.'
    },
    {
      id: 2,
      title: 'How do you create a React app?',
      body: 'Install the create-react-app package using the command prompt or terminal.'
    },
    {
      id: 3,
      title: 'What is an event in React?',
      body: 'An event is an action that a user or system may trigger, such as clicking a button, pressing a key, or loading a page.'
    },
    {
      id: 4,
      title: 'What are synthetic events in React?',
      body: 'Synthetic events are objects which act as a cross-browser wrapper around the browser\'s native event. They combine the behavior of different browsers into one API.'
    },
    {
      id: 5,
      title: 'What are the components in React?',
      body: 'Components are the building blocks of a React application\'s UI. These can be class-based or functional.'
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-5">React Interview Questions</h1>
      <div className="accordion mt-4" id="accordionExample">
        {questions.map((question, index) => (
          <div className="accordion-item" key={question.id}>
            <h2 className="accordion-header" id={`heading${index}`}> 
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                {question.title}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {question.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
