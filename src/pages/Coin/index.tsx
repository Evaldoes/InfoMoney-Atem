/* eslint-disable consistent-return */
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import * as _ from 'lodash';
import React, { useCallback, useEffect, useMemo } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useParams } from 'react-router-dom';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { useCoin } from '../../hooks/useCoin';

const Coin: React.FC = () => {
  const { id } = useParams();
  const {
    getCoinById,
    currentCoin,
    favoritesCoins,
    removeFavorite,
    updateFavorite,
    topCoins,
  } = useCoin();

  const git = [
    { key: 'subscribers', label: 'GitHub Followers' },
    { key: 'stars', label: 'GitHub Stars' },
    { key: 'forks', label: 'GitHub Forks' },
  ];

  useEffect(() => {
    if (id === undefined) return;
    getCoinById(id as unknown as string);
  }, [getCoinById, id]);

  const breadcrumbs = useMemo(() => {
    if (currentCoin) {
      return [
        <Link
          sx={{ color: '#A7B1C2', fontSize: 16, fontWeight: 600 }}
          underline="hover"
          key="1"
          href="/"
        >
          Criptomoedas
        </Link>,
        <Link
          sx={{ color: '#A7B1C2', fontSize: 16, fontWeight: 600 }}
          underline="hover"
          key="2"
          href="/"
        >
          Moedas
        </Link>,
        <Typography
          sx={{ color: '#000', fontSize: 16, fontWeight: 600 }}
          key="3"
        >
          {_.capitalize(currentCoin.name)}
        </Typography>,
      ];
    }
  }, [currentCoin]);

  const handleFavorite = useCallback(() => {
    if (favoritesCoins?.find(ele => ele.id === id)) {
      removeFavorite(currentCoin);
    } else {
      updateFavorite(topCoins?.find(ele => ele.id === currentCoin.id));
    }
  }, [
    currentCoin,
    favoritesCoins,
    id,
    removeFavorite,
    topCoins,
    updateFavorite,
  ]);

  return (
    currentCoin && (
      <Grid container justifyContent="center">
        <Grid
          paddingBottom={3.5}
          paddingTop={3.5}
          item
          xl={10}
          xs={10}
          md={10}
          display="flex"
          direction="row"
          justifyContent="space-between"
        >
          <Breadcrumbs
            sx={{ color: '#A7B1C2' }}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid paddingBottom={5} item xs={10}>
          <Stack display="flex" direction="row" justifyContent="space-between">
            <Stack
              id="favorites"
              overflow="auto"
              display="flex"
              direction="column"
            >
              <Box display="flex" alignItems="center">
                <img
                  style={{ width: 32, height: 32, marginRight: 8 }}
                  src={currentCoin.image.large}
                  alt={currentCoin.image.large}
                  loading="lazy"
                />
                <Typography
                  sx={{ fontSize: 48, fontWeight: 700, marginRight: 1 }}
                  color="#000"
                >
                  {currentCoin && _.capitalize(currentCoin.name)}
                </Typography>
                <Typography
                  padding={1}
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    backgroundColor: '#EFF2F5',
                    borderRadius: 2,
                    marginRight: 1,
                  }}
                  color="#A7B1C2"
                >
                  {currentCoin.symbol.toUpperCase()}
                </Typography>

                <IconButton
                  onClick={handleFavorite}
                  sx={{
                    borderColor: '#A7B1C2',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderRadius: 2,
                    padding: 0.5,
                  }}
                >
                  {favoritesCoins
                    ?.map(coin => coin.id)
                    .includes(currentCoin.id) ? (
                    <StarRateRoundedIcon sx={{ color: '#F6B87E' }} />
                  ) : (
                    <StarOutlineRoundedIcon sx={{ color: '#A7B1C2' }} />
                  )}
                </IconButton>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography
                  padding={0.5}
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    backgroundColor: '#80899C',
                    borderRadius: 2,
                  }}
                  color="#fff"
                >
                  Classificação #{currentCoin.market_cap_rank}
                </Typography>
              </Box>
            </Stack>
            <Stack
              id="favorites"
              overflow="auto"
              display="flex"
              direction="column"
            >
              <Typography
                sx={{ fontSize: 16, fontWeight: 600 }}
                color="#A7B1C2"
              >
                Preço de {currentCoin && _.capitalize(currentCoin.name)} (
                {currentCoin.symbol.toUpperCase()})
              </Typography>
              <Box display="flex" alignItems="center" flexDirection="row">
                <Typography
                  sx={{ fontSize: 40, fontWeight: 700, marginRight: 1 }}
                  color="#000"
                >
                  R$ {currentCoin && currentCoin.market_data.current_price.brl}
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="right"
                  alignItems="center"
                  padding={0.7}
                  paddingRight={1.5}
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    borderRadius: 2,
                    color: '#fff',
                  }}
                  style={{
                    background:
                      currentCoin.market_cap_change_percentage_24h >= 0
                        ? '#16C784'
                        : '#EA3943',
                    alignItems: 'center',
                  }}
                >
                  {currentCoin.market_data.market_cap_change_percentage_24h >=
                  0 ? (
                    <ArrowDropUpRoundedIcon className="ml-0" />
                  ) : (
                    <ArrowDropDownRoundedIcon className="ml-0" />
                  )}
                  {currentCoin.market_data.market_cap_change_percentage_24h.toFixed(
                    2,
                  )}
                  %
                </Stack>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
              >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400 }}
                  color="#A7B1C2"
                >
                  {currentCoin.market_data.current_price.btc} BTC
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="right"
                  alignItems="center"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  style={{
                    color:
                      currentCoin.market_data
                        .market_cap_change_percentage_24h_in_currency.btc >= 0
                        ? '#16C784'
                        : '#EA3943',
                    alignItems: 'center',
                  }}
                >
                  {currentCoin.market_data
                    .market_cap_change_percentage_24h_in_currency.btc >= 0 ? (
                    <ArrowDropUpRoundedIcon className="ml-0" />
                  ) : (
                    <ArrowDropDownRoundedIcon className="ml-0" />
                  )}
                  {currentCoin.market_data.market_cap_change_percentage_24h_in_currency.btc.toFixed(
                    4,
                  )}
                  %
                </Stack>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
              >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400 }}
                  color="#A7B1C2"
                >
                  {currentCoin.market_data.current_price.eth} ETH
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="right"
                  alignItems="center"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  style={{
                    color:
                      currentCoin.market_data
                        .market_cap_change_percentage_24h_in_currency.eth >= 0
                        ? '#16C784'
                        : '#EA3943',
                    alignItems: 'center',
                  }}
                >
                  {currentCoin.market_data
                    .market_cap_change_percentage_24h_in_currency.eth >= 0 ? (
                    <ArrowDropUpRoundedIcon className="ml-0" />
                  ) : (
                    <ArrowDropDownRoundedIcon className="ml-0" />
                  )}
                  {currentCoin.market_data.market_cap_change_percentage_24h_in_currency.eth.toFixed(
                    4,
                  )}
                  %
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          paddingBottom={5}
          item
          xs={10}
          display="flex"
          direction="row"
          justifyContent="space-evenly"
        >
          {git.map(ele => (
            <Card
              elevation={0}
              sx={{
                minWidth: 275,
                borderColor: '#E5E5E5',
                borderWidth: 1,
                borderStyle: 'solid',
                padding: 1.5,
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 16, color: '#A7B1C2', fontWeight: 600 }}
                  gutterBottom
                >
                  {ele.label}
                </Typography>
                <Typography
                  sx={{ fontSize: 40, color: '#1E3146', fontWeight: 700 }}
                  variant="h5"
                  component="div"
                >
                  {currentCoin.developer_data[ele.key]}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    )
  );
};

export default Coin;
