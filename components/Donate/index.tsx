"use client";
import React, { useState } from "react";
import {
  ApplePay,
  GooglePay,
  CreditCard,
  PaymentForm,
} from "react-square-web-payments-sdk";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Donate = ({ setTotal, total, order, setOrder }) => {
  const handleRemoveItem = (index) => {
    let newArr = [...order];
    order[index].con;
    if (order[index].includes("ToolBox")) {
      let subtractAmount = parseFloat(
        process.env.NEXT_PUBLIC_MINERVA_TOOLBOX_PRICE || "0"
      );
      setTotal(total - subtractAmount);
    }

    if (order[index].includes("Cube")) {
      let subtractAmount = parseFloat(
        process.env.NEXT_PUBLIC_MINERVA_CUBE_PRICE || "0"
      );
      setTotal(total - subtractAmount);
    }
    newArr.splice(index, 1);
    setOrder(newArr);
  };

  return (
    <>
      {/* <!-- ===== Square Payment Processing Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto xl:px-0">
          <div className="grid gap-4 pt-6 md:grid-cols-2">
            <div className="mx-auto">
              <div className="text-center">
                <b>{"Total: $" + total}</b>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>{item}</div>
                  <IconButton onClick={() => handleRemoveItem(index)}>
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
            </div>
            <div className="mx-auto">
              <PaymentForm
                applicationId="sandbox-sq0idb-mf6AEZGncYBANcotzq8Tpg"
                cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                  const response = await fetch("/api/donate", {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                      sourceId: token.token,
                      total: total,
                    }),
                  });
                }}
                locationId="LKHASG2MN9WZ0"
                createPaymentRequest={() => ({
                  countryCode: "US",
                  currencyCode: "USD",
                  total: {
                    amount: total.toString(),
                    label: "Total",
                  },
                })}
              >
                {/* <ApplePay /> */}
                <div className="mx-auto mx-1/2">
                  <GooglePay />
                  <br />
                  <CreditCard
                    buttonProps={{
                      css: {
                        backgroundColor: "#65acd7",
                        fontSize: "18px",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#448be3",
                        },
                      },
                    }}
                  >
                    {"Pay " + "$" + total}
                  </CreditCard>
                </div>
              </PaymentForm>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Donate End ===== --> */}
    </>
  );
};

export default Donate;
