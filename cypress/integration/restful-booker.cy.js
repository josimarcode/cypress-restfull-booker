/// <reference types="cypress" />

describe("Auth", () => {
    it("create token sucessfull", () => {
      cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/auth",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          username: "admin",
          password: "password123"
        },
      }).then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body.token).to.exist
          expect(res.body.token).to.have.length(15)
      })
    })
  
    it("Get Booking Ids", () => {
      cy.request({
        method: "GET",
        url: "https://restful-booker.herokuapp.com/booking",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res)=>{
          expect(res.status).to.eq(200)
      })
    })
  
    it("Get Booking Ids Filter with name", () => {
      cy.request({
        method: "GET",
        url: "https://restful-booker.herokuapp.com/booking",
        headers: {
          "Content-Type": "application/json",
        },
        qs:{
          "firstname":"Josimar",
          "lastname":"Leon"
        }
      }).then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body[0].bookingid).to.equal(3608)
          expect(res.body[0].bookingid).to.exist
      })
    })
  
    it("Get Booking Ids filter for date", () => {
      cy.request({
        method: "GET",
        url: "https://restful-booker.herokuapp.com/booking",
        headers: {
          "Content-Type": "application/json",
        },
        qs:{
          "checkin":"2018-01-01",
          "checkout":"2019-01-01"
        }
  
      }).then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body).to.have.length(4)
          cy.log(res.body[2])
  
      })
    })
  
    it("Get Booking", () => {
      cy.request({
        method: "GET",
        url: "https://restful-booker.herokuapp.com/booking/3608",
        headers: {
          "Accept": "application/json",
        },
      }).then((res)=>{
          expect(res.status).to.eq(200)
      })
    })
  
    it("Create Booking", () => {
      cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/booking",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        },
      }).then((res)=>{
          expect(res.status).to.eq(200)
      })
    })
  })
  