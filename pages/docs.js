import {
  Container,
  Text,
  Spacer,
  Card,
  Grid,
  Button,
  css,
} from "@nextui-org/react";
import Link from "next/link";
import config from "../config.json";
export default function Docs() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2.5rem",
        height: "100vh",
      }}
    >
      <Card
        css={{
          p: "$7",
          mw: "35vw",
          mh: "75vh",
          top: 0,
          height: "100%",
          bgBlur: "#1f444444",
          backgroundBlendMode: "darken",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Header>
          <Grid.Container css={{ pl: "$6" }}>
            <Grid>
              <Text h2>PreDB.xyz API Documentation</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2", alignItems: "center" }}>
          <Text p>You can access the API without any authentication.</Text>
          <Text p>
            The base URL is{" "}
            <Text
              span
              style={{
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "#9750DD",
              }}
            >
              {config.apiUrl}
            </Text>
          </Text>
          <Text h5>Routes</Text>
          <Text p>
            The API has the following routes:
            <ul>
              <li>
                <Text
                  span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "#9750DD",
                  }}
                >
                  /api/releases
                </Text>{" "}
                - Takes ?p= and &l= meaning page & limit.
              </li>
              <li>
                <Text
                  span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "#9750DD",
                  }}
                >
                  /api/rls/:id
                </Text>{" "}
                - Takes id param. It&apos;s an object ID you can get from the
                other endpoints.
              </li>
              <li>
                <Text
                  span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "#9750DD",
                  }}
                >
                  /api/search
                </Text>{" "}
                - Takes ?p=, &l= and &q= args. Meaning page, limit and query.
              </li>
              <li>
                <Text
                  span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "#9750DD",
                  }}
                >
                  /api/getDate/:id
                </Text>{" "}
                - Takes id param. Returns human readable pre date.
              </li>
              <li>
                <Text
                  span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "#9750DD",
                  }}
                >
                  /api/cat
                </Text>{" "}
                - Takes ?p=, &l= and &q= args. Meaning page, limit and query.
              </li>
              <li>
                <Text
                  span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "#9750DD",
                  }}
                >
                  /api/grp
                </Text>{" "}
                - Takes ?p=, &l= and &q= args. Meaning page, limit and query.
              </li>
              <li>
                <Text
                  span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "#9750DD",
                  }}
                >
                  /api/length
                </Text>{" "}
                - Takes no arguments/params. Returns number of releases in DB.
              </li>
            </ul>
          </Text>

          <Text>
            This project is open source and you can find the source code on
            GitHub:
          </Text>
          <Text>
            <a
              href="https://github.com/crackhub-dev/predb-frontend"
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
            {"  |  "}
            <a
              href="https://github.com/crackhub-dev/predb-backend"
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
          </Text>
        </Card.Body>

        <Card.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "$2",
          }}
        >
          <Link href={`/`}>
            <Button color="secondary">Go Back Home</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
}
