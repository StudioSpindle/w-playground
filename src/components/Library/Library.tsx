import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import GET_CLASSES, { GetClassesData } from '../../queries/introspection/GetClassesQuery';

interface Class {
  name: string;
}

interface MainState {
  list: readonly Class[];
}

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    listStyleType: 'none'
  },
  noClassesContainer: {
    padding: '0.5em 1em'
  },
  noClassesText: {
    color: theme.palette.primary.main,
    textAlign: 'center'
  },
  containerUnselectedClasses: {
    border: `1px solid ${theme.palette.grey[200]}`,
    marginBottom: '1rem',
    marginTop: '.5rem',
    maxHeight: '22vh', // caps it around 5 items
    overflowY: 'auto',
    padding: '0.25em'
  }
}));

const Library: React.FC = () => {
  const classes = useStyles();
  const [classesData, setClassesData] = useState({ list: [] } as MainState);

  const { loading, error, data } = useQuery(GET_CLASSES, {
    variables: { typename: 'GetObj' }
  });

  useEffect(() => {
    if (data) {
      data.__type.fields.forEach((getCLASSTYPEObj: GetClassesData): void => {
        getCLASSTYPEObj.type.fields.forEach((CLASS: Class) => {
          setClassesData(prevState => ({ list: [...prevState.list, CLASS] }));
        });
      });
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={classes.containerUnselectedClasses}>
      <ul className={classes.list}>
        {classesData && classesData.list.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
};

export default Library;
