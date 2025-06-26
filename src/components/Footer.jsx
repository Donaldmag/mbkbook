import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { AppLogo } from "./AppLogo";
import img1 from "../assets/images/androind-down.png";
import img2 from "../assets/images/apple-down.png";
import { links } from "../data/data";
import "../styles/Footer.css";

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
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

      <div className="innerFooter">
        {/* <MantineLogo size={28} /> */}
        <div className="logoTextDiv">
          <AppLogo />
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
