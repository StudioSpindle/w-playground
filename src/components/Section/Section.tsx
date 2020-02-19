import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const useStyles = makeStyles((theme: Theme) => ({
  details: {
    flexDirection: 'column'
  },
  heading: {
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold'
  },
  icon: {
    color: theme.palette.common.white
  },
  root: {
    width: '50px'
  },
  expanded: { width: '521px' },
  summary: {
    backgroundColor: theme.palette.grey[800]
  }
}));

export interface SectionProps {
  maxHeight?: string;
  title: string;
  shortTitle: string;
}

const Section: React.FC<SectionProps> = ({ children, maxHeight, title, shortTitle }) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <ExpansionPanel
      expanded={isOpen}
      elevation={1}
      onChange={toggleSection}
      classes={{ expanded: classes.expanded, root: classes.root }}
      square
    >
      <ExpansionPanelSummary
        expandIcon={isOpen && <ExpandMoreIcon classes={{ root: classes.icon }} />}
        classes={{ root: classes.summary }}
      >
        <Typography variant="overline" className={classes.heading}>{isOpen ? title : shortTitle}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        classes={{ root: classes.details }}
        style={{ maxHeight: maxHeight || '100vh' }}
      >
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Section;
