import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_CLASSES from '../../queries/introspection/ClassesQuery';

const CanvasSidebar: React.FC = () => {
  const [classes, setClasses] = useState({ list: [] });

  const { loading, error, data } = useQuery(GET_CLASSES, {
    variables: { typename: 'GetObj' }
  });

  useEffect(() => {
    if (data) {
      data.__type.fields.forEach((getCLASSTYPEObj: any) => {
        // things or actions
        // const classType = getCLASSTYPEObj.name;
        getCLASSTYPEObj.type.fields.forEach((CLASS: any) => {
          setClasses(prevState => {
            const list = prevState.list.concat(CLASS);
            return { list };
          });
        });
      });
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {classes && classes.list.map(({ name }: { name: string }) => <li key={name}>{name}</li>)}
    </ul>
  );
};

export default CanvasSidebar;
