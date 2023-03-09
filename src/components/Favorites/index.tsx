/* eslint-disable camelcase */
import { Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

interface FavoritesProps {
  coin: any;
}

const Favorites: React.FC<FavoritesProps> = ({ coin }) => {
  const {
    symbol,
    current_price,
    market_cap_rank,
    market_cap_change_percentage_24h,
  } = coin;

  const Real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 300,
        minWidth: 235,
        maxHeight: 118,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        overflow: 'initial',
      }}
    >
      <CardContent>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding={0}
          >
            <Typography sx={{ fontSize: 40, fontWeight: 700 }} color="#1E3146">
              {market_cap_rank}
            </Typography>
            <StarRateRoundedIcon
              className="ml-0"
              sx={{ marginLeft: 0, color: '#F6B87E', fontSize: 24 }}
            />
          </Stack>

          <Stack>
            <Typography
              color="#1E3146"
              sx={{ fontSize: 28, fontWeight: 700 }}
              variant="h5"
              component="div"
            >
              {symbol.toUpperCase()}

              {market_cap_change_percentage_24h >= 0 ? (
                <ArrowDropUpRoundedIcon
                  sx={{ marginLeft: 0, color: '#16C784', fontSize: 24 }}
                  className="ml-0"
                />
              ) : (
                <ArrowDropDownRoundedIcon
                  sx={{ marginLeft: 0, color: '#EA3943', fontSize: 24 }}
                  className="ml-0"
                />
              )}
            </Typography>
            <Typography color="#A7B1C2" sx={{ fontSize: 16, fontWeight: 400 }}>
              {Real.format(current_price)}
            </Typography>
            <Typography
              sx={{
                color:
                  market_cap_change_percentage_24h >= 0 ? '#16C784' : '#EA3943',
                fontSize: 16,
                fontWeight: 400,
              }}
              variant="body2"
            >
              {market_cap_change_percentage_24h.toFixed(2)}%
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Favorites;
