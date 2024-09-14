import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import QueryInput from './components/QueryInput';
import ReportView from './components/ReportView';
import axios from 'axios';

function App() {
  const [report, setReport] = useState<any>(null);

  const handleQuery = async (query: string) => {
    try {
      const response = await axios.post('http://localhost:8000/query', { text: query });
      setReport(response.data.insights);
    } catch (error) {
      console.error('Error fetching insights:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Market Insights Tool
      </Typography>
      <QueryInput onSubmit={handleQuery} />
      {report && <ReportView report={report} />}
    </Container>
  );
}

export default App;
