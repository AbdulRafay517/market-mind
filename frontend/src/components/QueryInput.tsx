import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

interface QueryInputProps {
  onSubmit: (query: string) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="outlined"
        label="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Get Insights
      </Button>
    </form>
  );
};

export default QueryInput;
