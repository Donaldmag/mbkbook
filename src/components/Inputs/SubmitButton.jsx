import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from '../../styles/modules/SubmitButton.module.css';

export function SubmitButton() {
  const theme = useMantineTheme();

  return (
    <div className={classes.buttonWrapper}>
        <ActionIcon size={40} radius="xl" color={theme.primaryColor} variant="filled">
            <IconSearch style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
        </ActionIcon>
    </div>
  );
}