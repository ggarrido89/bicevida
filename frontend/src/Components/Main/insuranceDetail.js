import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as insuranceService from "../../API/insurance";
import { detailStyles } from "./styles";

export default function InsuranceDetail(props) {
  const classes = detailStyles();
  const [insurance, setInsurance] = useState(null);

  useEffect(() => {
    insuranceService
      .getInsurance(props.insuranceId)
      .then((res) => setInsurance(res.data.insurance));
  }, [props.insuranceId]);
  return insurance ? (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardImg}
        image={insurance.image}
        title="BICE VIDA"
      >
        <Chip
          className={classes.cardLabel}
          label={`$ ${insurance.price} Mensual`}
          color="primary"
        />
      </CardMedia>
      <CardContent className="card-content">
        <h3 className={classes.cardTitle}>{insurance.name}</h3>
        <p className={classes.cardParagraph}>{insurance.description}</p>
      </CardContent>
    </Card>
  ) : (
    <CircularProgress className={classes.progress} />
  );
}
