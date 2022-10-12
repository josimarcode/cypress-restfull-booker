@restfulbooker
Feature: RestFul Booker API

    Welcome to Restful-booker an API that you can use to learn more about API Testing or try out API testing tools against Hello.
    Restful-booker is a Create Read Update Delete Web API that comes with authentication features and loaded with a bunch of bugs for you to explore

    Rule: Authorization

        @Authorization
        Scenario: Create token sucessfull
            When I access api request end point to create token
                | username | password    |
                | admin    | password123 |
            Then Verify below response status code 200
            And Verify the value exist

        @Authorization
        Scenario: Create token insucessfull
            When I access api request end point to create token
                | username | password   |
                | admin    | password12 |
            Then Verify below response mensage error "Bad credentials"

        @Authorization
        Scenario: The token must contain 15 characters
            When I access api request end point to create token
                | username | password    |
                | admin    | password123 |
            Then Verify below response status code 200
            And Verify contain characters 15


        @Booking
        Scenario: Get Booking Ids Filter with name
            When I access api request end point to get booking Ids
                | firstname | lastname |
                | Josimar   | Leon     |
            Then Verify below response status code 200

        @Booking
        Scenario: Get Booking Ids Filter with date
            When I access api request end point to get booking Ids
                | checkin    | checkout   |
                | 2018-01-01 | 2022-01-01 |
            Then Verify below response status code 200


        @Booking
        Scenario: Get Booking
            When I access api request end point to get booking 1688
            Then Verify below response status code 200


        @Booking
        Scenario: Create Booking
            When I access api request end point to create booking
                | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds |
                | Javier    | Leon     | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
            Then Verify below response status code 200


        @Booking
        Scenario: Update Booking
            When I access api request end point to update booking 1688
                | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds |
                | Javier    | Canto    | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
            Then Verify below response status code 200


        @Booking
        Scenario: Partial Update Booking
            When I access api request end point to partial update booking 1688
                | firstname | lastname |
                | Luciano    | Canto    |
            Then Verify below response status code 200







