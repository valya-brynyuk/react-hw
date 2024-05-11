import {MainLayout} from "../../templates/MainLayout/MainLayout.jsx";
import {HeroSection} from "./components/HeroSeection/HeroSection.jsx";
import {GoodsBand} from "../../components/GoodsBand/GoodsBand.jsx";
import {GoodsPageLink} from "../../components/GoodsPageLink/GoodsPageLink.jsx";
import {TextCollapse} from "../../components/TextCollapse/TextCollapse.jsx";
import {useGetAllCategoriesQuery} from "../../store/query/category.js";
import {Loader} from "../../components/Loader/Loader.jsx";
import {Stack} from "@mui/material";
import {routes} from "../../routes/routes.js";

export const HomePage = () => {
  const categoriesResp = useGetAllCategoriesQuery();

  return (
    <MainLayout hideBreadcrumbs>
      <Stack direction="column" spacing={5}>
        <Loader
          resp={categoriesResp}
          data={() => (
            <>
              <HeroSection categories={categoriesResp.data} />
              {categoriesResp.data.map(category => {
                return (
                  <GoodsBand
                    key={`product-band-${category}`}
                    title={category}
                    category={category}
                    itemsPerPage={5}
                    link={<GoodsPageLink url={routes.category(category)}/>}
                  />
                )
              })}
            </>
          )}
        />

        <TextCollapse>
          <>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aspernatur atque beatae
              consectetur corporis eveniet id molestias necessitatibus non odit optio perferendis quas quos, ratione sequi
              totam unde voluptates!
            </div>
            <div>Blanditiis cum, dolore dolores est hic in labore nobis optio provident ut. Accusantium aliquam
              asperiores,
              assumenda dignissimos dolorum ea explicabo id laudantium nihil nobis odit pariatur quibusdam quisquam
              ratione
              repellendus!
            </div>
            <div>Deleniti impedit laudantium nemo quisquam sit. Accusamus animi consectetur consequatur corporis eum,
              eveniet ex exercitationem explicabo ipsa iusto nemo nihil nulla officia quisquam quos sed tenetur totam unde
              veniam voluptates?
            </div>
            <div>Aut facere iusto, neque possimus quis repudiandae similique. Asperiores, consequatur debitis excepturi
              fugiat, fugit in libero maiores odit perferendis provident, quas quos ratione sapiente vitae voluptates? Aut
              nulla qui sequi!
            </div>
            <div>Adipisci consectetur est fuga incidunt, quas quia voluptatem. Asperiores cupiditate exercitationem fuga
              itaque nulla quaerat repellendus repudiandae saepe? Aspernatur deleniti id iusto placeat sint! Asperiores
              consequatur dolores eum possimus voluptatem.
            </div>
          </>
        </TextCollapse>
      </Stack>
    </MainLayout>
  );
};

