import { useEffect, useState } from 'react';
import RepoSkeleton from './RepoSkeleton';
import { motion } from 'framer-motion';

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRepos = async (page) => {
    setLoading(true);
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&page=${page}&sort=updated`);
        const data = await res.json();
        const filtered = data.filter((repo) => !repo.fork);
        setRepos(filtered);
        setHasMore(filtered.length === 6);
    } catch (error) {
        console.error('Error fetching reps', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRepos(page);
  }, [page]);

  return (
    <motion.section id="github" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
     className="py-12 px-4 text-center bg-stone-500 dark:bg-gray-900 dark:text-white">
      <h2 data-aos="fade-right" className="text-3xl font-bold mb-8">GitHub Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {loading
        ? Array.from({ length: 6 }).map((_, i) => <RepoSkeleton key={i} />)
        : repos.map((repo) => (
          <div key={repo.id} className="group bg-zinc-700 dark:bg-slate-800 p-6 rounded-lg shadow-md text-left hover:scale-110 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-slate-300 dark:text-gray-300 mb-3">
              {repo.description || "No description provided."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 font-semibold text-white dark:text-white hover:scale-110 transition-transform duration-300 disabled:opacity-50"
        >
          ← Previous
        </button>
        <p className='mt-2 font-semibold'>{page}</p>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!hasMore}
          className="px-4 py-2 font-semibold text-white dark:text-white hover:scale-110 transition-transform duration-300 disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </motion.section>
  );
};

export default GitHubRepos;
