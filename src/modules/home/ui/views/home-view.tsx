import { CategoriesSection } from "../sections/categories-sections";

interface HomeViewProps {
  categoryId?: string;
}

const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flexx flex-cols gap-y-6 ">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};

export default HomeView;
