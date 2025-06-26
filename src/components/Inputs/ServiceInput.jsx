import { TextInput } from '@mantine/core';
import classes from '../../styles/modules/ServiceInput.module.css';

export function ServiceInput() {
  return (
    <>
      <TextInput label="De quel service avez-vous besoin ?" placeholder="Manicure, Rasage, Braids, etc" classNames={classes} />
    </>
  );
}