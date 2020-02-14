import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import NEWS_PUBLICATIONS from './NewsPublications';

const CanvasSidebar: React.FC = () => {
  const { loading, error, data } = useQuery(NEWS_PUBLICATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.Get.Things.Publication.map(({ name }: { name: string }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default CanvasSidebar;
