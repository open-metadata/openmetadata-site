// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface RepositoryData {
  stargazers_count: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoryData>
) {
  try {
    const response = await fetch(
      'https://api.github.com/repos/open-metadata/OpenMetadata'
    );

    const data = await response.json();

    res.status(200).json({ stargazers_count: data.stargazers_count });
  } catch (error) {
    res.status(200).json({ stargazers_count: 0 });
  }
}
