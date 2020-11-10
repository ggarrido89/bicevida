import { makeStyles } from "@material-ui/core";
import React from "react";

export const formStyles = makeStyles({
  button: {
    display: "flex",
    flexDirection: "row",
    padding: "8px 32px",
    width: 113,
    height: 48,
    backgroundColor: "#1F61F7",
    boxShadow: "0px 10px 16px rgba(18, 25, 84, 0.07)",
    bordeRadius: 1000,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: 32,
    textAlign: "center",
    color: "#FFFFFF",
  },
  formControl: {
    background: "#FFFFFF",
    border: "1px solid #DDE3ED",
    // borderColor: "solid #DDE3ED",
    boxSizing: "border-box",
    borderRadius: "4px",
    fontFamily: "Poppins-Regular",
    "&:focus": {
      background: "#FFFFFF",
      border: "2px solid #1F61F7",
      //   borderColor: "solid #1F61F7",
      boxSizing: "border-box",
      borderRadius: "4px",
      fontFamily: "Poppins-Regular",
    },
  },
  select: {
    border: "none",
    borderWidth: "0px",
    "&:focus": {
      background: "#FFFFFF",
      border: "2px solid #1F61F7",
      boxSizing: "border-box",
      borderRadius: "4px",
      fontFamily: "Poppins-Regular",
    },
  },
  label: {
    paddingTop: "15px",
    fontFamily: "Poppins-Regular",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "16px",
    color: "#AFBACC",

    "&:focus": {
      fontFamily: "Poppins-Regular",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 16,
      color: "#1F61F7",
    },
  },
});

export const detailStyles = makeStyles({
  card: {
    width: 328,
    background: "#FFFFFF",
    border: "1px solid #DDE3ED",
    borderRadius: 8,
  },
  cardImg: {
    paddingLeft: 10,
    paddingTop: "80%",
  },
  cardLabel: {
    background: "#1F61F7",
    borderRadius: 4,
    fontFamily: "Poppins-Regular",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.2,
    color: "#F5F7FA",
    marginBottom: 10,
  },
  cardTitle: {
    width: 216,
    height: 24,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    lineHeight: "24px",
    letterSpacing: "-0.2px",
    color: "#060B25",
  },
  cardParagraph: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: "24px",
    letterSpacing: "-0.2px",
    color: "#58606E",
  },
  progress: {
    marginLeft: "50%",
    color: "#1F61F7",
  },
});
