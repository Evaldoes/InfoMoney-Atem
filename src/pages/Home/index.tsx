/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable camelcase */
import { Grid, Stack, Typography } from '@mui/material';
import { Switch } from 'antd';
import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import Favorites from '../../components/Favorites';
import TableMoney from '../../components/Table';
import { useCoin } from '../../hooks/useCoin';

const Home: React.FC = () => {
  const { topCoins, updateFavorite, favoritesCoins, removeFavorite } =
    useCoin();

  // useEffect(() => {
  //   function pageScroll() {
  //     const objDiv = document.getElementById('favorites');
  //     if (!objDiv) return;
  //     objDiv.scrollLeft += 1;
  //     console.log(objDiv.scrollLeft, objDiv.scrollWidth);

  //     if (objDiv.scrollLeft === objDiv.scrollWidth) {
  //       setTimeout(() => {
  //         objDiv.scrollLeft = 0;
  //       }, 1200);
  //     }
  //     setTimeout(() => {
  //       pageScroll();
  //     }, 10);
  //   }

  //   setTimeout(() => {
  //     pageScroll();
  //   }, 500);
  // }, []);

  return (
    <Grid container justifyContent="center">
      <Grid
        paddingBottom={3.5}
        paddingTop={3.5}
        item
        xl={10}
        xs={10}
        md={10}
        display="flex"
        justifyContent="space-between"
      >
        <Typography
          paddingBottom={1}
          sx={{ fontSize: 28, fontWeight: 700 }}
          color="#000"
        >
          Preço das criptomoedas por valor de mercado
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ fontSize: 16, fontWeight: 400 }} color="#A7B1C2">
            Highlights
          </Typography>
          <Switch defaultChecked />
        </Stack>
      </Grid>
      <Grid paddingBottom={5} item xs={10}>
        <Typography
          paddingBottom={1}
          sx={{ fontSize: 17, fontWeight: 700 }}
          color="#000"
        >
          Favoritos
        </Typography>

        <Stack
          id="favoritesID"
          overflow="auto"
          display="flex"
          spacing={2}
          direction="row"
          style={{ overflowX: 'auto', overflowY: 'hidden' }}
          padding={0}
        >
          {favoritesCoins?.map(coin => (
            <Favorites key={coin.symbol} coin={coin} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={10}>
        <TableMoney
          data={topCoins}
          setFavorite={updateFavorite}
          favorites={favoritesCoins}
          removeFavorite={removeFavorite}
        />
      </Grid>
    </Grid>
  );
};
export default Home;
