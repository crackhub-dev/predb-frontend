import {
  Input,
  Container,
  Checkbox,
  Text,
  Spacer,
  Pagination,
  Loading,
} from "@nextui-org/react";
import config from "../../config.json";
import { useState, useEffect } from "react";
import Release from "../../components/Release";
import { useRouter } from "next/router";
export default function Group() {
  const [releases, setReleases] = useState([]);
  const [page, setPage] = useState(1);
  const [releaseCount, setReleaseCount] = useState(0);
  const [update, setUpdate] = useState(
    JSON.parse(localStorage.getItem("update"))
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { grp } = router.query;

  useEffect(() => {
    getData();
  }, [grp]);
  useEffect(() => {
    if (page < 1) {
      setPage(1);
    } else {
      getData();
    }
  }, [page]);
  useEffect(() => {
    localStorage.setItem("update", JSON.stringify(update));
  }, [update]);
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 6000);
    if (page > 1) {
      clearInterval(interval);
    }
    if (update == true) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [page, update]);
  useEffect(() => {
    getReleaseCount();
    const interval = setInterval(() => {
      getReleaseCount();
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const getData = async () => {
    if (grp != null) {
      setLoading(true);
      const response = await fetch(
        `${config.apiUrl}/api/grp?p=${page}&l=20&q=${grp}`
      );
      const data = await response.json();
      setReleases(data);
      setLoading(false);
    }
  };

  const getReleaseCount = async () => {
    const response = await fetch(`${config.apiUrl}/api/length`);
    const data = await response.json();
    setReleaseCount(data);
  };

  return (
    <div>
      <Text
        h5
        style={{
          textAlign: "center",
        }}
      >
        Proudly indexing {releaseCount.length || 111208} releases.
      </Text>
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <Checkbox
          size="sm"
          onChange={(e) => {
            setUpdate(e);
          }}
          defaultSelected={update}
          label="Disable automatic updates"
        />
      </Container>
      <Container
        display="flex"
        justify="center"
        alignContent="center"
        style={{
          height: "6vh",
          flexDirection: "column",
        }}
      >
        <Spacer />
        <Input
          placeholder="Begin typing to search..."
          bordered
          color="secondary"
          width="25%"
          value={grp}
        />
      </Container>
      <Container display="flex">
        <Text>
          You&apos;re browsing all releases by the group{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {grp}
          </span>
        </Text>
      </Container>
      <Container display="flex" justify="center">
        {loading ? (
          <>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100bvw",
                flexDirection: "column",
              }}
            >
              <Loading size="xl" />
            </Container>
          </>
        ) : (
          <></>
        )}
        {releases &&
          releases.map((rls) => (
            <Release
              key={rls.id}
              title={rls.rls}
              category={rls.cat}
              id={rls._id}
            />
          ))}
      </Container>
      <Container
        display="flex"
        justify="center"
        alignContent="center"
        style={{
          height: "6vh",
          flexDirection: "column",
        }}
      >
        <Spacer />
        <Pagination
          onChange={(p) => {
            console.log(p);
            setPage(p);
          }}
          color="secondary"
          total={Math.ceil(releaseCount.length / 20)}
        />
      </Container>
    </div>
  );
}
