import { useEffect, useState } from "react";

const CACHE_KEY = "srk-github-v1";
const TTL = 60 * 60 * 1000; // 1 hour

let inflight = null;

async function load(user) {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
    if (cached && Date.now() - cached.at < TTL) return cached.data;
  } catch {
    /* ignore */
  }
  const [u, r] = await Promise.all([
    fetch(`https://api.github.com/users/${user}`),
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`),
  ]);
  if (!u.ok || !r.ok) throw new Error("GitHub API unavailable");
  const userData = await u.json();
  const repos = (await r.json())
    .filter((repo) => !repo.fork && repo.name !== user)
    .map(({ id, name, description, html_url, homepage, language, stargazers_count, updated_at }) => ({
      id, name, description, html_url, homepage, language, stars: stargazers_count, updated_at,
    }));
  const data = { user: { repos: userData.public_repos, followers: userData.followers, avatar: userData.avatar_url }, repos };
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* ignore */
  }
  return data;
}

/** Live GitHub profile + repos, shared across components and cached for an hour. */
export function useGitHub(user = "SRKhatik") {
  const [state, setState] = useState({ data: null, error: null, loading: true });
  useEffect(() => {
    let alive = true;
    inflight = inflight || load(user);
    inflight
      .then((data) => alive && setState({ data, error: null, loading: false }))
      .catch((error) => {
        inflight = null;
        if (alive) setState({ data: null, error, loading: false });
      });
    return () => {
      alive = false;
    };
  }, [user]);
  return state;
}
