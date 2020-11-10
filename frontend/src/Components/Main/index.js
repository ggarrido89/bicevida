import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container, Fab, Grid } from "@material-ui/core";
import InsuranceDetail from "./insuranceDetail";
import "../../Assets/Scss/style.scss";
import { formStyles } from "./styles";

export default function Main() {
  const classes = formStyles();
  // Se actualizará al dar click en botón
  const [insuranceId, setInsuranceId] = useState(0);

  // Se actualizará al seleccionar una opción en select
  const [selectedInsId, setSelectedInsId] = useState(0);

  // Listado de opciones en selector
  const insuranceList = [
    { value: 0, text: "Seleccionar", disabled: true },
    { value: 58, text: "Seguro Vida Activa", disabled: false },
    { value: 59, text: "Seguro Viaje Protegido", disabled: false },
  ];

  function handleChange(e) {
    const { value } = e.target;
    setSelectedInsId(value);
  }

  function handleClick(e) {
    setInsuranceId(selectedInsId);
  }

  return (
    <Container maxWidth="sm">
      <h1>Consulte su próximo seguro</h1>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined" className={classes.formControl}>
            <InputLabel id="insuranceId-label" className={classes.label}>
              Seleccionar Plan
            </InputLabel>
            <Select
              // className={classes.select}
              labelId="insuranceId-label"
              id="insuranceId"
              name="insuranceId"
              value={selectedInsId}
              onChange={handleChange}
              // label="Seleccione Plan"
            >
              {insuranceList.map((insurance, index) => (
                <MenuItem
                  key={index}
                  value={insurance.value}
                  disabled={insurance.disabled}
                >
                  {insurance.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Fab
            className={classes.button}
            variant="extended"
            color="primary"
            onClick={handleClick}
            disabled={!selectedInsId}
          >
            Buscar
          </Fab>
        </Grid>
        {insuranceId ? (
          <Grid item xs={12}>
            <InsuranceDetail insuranceId={insuranceId} />
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
}