import ArticleCard from '@/components/ArticleCard';
import { get3Articles, getAllArticles } from '@/service/articles';

export default async function Home() {
  const articles = await getAllArticles();
  const three = await get3Articles();
  return (
    <main className="flex w-2/3 min-h-screen flex-col gap-20">
      {three.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </main>
  );
}
