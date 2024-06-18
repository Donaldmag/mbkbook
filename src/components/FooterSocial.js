import { Anchor, Group, ActionIcon, rem  } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from '../styles/Footer.module.css';
import "../styles/Footer.css";
import img1 from '../assets/images/androind-down.png';
import img2 from '../assets/images/apple-down.png';

const links = [
  { link: "#", label: "A propos" },
  { link: "#", label: "FAQ" },
  { link: "#", label: "Contact" },
  { link: "#", label: "Terms of service" },
  { link: "#", label: "Privacy policy" },
];

export function FooterSocial() {
  // const theme = useMantineTheme();
  const items = links.map((link) => (
    <Anchor
      // c="dimmed"
      key={link.label}
      href={link.link}
      // lh={1}
      onClick={(event) => event.preventDefault()}
      // size="md"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className="footer">

      <div className="linkSection">
        <Group className="importantLinks" gap={24}>
          {items}
        </Group>

        <Group gap={4} className="downloadImages">
          <img src={img1} alt="" height={48} />
          <img src={img2} alt="" height={48} />
        </Group>
      </div>
      
      <div className="inner">
        {/* <MantineLogo size={28} /> */}
        <div className="logoTextDiv">
          <h3 className="logoText">
            <span className="spanLogoText">MBK</span>BOOK
          </h3>
          <span className="copyrightText">
            @2024 MBKBOOK. All rights reserved{" "}
          </span>
        </div>

        <Group gap={0} className="links" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
