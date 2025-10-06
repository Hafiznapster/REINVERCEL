import React, { useState, useEffect } from 'react';

interface QuoteData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  roofType: string;
  numberOfPhases: string;
  timestamp: string;
  apiSubmitted?: boolean;
}

const QuoteManagement: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);

  useEffect(() => {
    // Load quotes from localStorage
    const storedQuotes = JSON.parse(localStorage.getItem('solarQuotes') || '[]');
    setQuotes(storedQuotes.reverse()); // Show newest first
  }, []);

  const clearQuotes = () => {
    if (confirm('Are you sure you want to clear all quotes?')) {
      localStorage.removeItem('solarQuotes');
      setQuotes([]);
    }
  };

  const exportQuotes = () => {
    const csvContent = [
      'Name,Email,Phone,Address,Roof Type,Phases,Notes,Date,API Submitted',
      ...quotes.map(quote => 
        `"${quote.firstName} ${quote.lastName}","${quote.email}","${quote.phone}","${quote.address}","${quote.roofType}","${quote.numberOfPhases}","${quote.notes}","${new Date(quote.timestamp).toLocaleDateString()}","${quote.apiSubmitted ? 'Yes' : 'No'}"`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `solar-quotes-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Solar Quote Requests</h2>
            <div>
              <button className="btn btn-success me-2" onClick={exportQuotes}>
                <i className="fas fa-download me-2"></i>Export CSV
              </button>
              <button className="btn btn-danger" onClick={clearQuotes}>
                <i className="fas fa-trash me-2"></i>Clear All
              </button>
            </div>
          </div>

          {quotes.length === 0 ? (
            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              No quote requests yet.
            </div>
          ) : (
            <>
              <div className="row mb-3">
                <div className="col-md-4">
                  <div className="card bg-primary text-white">
                    <div className="card-body text-center">
                      <h4>{quotes.length}</h4>
                      <small>Total Quotes</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-success text-white">
                    <div className="card-body text-center">
                      <h4>{quotes.filter(q => q.apiSubmitted).length}</h4>
                      <small>Sent to OpenSolar</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-warning text-dark">
                    <div className="card-body text-center">
                      <h4>{quotes.filter(q => !q.apiSubmitted).length}</h4>
                      <small>Local Only</small>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {quotes.length > 0 && (
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Roof Type</th>
                        <th>Phases</th>
                        <th>Notes</th>
                        <th>API Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes.map((quote) => (
                        <tr key={quote.id}>
                          <td>{new Date(quote.timestamp).toLocaleDateString()}</td>
                          <td>{quote.firstName} {quote.lastName}</td>
                          <td>
                            <a href={`mailto:${quote.email}`}>{quote.email}</a>
                          </td>
                          <td>
                            <a href={`tel:${quote.phone}`}>{quote.phone}</a>
                          </td>
                          <td>{quote.address}</td>
                          <td>{quote.roofType}</td>
                          <td>{quote.numberOfPhases}</td>
                          <td>{quote.notes || '-'}</td>
                          <td>
                            {quote.apiSubmitted ? (
                              <span className="badge bg-success">
                                <i className="fas fa-check me-1"></i>Sent
                              </span>
                            ) : (
                              <span className="badge bg-warning text-dark">
                                <i className="fas fa-clock me-1"></i>Local Only
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteManagement;