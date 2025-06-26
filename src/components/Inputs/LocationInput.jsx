import { TextInput } from '@mantine/core';
import classes from '../../styles/modules/LocationInput.module.css';

export function LocationInput() {
  return (
    <>
      <TextInput label="Où?" placeholder="Adresse, ville" classNames={classes} />
    </>
  );
}