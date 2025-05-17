export default function RepoSkeleton() {
  return (
    <div className="animate-pulse bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
      <div className="h-6 bg-slate-300 dark:bg-slate-700 w-3/4 rounded mb-4"></div>
      <div className="h-4 bg-slate-300 dark:bg-slate-700 w-full rounded mb-2"></div>
      <div className="h-4 bg-slate-300 dark:bg-slate-700 w-5/6 rounded mb-4"></div>
      <div className="h-4 bg-slate-300 dark:bg-slate-700 w-1/3 rounded"></div>
    </div>
  );
}
