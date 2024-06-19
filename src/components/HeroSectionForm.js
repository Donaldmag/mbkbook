import {ServiceInput} from './Inputs/ServiceInput';
import {LocationInput} from './Inputs/LocationInput';
import {SubmitButton} from './Inputs/SubmitButton';
import '../styles/HeroSectionFrom.css'

export function HeroSectionFrom() {
  return (
    <div className="heroFormDiv">
        <ServiceInput/>
        <LocationInput/>
        <SubmitButton/>
    </div>
  );
}