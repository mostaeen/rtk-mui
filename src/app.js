import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup, Box, Button, TextField, Typography } from "@mui/material";
import {
  decrementAmount,
  incrementAmount,
  increment,
  decrement,
  multiply
} from "./store/calculatorSlice";

import { getBuildVersion, upgradeVersion } from "./store/appReducer";

const App = () => {
  const [amount, setAmount] = useState(0);
  const calcState = useSelector((state) => state.calculator);
  const state = useSelector((s) => s);
  const buildVersion = getBuildVersion(state);
  const dispatch = useDispatch();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ m: 0 }}>
        <Typography
          sx={{ py: 6, px: 3, backgroundColor: "secondary.light" }}
          variant="h2"
        >
          Redux Toolkit with MUI Template
        </Typography>
        <Box sx={{ p: 3 }}>
          <Typography variant="h3">{calcState.value}</Typography>
          <Box sx={{ m: 3 }}>
            <ButtonGroup>
              <Button onClick={() => dispatch(increment())}>+</Button>
              <Button onClick={() => dispatch(decrement())}>-</Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ m: 3 }}>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Enter Amount"
                type="number"
                onChange={(e) => setAmount(parseInt(e.target.value, 0))}
              />
            </Box>
            <ButtonGroup>
              <Button
                disabled={!amount}
                onClick={() => dispatch(incrementAmount(amount))}
              >
                Add
              </Button>
              <Button
                disabled={!amount || !calcState.value}
                onClick={() => dispatch(decrementAmount(amount))}
              >
                Subtract
              </Button>
              <Button
                disabled={!amount || !calcState.value}
                onClick={() => dispatch(multiply(amount))}
              >
                Multiply
              </Button>
            </ButtonGroup>
            <Typography sx={{ m: 3, fontStyle: "italic" }}>
              Actions are written to keep the amount from going below zero
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1 / 1,
              justifyContent: "center",
              alignContent: "space-between"
            }}
          >
            <Typography sx={{ mb: 2 }}>Build: #{buildVersion}</Typography>
            <Button
              color="secondary"
              onClick={() => dispatch(upgradeVersion())}
            >
              Upgrade
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
