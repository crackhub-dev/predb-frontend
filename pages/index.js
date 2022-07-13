import {
  Input,
  Container,
  Checkbox,
  Text,
  Spacer,
  Pagination,
  Loading,
} from "@nextui-org/react";
import config from "../config.json";
import { useState, useEffect } from "react";
import Release from "../components/Release";
import { useDebounce } from "use-debounce";
export default function Home() {
  const [releases, setReleases] = useState([]);
  const [search, setSearch] = useState("");
  const [q, setQ] = useState("");
  const [query] = useDebounce(q, 1000);
  const [page, setPage] = useState(1);
  const [releaseCount, setReleaseCount] = useState(0);
  const [update, setUpdate] = useState(
    JSON.parse(localStorage.getItem("update"))
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, [query]);
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
    if (query != "") {
      clearInterval(interval);
    }
    if (page > 1) {
      clearInterval(interval);
    }
    if (update == true) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [query, page, update]);
  useEffect(() => {
    getReleaseCount();
    const interval = setInterval(() => {
      getReleaseCount();
    }, 6000);
    if (query != "") {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [query, page]);

  const getData = async () => {
    if (query === "") {
      setLoading(true);
      const response = await fetch(
        `${config.apiUrl}/api/releases?p=${page}&l=20`
      );
      const data = await response.json();
      setReleases(data);
      setLoading(false);
    }
    if (query !== "") {
      setLoading(true);
      const response = await fetch(
        `${config.apiUrl}/api/search?q=${query}&p=${page}&l=20`
      );
      const data = await response.json();
      setReleases(data);
      setLoading(false);
    }
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    setQ(e.target.value);
    setPage(1);
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
          onChange={updateSearch}
        />
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
          color="secondary"
          onChange={(p) => {
            setPage(p);
          }}
          total={Math.ceil(releaseCount.length / 20)}
        />
      </Container>
    </div>
  );
}
