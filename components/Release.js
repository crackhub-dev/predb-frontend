import { Container, Text, Spacer, Button, css } from "@nextui-org/react";

import Link from "next/link";
const Release = ({ title, category, id }) => {
  let group = title.split("-")[title.split("-").length - 1];

  return (
    <Container
      display="flex"
      direction="column"
      justify="center"
      css={{
        maxWidth: "50vw",
        height: "auto",
        borderRadius: "8px",
        backgroundColor: "$accents1",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        margin: "4px",
        padding: "4px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "$accents2",
        },
        textAlign: "center",
      }}
    >
      <div>
        <Button.Group size="sm" bordered color="secondary" shadow={true}>
          <Button>
            <Link href={`/cat/${category}`}>
              <Text color="white">{category}</Text>
            </Link>
          </Button>
          <Button>
            <Link href={`/grp/${group}`}>
              <Text color="white">{group}</Text>
            </Link>
          </Button>
          <Button>
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href={`https://www.srrdb.com/release/details/${title}`}
              style={{ color: "white" }}
            >
              srrDB
            </a>
          </Button>
        </Button.Group>
      </div>
      <Link href={`/release/${id}`}>
        <Text h5>{title}</Text>
      </Link>
    </Container>
  );
};

export default Release;
