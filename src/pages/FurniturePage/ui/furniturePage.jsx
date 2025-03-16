import { Catalog } from '@/entities/catalog/ui/catalog';
import { CurrentCategoryAsync } from '@/features/currentCategory';
import { PageLoader } from '@/pages/PageLoader';
import { catalog } from '@/shared/const/links';
import { CurrentElem } from '@/widgets/currentElem/ui/currentElem';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

export const FurniturePage = () => {
    const {
        currentCategory,
        currentSubCategory_or_currentElement,
        currentSubElement,
    } = useParams();
    const checkOnObject = catalog[currentCategory];
    if (typeof checkOnObject === 'object') {
        return currentSubElement ? (
            <CurrentElem
                currentSubCategory_or_currentElement={
                    currentSubCategory_or_currentElement
                }
                currentCategory={currentCategory}
                currentSubElement={currentSubElement}
            />
        ) : currentSubCategory_or_currentElement ? (
            <Suspense fallback={<PageLoader />}>
                <CurrentCategoryAsync
                    value={currentSubCategory_or_currentElement}
                />
            </Suspense>
        ) : (
            <Catalog currentCategory={currentCategory} />
        );
    }
    return currentSubCategory_or_currentElement ? (
        <CurrentElem
            currentSubCategory_or_currentElement={
                currentSubCategory_or_currentElement
            }
            currentCategory={currentCategory}
        />
    ) : currentCategory ? (
        <Suspense fallback={<PageLoader />}>
            <CurrentCategoryAsync value={currentCategory} />
        </Suspense>
    ) : (
        <Catalog />
    );
};
