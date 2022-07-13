import { useRouter } from "next/router";
import {
  Container,
  Text,
  Card,
  Grid,
  Button,
  Spacer,
  Loading,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import config from "../../config.json";
import Link from "next/link";
export default function Rls() {
  const router = useRouter();
  const { id } = router.query;
  const [release, setRelease] = useState({});
  const [loading, setLoading] = useState(false);
  const [preAt, setPreAt] = useState("");
  useEffect(() => {
    async function getData() {
      if (id) {
        setLoading(true);
        const res = await fetch(`${config.apiUrl}/api/rls/${id}`);
        const data = await res.json();
        const preAtResp = await fetch(`${config.apiUrl}/api/getDate/${id}`);
        const preAtData = await preAtResp.json();
        setPreAt(preAtData.date);
        setRelease(data);
        setLoading(false);
      }
    }
    getData();
  }, [id]);

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "7rem",
      }}
    >
      {loading ? (
        <Loading size="xl">Loading release info...</Loading>
      ) : (
        <Card css={{ p: "$7", mw: "35vw", mh: "30vh" }}>
          <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
              <Grid>
                <Text h4>{release.rls}</Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>{preAt}</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2", alignItems: "center" }}>
            <Text h4>
              Group:{" "}
              <Text css={{ color: "$accents8" }} span>
                <Link href={`/grp/${release.grp}`}>
                  <a>{release.grp}</a>
                </Link>
              </Text>
            </Text>
            <Text h4>
              Category:{" "}
              <Text css={{ color: "$accents8" }} span>
                <Link href={`/cat/${release.cat}`}>
                  <a>{release.cat}</a>
                </Link>
              </Text>
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
            <Spacer />
            <a
              href={`https://www.srrdb.com/release/details/${release.rls}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="success">srrDB</Button>
            </a>
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
}
