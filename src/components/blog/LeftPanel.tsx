import ShareArticle from "@/components/blog/ShareArticle";

interface TocItem {
  title: string;
  id: string;
}

const LeftPanel = ({ h2List, slug }: { h2List: TocItem[]; slug: string }) => (
  <div>
    {h2List.length > 0 && (
      <div className="learning-center-card bg-white border border-white rounded-3xl p-7">
        <div className="text-black font-semibold text-xl leading-snug">Table of Contents</div>
        <div className="flex flex-col gap-4 mt-5 text-black lg:max-h-[calc(100vh-18rem)] lg:overflow-y-auto">
          {h2List.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="border-b border-gray-300 pb-3">
              {item.title}
            </a>
          ))}
        </div>
      </div>
    )}
    <div className="hidden md:block">
      <ShareArticle slug={slug} />
    </div>
  </div>
);

export default LeftPanel;
