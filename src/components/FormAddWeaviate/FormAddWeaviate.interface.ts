import { ChangeEvent, FormEvent }  from 'react';

export interface FormAddWeaviateUrlProps {
  handleUrlChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
