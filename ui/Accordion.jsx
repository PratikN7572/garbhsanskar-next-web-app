"use client"

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomAccordion({ summary, brief}) {
  return (
      <Accordion className='w-full'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-gray-300'
        >
          <Typography>{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails className='!rounded-b-lg'>
          <Typography>
          {brief}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}