import Calculator from '@/components/calculator/calculator';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Calculator className="p-3 sm:px-12 sm:py-6" />
    </Main>
  );
};

export default Index;
