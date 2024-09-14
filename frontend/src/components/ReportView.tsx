import React from 'react';
import { Paper, Typography } from '@material-ui/core';

interface ReportViewProps {
  report: string;
}

const ReportView: React.FC<ReportViewProps> = ({ report }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Insights:
      </Typography>
      <Typography variant="body1">{report}</Typography>
    </Paper>
  );
};

export default ReportView;
