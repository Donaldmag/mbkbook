import { Menu, Group, Center, Burger, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import {IconBrandAppgallery} from "@tabler/icons-react";
import "../styles/Header.css";
import {AppLogo} from './AppLogo';
import {headerLinks} from '../data/data';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = headerLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className="link"
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className="linkLabel">{link.label}</span>
                <IconChevronDown size="1.4rem" stroke={2.4} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }
  });

  return (
    <header className="header">
      <Container size="2xl">

        <div className="innerHeader">
          <AppLogo /> 
          
          <Group gap={44}>
            <button className="shopButton"> 
            <IconBrandAppgallery 
              style={{ width: rem(28), height: rem(28) }}
              stroke={1.5}
            />
              <span>Boutique</span>
            </button>
            <Group visibleFrom="sm" gap={40}>
              {items}
            </Group>
          </Group>

          <Burger opened={opened} onClick={toggle} size="lg" hiddenFrom="sm"  />
        </div>

      </Container>
    </header>
  );
}