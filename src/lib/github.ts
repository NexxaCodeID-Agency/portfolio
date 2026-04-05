

export interface GithubRepo {
    topics: any;
    homepage: string;
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    updated_at: string;
}

export async function getRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    "https://api.github.com/orgs/NexxaCodeID-Agency/repos?sort=updated&per_page=6",
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github.v3+json" },
    },
  );

  if(!res.ok){
    console.error("Waduh, GitHub lagi mogok, bosquu! 😹");
    return [];
  }
  return res.json();
}