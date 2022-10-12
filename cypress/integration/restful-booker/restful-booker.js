import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

When("I access api request end point to create token", (table) => {
  const url = `${Cypress.env("URL")}auth`;
  cy.log(url);
  cy.log(table);
  let rows = table.hashes();
  cy.log(rows);
  cy.log(rows[0].username);

  cy.request({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      username: rows[0].username,
      password: rows[0].password,
    },
  }).as("endpoint");
});

Then("Verify below response status code {int}", (statuscode) => {
  cy.get("@endpoint").then((response) => {
    expect(response.status).to.eq(statuscode);
    cy.log(response.body);
    cy.log(response.body.length);
  });
});

Then("Verify the value exist", () => {
  cy.get("@endpoint").then((response) => {
    expect(response.body.token).to.exist;
    cy.log(response.body.token);
  });
});

Then("Verify below response mensage error {string}", (message) => {
  cy.get("@endpoint").then((response) => {
    expect(response.body.reason).to.equal(message);
    cy.log(response.body.reason);
  });
});

Then("Verify contain characters {int}", (char) => {
  cy.get("@endpoint").then((response) => {
    expect(response.body.token).to.have.length(char);
    cy.log(response.body.token.length);
  });
});

When("I access api request end point to get booking Ids", (table) => {
  const url = `${Cypress.env("URL")}booking`;
  let rows = table.hashes();
  cy.log(url);
  cy.request({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    qs: {
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      checkin: rows[0].checkin,
      checkout: rows[0].checkout,
    },
  }).as("endpoint");
  cy.log(rows[0].firstname);
  cy.log(rows[0].lastname);
  cy.log(rows[0].checkin);
  cy.log(rows[0].checkout);
});

When("I access api request end point to get booking {int}", (id) => {
  const url = `${Cypress.env("URL")}booking/${id}`;
  cy.log(url);
  cy.request({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
  }).as("endpoint");
});

When("I access api request end point to create booking", (table) => {
  const url = `${Cypress.env("URL")}booking`;
  let rows = table.hashes();
  let lastName = parseInt(rows[0].totalprice);
  let depositPaid = Boolean(rows[0].depositpaid);
  cy.log(lastName);
  cy.log(depositPaid);
  cy.log(url);
  cy.request({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: {
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      totalprice: lastName,
      depositpaid: depositPaid,
      bookingdates: {
        checkin: rows[0].checkin,
        checkout: rows[0].checkout,
      },
      additionalneeds: "Breakfast",
    },
  }).as("endpoint");
});

When("I access api request end point to update booking {int}", (id, table) => {
  const url = `${Cypress.env("URL")}booking/${id}`;
  let rows = table.hashes();
  let lastName = parseInt(rows[0].totalprice);
  let depositPaid = Boolean(rows[0].depositpaid);
  cy.log(lastName);
  cy.log(depositPaid);
  cy.log(url);
  cy.request({
    method: "PUT",
    url: url,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      //"Cookie":"token=YWRtaW46cGFzc3dvcmQxMjM=]",
      "Authorization":"Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    
  
    body: {
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      totalprice: lastName,
      depositpaid: depositPaid,
      bookingdates: {
        checkin: rows[0].checkin,
        checkout: rows[0].checkout,
      },
      additionalneeds: "Breakfast",
    },
  }).as("endpoint");
});

When("I access api request end point to partial update booking {int}", (id, table) => {
  const url = `${Cypress.env("URL")}booking/${id}`;
  let rows = table.hashes();
  let lastName = parseInt(rows[0].totalprice);
  let depositPaid = Boolean(rows[0].depositpaid);
  cy.log(lastName);
  cy.log(depositPaid);
  cy.log(url);
  cy.request({
    method: "PATCH",
    url: url,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      //"Cookie":"token=YWRtaW46cGFzc3dvcmQxMjM=]",
      "Authorization":"Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    
  
    body: {
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      totalprice: lastName,
      depositpaid: depositPaid,
      bookingdates: {
        checkin: rows[0].checkin,
        checkout: rows[0].checkout,
      },
      additionalneeds: "Breakfast",
    },
  }).as("endpoint");
});



