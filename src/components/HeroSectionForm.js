import { Group} from '@mantine/core';
import {ServiceInput} from './Inputs/ServiceInput';
import {LocationInput} from './Inputs/LocationInput';
import {SubmitButton} from './Inputs/SubmitButton';
import {GroupedInputForm} from './Inputs/GroupedInputForm';
import '../styles/HeroSectionFrom.css'

export function HeroSectionFrom() {
  return (
    <>
    <Group className="heroFormDiv" visibleFrom="sm">
        <ServiceInput/>
        <LocationInput/>
        <SubmitButton/>
    </Group>
    <Group hiddenFrom="md">
      <GroupedInputForm/> 
    </Group>
    </>
  );
}