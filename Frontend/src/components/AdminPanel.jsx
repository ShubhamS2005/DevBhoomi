import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [faqs, setFaqHistory] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editing, setEditing] = useState(null);

  // Fetch FAQs on component mount
  useEffect(() => {
    // Fetch chat history on load
    const fetchFaqHistory = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/chat/all');
        
        
      } catch (error) {
        console.error('Error fetching chat history:', error);
        setFaqHistory([]); // On error, default to empty array
      }
    };
    
    fetchFaqHistory();
  }, []); // Dependency array empty, so this runs on component mount

  // Handle adding a new FAQ
  const addFAQ = async () => {
    if (!question || !answer) return alert('Both fields are required');

    const res = await axios.post('http://localhost:8000/api/chat/add', { question, answer });
    setFaqHistory([...faqs, { question, answer }]); // Update the local FAQ list
    setQuestion('');
    setAnswer('');
    alert(res.data.message); // Show success message
  };

  // Handle updating an existing FAQ
  const updateFAQ = async (id) => {
    const res = await axios.put(`http://localhost:8000/api/chat/update/${id}`, { question, answer });
    const updatedFaqs = faqs.map(faq => faq._id === id ? { ...faq, question, answer } : faq);
    setFaqHistory(updatedFaqs); // Update local FAQ list
    setEditing(null);
    setQuestion('');
    setAnswer('');
    alert(res.data.message); // Show success message
  };

  // Handle deleting an FAQ
  const deleteFAQ = async (id) => {
    if (!window.confirm('Are you sure you want to delete this FAQ?')) return;
    const res = await axios.delete(`http://localhost:8000/api/chat/delete/${id}`);
    setFaqHistory(faqs.filter(faq => faq._id !== id)); // Remove from local FAQ list
    alert(res.data.message); // Show success message
  };

  return (
    <div>
      <h1>Admin Panel - Manage FAQs</h1>

      {/* Form to add/edit FAQ */}
      <div>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        {editing ? (
          <button onClick={() => updateFAQ(editing)}>Update FAQ</button>
        ) : (
          <button onClick={addFAQ}>Add FAQ</button>
        )}
      </div>

      {/* List of FAQs */}
      <div>
        {faqs.map((faq) => (
          <div key={faq._id}>
            <p><strong>Q:</strong> {faq.question}</p>
            <p><strong>A:</strong> {faq.answer}</p>
            <button onClick={() => { setEditing(faq._id); setQuestion(faq.question); setAnswer(faq.answer); }}>Edit</button>
            <button onClick={() => deleteFAQ(faq._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
