import { Container, Text, Spacer, css } from "@nextui-org/react";

import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <Container
        display="flex"
        direction="column"
        justify="center"
        css={{ textAlign: "center" }}
      >
        <Text
          h1
          css={{ textGradient: "45deg, $blue600 -50%, $pink600 50%" }}
          weight="bold"
        >
          <Link href={"/"} as={"/"}>
            PreDB
          </Link>
        </Text>
      </Container>
      <Container
        className="links"
        display="flex"
        direction="row"
        gap="4"
        justify="center"
      >
        <Link href="/docs">
          <a>
            <Text
              p
              weight="bold"
              css={{
                textDecoration: "underline",
                textDecorationColor: "#0070f3",
                textDecorationStyle: "dotted",
                textDecorationThickness: "2px",
                "&:hover": {
                  textDecorationStyle: "solid",
                },
              }}
            >
              API Docs
            </Text>
          </a>
        </Link>

        <Spacer />
      </Container>
    </div>
  );
};

export default Nav;
