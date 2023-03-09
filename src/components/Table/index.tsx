/* eslint-disable camelcase */
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableSortLabel,
  Box,
  TablePagination,
  Button,
} from '@mui/material';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import InfoIcon from '@mui/icons-material/Info';
import React, { ChangeEvent, FC, useState } from 'react';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import { useNavigate } from 'react-router-dom';

interface TableProp {
  data: any[] | null;
  setFavorite: (coinId: any) => void;
  removeFavorite: (coinId: any) => void;
  favorites: any[] | null;
}

const TableMoney: FC<TableProp> = ({
  data,
  setFavorite,
  favorites,
  removeFavorite,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table
          style={{ background: '#F8FAFD' }}
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="bold" />
              <TableCell className="bold" align="left">
                #
                <TableSortLabel IconComponent={ArrowDropUpRoundedIcon} active />
              </TableCell>
              <TableCell className="bold">Nome</TableCell>
              <TableCell className="bold" align="right">
                Preço
              </TableCell>
              <TableCell className="bold" align="right">
                24h %
              </TableCell>
              <TableCell className="bold" align="right">
                7d %
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                  }}
                >
                  <Typography className="bold">Valor de mercado</Typography>
                  <InfoIcon
                    sx={{ color: '#A6B0C3', fontSize: 16, marginLeft: 0.7 }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow
                  key={`${row.name}idx`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {favorites?.map(coin => coin.id).includes(row.id) ? (
                      <StarRateRoundedIcon
                        onClick={() => removeFavorite(row)}
                        sx={{ color: '#F6B87E', 'cursor': 'pointer' }}
                      />
                    ) : (
                      <StarOutlineRoundedIcon
                        onClick={() => setFavorite(row)}
                        sx={{ color: '#A7B1C2', 'cursor': 'pointer' }}
                      />
                    )}
                  </TableCell>
                  <TableCell align="left">{row.market_cap_rank}</TableCell>
                  <TableCell component="th" scope="row">
                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="left"
                      alignItems="center"
                    >
                      <img
                        style={{ width: 24, height: 24, marginRight: 8 }}
                        src={row.image}
                        alt={row.name}
                        loading="lazy"
                      />
                      <Button
                        variant="text"
                        onClick={() => navigate(`/${row.id}`)}
                      >
                        <Typography
                          color="#000"
                          sx={{
                            fontSize: 16,
                            fontWeight: 600,
                            textTransform: 'none',
                          }}
                        >
                          {row.name}
                        </Typography>
                      </Button>

                      <Typography
                        sx={{ fontSize: 16, fontWeight: 400, color: '#A7B1C2' }}
                      >
                        {row.symbol.toUpperCase()}
                      </Typography>

                      <Button
                        className=""
                        variant="contained"
                        sx={{
                          borderRadius: 3,
                          fontSize: 12,
                          fontWeight: 700,
                          textTransform: 'none',
                          color: '#3C67F7',
                          background: '#E7F0FF',
                          boxShadow: 'none',
                          height: 43,
                          padding: 0.5,
                        }}
                      >
                        Buy
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell className="fw-600" align="right">
                    {USDollar.format(row.current_price)}
                  </TableCell>
                  <TableCell
                    className="fw-600"
                    style={{
                      color:
                        row.market_cap_change_percentage_24h >= 0
                          ? '#16C784'
                          : '#EA3943',
                      alignItems: 'center',
                    }}
                    align="right"
                  >
                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="right"
                      alignItems="center"
                    >
                      {row.market_cap_change_percentage_24h >= 0 ? (
                        <ArrowDropUpRoundedIcon className="ml-0" />
                      ) : (
                        <ArrowDropDownRoundedIcon className="ml-0" />
                      )}
                      {row.market_cap_change_percentage_24h.toFixed(2)}%
                    </Stack>
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        row.market_cap_change_percentage_24h >= 0
                          ? '#16C784'
                          : '#EA3943',
                      alignItems: 'center',
                    }}
                    className="fw-600"
                    align="right"
                  >
                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="right"
                      alignItems="center"
                    >
                      {row.market_cap_change_percentage_24h >= 0 ? (
                        <ArrowDropUpRoundedIcon className="ml-0" />
                      ) : (
                        <ArrowDropDownRoundedIcon className="ml-0" />
                      )}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </Stack>
                  </TableCell>
                  <TableCell className="fw-600" align="right">
                    {USDollar.format(row.market_cap)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data && (
        <TablePagination
          rowsPerPageOptions={[18, 10, 15]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </>
  );
};

export default TableMoney;
