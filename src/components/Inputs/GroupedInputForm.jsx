import { TextInput, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from '../../styles/modules/GroupedInputForm.module.css';

const InputService = () => {
  return (
    <div className={classes.divWraper}>
    <TextInput
      radius="xl"
      size="md"
      placeholder="Trouvez une prestation ou institut"
      leftSection={<IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5}/>}
      className={classes.inputWrapper}
    />
    </div>
  );
}

const InputPosition = () => {
  return (
    <div className={classes.divWraper}>
    <TextInput
      radius="xl"
      size="md"
      placeholder="Position actuel"
      leftSection={<IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5}/>}
      className={classes.inputWrapper}
    />
    </div>
  );
}

const InputDate = () => {
  return (
    <div className={classes.divWraper}>
    <TextInput
      radius="xl"
      size="md"
      placeholder="Date"
      leftSection={<IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5}/>}
      className={classes.inputWrapperHalves}
    />
    </div>
  );
}

const InputTime = () => {
  return (
    <div className={classes.divWraper}>
    <TextInput
      radius="xl"
      size="md"
      placeholder="Heure"
      leftSection={<IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5}/>}
      className={classes.inputWrapperHalves}
    />
    </div>
  );
}

export function GroupedInputForm() {
  return(
    <div className={classes.groupedInputDiv}>
      <InputService/>
      <InputPosition/>
      <div className={classes.flexInputDiv}>
        <InputDate/>
        <InputTime/>
      </div>
    </div>
  );
  
}

export default GroupedInputForm;